# Swapproo — Client

Trade‑in marketplace connecting customers with certified recyclers. Built on **Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind v4**.

---

## 1. Tech stack

| Concern      | Library                                   |
| ------------ | ----------------------------------------- |
| Framework    | `next@16` (App Router, Turbopack)         |
| UI           | `react@19`, `tailwindcss@4`, `shadcn/ui`  |
| Icons        | `lucide-react`                            |
| Server state | `@reduxjs/toolkit/query` (RTK Query)      |
| Client state | `@reduxjs/toolkit` + `react-redux`        |
| Forms        | `react-hook-form` + `@hookform/resolvers` |

---

## 2. Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm tsc --noEmit # type check
```

When you change `next.config.ts` or `middleware.ts`, **restart the dev server** — HMR cannot reload those.

---

## 3. Folder structure

```
src/
├── app/                          ← Next.js App Router
│   ├── layout.tsx                ← Root layout (<html>/<body> + Redux Provider)
│   ├── error.tsx                 ← Error boundary
│   ├── not-found.tsx             ← 404
│   ├── globals.css               ← Tailwind entry
│   ├── (home)/                    ← Landing + public marketing pages
│   │   ├── layout.tsx
│   │   ├── page.tsx                ← Home page
│   │   ├── how-it-works/
│   │   └── trade-in/
│   │       ├── page.tsx
│   │       └── [productId]/      ← page / loading / error
│   ├── (auth)/                    ← Login / signup (minimal layout)
│   │   ├── login/
│   │   └── signup/
│   ├── (customer)/                ← Authenticated customer routes
│   │   ├── bids/
│   │   ├── profile/
│   │   └── my-trades/
│   ├── (recycler)/                ← Recycler dashboard routes
│   │   ├── onboarding/
│   │   ├── marketplace/
│   │   ├── inspection/
│   │   └── my-bids/
│   ├── (admin)/                   ← Admin panel
│   │   ├── users/
│   │   ├── recyclers/
│   │   └── inspections/
│   └── (support)/                 ← Support staff
│       ├── tickets/
│       └── disputes/
│
├── components/
│   ├── providers.tsx             ← Redux <Provider> (wraps the app)
│   ├── ui/                       ← shadcn primitives (Button, …)
│   ├── common/                   ← Reusable app widgets (empty scaffold)
│   └── layout/                   ← Header / Footer / MobileNav (empty scaffold)
│
├── features/                     ← Feature-sliced modules
│   ├── auth/          { components, schemas }   ← Login/Signup forms (react-hook-form)
│   ├── trade-in/      { components, hooks, queries, schemas, types }
│   ├── bidding/       { components, hooks, queries, schemas, types }
│   ├── inspection/    { components, schemas, types }
│   ├── recycler/      { components, schemas, types }
│   └── notifications/ { components, hooks }
│   #                    queries/  = RTK Query endpoints (api.injectEndpoints)
│   #                    schemas/  = form input types / resolver configs
│   #                    hooks/    = feature-local hooks (non-query)
│
├── config/
│   └── constants.ts              ← REGIONS, CURRENCIES
│
├── hooks/                        ← Cross-feature hooks (empty scaffold)
├── lib/utils.ts                  ← `cn()` helper (clsx + tailwind-merge)
├── store/
│   ├── index.ts                  ← configureStore + RootState / AppDispatch types
│   ├── api.ts                    ← RTK Query base API (tagTypes, baseUrl)
│   ├── hooks.ts                  ← Typed useAppDispatch / useAppSelector
│   └── slices/counterSlice.ts    ← Counter slice (test/example)
├── types/domain.ts               ← Core domain types (User, Product, Bid, …)
```

### Why route groups `(name)`

Parenthesised folders are **Next.js route groups** — they organise files by audience (admin / auth / customer / home / recycler / support) **without adding anything to the URL**.

| File path                         | URL           |
| --------------------------------- | ------------- |
| `(home)/page.tsx`                 | `/`           |
| `(home)/trade-in/[productId]/...` | `/trade-in/…` |
| `(auth)/login/page.tsx`           | `/login`      |
| `(admin)/users/page.tsx`          | `/users`      |

Each group can own its **own `layout.tsx`** — so the admin group can render a sidebar shell, while auth pages use a minimal centered layout, all without affecting URLs.

---

## 4. Routing flow (request lifecycle)

```
Browser → /some-path
   │
   ▼
┌─────────────────────────────────────────────────────┐
│ app/layout.tsx  (RootLayout)                        │
│   • Renders <html lang="en"> + <body>               │
│   • Wraps in Redux store                          │
│   • Imports globals.css                             │
└─────────────────────────────────────────────────────┘
   │
   ▼
┌─────────────────────────────────────────────────────┐
│ app/(group)/layout.tsx  (role shell)               │
│   • e.g. admin sidebar, customer nav                │
└─────────────────────────────────────────────────────┘
   │
   ▼
┌─────────────────────────────────────────────────────┐
│ app/(group)/.../page.tsx                            │
│   • Server Component by default                     │
│   • Plain English copy                              │
└─────────────────────────────────────────────────────┘
```

---

## 5. Page-by-page flow

### Home / marketing

| URL              | File                                       | Purpose                              |
| ---------------- | ------------------------------------------ | ------------------------------------ |
| `/`              | `app/(home)/page.tsx`                      | Landing page (hero, features, steps) |
| `/how-it-works`  | `app/(home)/how-it-works/page.tsx`         | Marketing explainer                  |
| `/trade-in`      | `app/(home)/trade-in/page.tsx`             | Browse devices                       |
| `/trade-in/[id]` | `app/(home)/trade-in/[productId]/page.tsx` | Product detail (+ loading / error)   |

### Auth

| URL       | File                         | Purpose       |
| --------- | ---------------------------- | ------------- |
| `/login`  | `app/(auth)/login/page.tsx`  | Sign in form  |
| `/signup` | `app/(auth)/signup/page.tsx` | Register form |

### Customer dashboard

| URL                    | File                                          | Purpose            |
| ---------------------- | --------------------------------------------- | ------------------ |
| `/profile`             | `app/(customer)/profile/page.tsx`             | Account settings   |
| `/bids`                | `app/(customer)/bids/page.tsx`                | Incoming bids      |
| `/my-trades`           | `app/(customer)/my-trades/page.tsx`           | List user's trades |
| `/my-trades/[tradeId]` | `app/(customer)/my-trades/[tradeId]/page.tsx` | Trade detail       |

### Recycler dashboard

| URL                          | File                                                | Purpose                  |
| ---------------------------- | --------------------------------------------------- | ------------------------ |
| `/onboarding`                | `app/(recycler)/onboarding/page.tsx`                | KYC / business setup     |
| `/marketplace`               | `app/(recycler)/marketplace/page.tsx`               | Open listings to bid on  |
| `/marketplace/[productId]`   | `app/(recycler)/marketplace/[productId]/page.tsx`   | Place a bid              |
| `/my-bids`                   | `app/(recycler)/my-bids/page.tsx`                   | Submitted bids           |
| `/my-bids/[bidId]`           | `app/(recycler)/my-bids/[bidId]/page.tsx`           | Single bid status        |
| `/inspection`                | `app/(recycler)/inspection/page.tsx`                | Assigned inspections     |
| `/inspection/[inspectionId]` | `app/(recycler)/inspection/[inspectionId]/page.tsx` | Run inspection checklist |

### Admin

| URL            | File                               | Purpose             |
| -------------- | ---------------------------------- | ------------------- |
| `/users`       | `app/(admin)/users/page.tsx`       | User management     |
| `/recyclers`   | `app/(admin)/recyclers/page.tsx`   | Approve recyclers   |
| `/inspections` | `app/(admin)/inspections/page.tsx` | Oversight of audits |

### Support

| URL                   | File                                        | Purpose       |
| --------------------- | ------------------------------------------- | ------------- |
| `/tickets`            | `app/(support)/tickets/page.tsx`            | Ticket queue  |
| `/tickets/[ticketId]` | `app/(support)/tickets/[ticketId]/page.tsx` | Ticket thread |
| `/disputes`           | `app/(support)/disputes/page.tsx`           | Open disputes |

> ⚠️ All pages except the home page are currently **minimal stubs** — they exist to cement the routing topology. Wire each to its feature module under `src/features/*` as you build.

---

## 6. Trade-in end‑to‑end journey

```
Customer                                        Recycler                         Admin/Support
────────                                        ────────                         ─────────────
 1. Landing  ──── / ──────────┐
                               │
 2. Browse    /trade-in        │
 3. Detail    /trade-in/:id    │
 4. Signup    /signup ─────────┘
 5. Submit device (form)   ─────────────►  Appears in /marketplace
 6. Receive bids on         ◄────────────  /marketplace/:id  (place bid)
    /bids, /my-trades/:id
 7. Accept winning bid      ─────────────► Recycler gets /my-bids/:id = accepted
                                           Inspection assigned → /inspection/:id
 8. Ship device             ─────────────► Inspection complete
 9. Payment released        ◄────────────  ✓ in /my-trades/:id
                                                                            Admin monitors via
                                                                            /users, /recyclers,
                                                                            /inspections
                                                                            Support handles via
                                                                            /tickets, /disputes
```

---

## 7. Domain model (`src/types/domain.ts`)

- **Role**: `customer | recycler | support | admin`
- **Product**: device submitted for trade‑in, with condition + status
- **Bid**: recycler's offer on a product
- **Inspection**: physical audit after shipment
- **User**: identity + role + region + locale

---

## 8. State management

- **Server data** → **RTK Query** via the base API in `src/store/api.ts`. Define endpoints per feature with `api.injectEndpoints({ endpoints: (build) => ({ ... }) })` (typical location: `src/features/<feature>/queries/*`). Auto-generated hooks: `useGetXQuery`, `useCreateXMutation`, etc. Cache invalidation via `tagTypes` already declared on the base API (`Product`, `Bid`, `Inspection`, `User`, `Trade`).
- **Client state** (shared UI flags, auth session, filters) → **Redux Toolkit slices** in `src/store/slices/`. Example: `counterSlice` (increment/decrement/reset). Read with `useAppSelector`, dispatch with `useAppDispatch` from `src/store/hooks.ts`. Local component state can stay in `useState`.
- **Forms** → **react-hook-form** (`useForm`, `Controller`). Live under `src/features/<feature>/components/*Form.tsx`. For complex validation use `@hookform/resolvers` with your validator of choice.
- Store is instantiated **once per React tree** inside `src/components/providers.tsx` using lazy `useState`, so server and client renders stay in sync.

### Adding an RTK Query endpoint

```ts
// src/features/trade-in/queries/useProducts.ts
import { api } from "@/store/api";
import type { Product } from "@/types/domain";

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    listProducts: build.query<Product[], void>({
      query: () => "/products",
      providesTags: ["Product"],
    }),
  }),
});

export const { useListProductsQuery } = productsApi;
```

### Adding a form

```tsx
"use client";
import { useForm } from "react-hook-form";

type Inputs = { email: string; password: string };

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("email", { required: true })} />
      {errors.email && <span>Required</span>}
      <input type="password" {...register("password", { required: true })} />
      <button type="submit">Log in</button>
    </form>
  );
}
```

---

## 9. Conventions

- Server Components by default; add `"use client"` only when needed (interactivity, hooks).
- Feature-sliced: co-locate `components / hooks / queries / schemas / types` under `src/features/<feature>/`.
  - `queries/` = RTK Query endpoint slices (`api.injectEndpoints`).
  - `schemas/` = form input types and (optional) resolver configs for react-hook-form.
  - `hooks/` = feature-local hooks that aren't RTK Query queries/mutations.
- Cross-feature reusable primitives go in `src/components/` and `src/lib/`.
- Keep copy in components directly (no i18n abstraction layer).
- Tailwind v4 syntax (`bg-linear-to-b`, not `bg-gradient-to-b`).

---

## 10. Tooling

### Scripts

| Command                | What it does                                                     |
| ---------------------- | ---------------------------------------------------------------- |
| `pnpm dev`             | Start dev server with HMR (Turbopack)                            |
| `pnpm build`           | Production build                                                 |
| `pnpm build:watch`     | Re-runs `next build` on any change under `src/` (nodemon-driven) |
| `pnpm start`           | Start the production server                                      |
| `pnpm lint`            | Run ESLint                                                       |
| `pnpm lint:fix`        | Run ESLint with autofix                                          |
| `pnpm format`          | Prettier-format all files                                        |
| `pnpm format:check`    | Check formatting without writing                                 |
| `pnpm typecheck`       | `tsc --noEmit`                                                   |
| `pnpm typecheck:watch` | Type-check on every save                                         |

For day-to-day work, run `pnpm dev` in one terminal and `pnpm typecheck:watch` in another — you'll get hot reload plus live type errors without paying the cost of a full `build` on every save.

### Prettier

Config: `.prettierrc.json` — 2-space, double quotes, 100-col width, trailing commas, `prettier-plugin-tailwindcss` to sort Tailwind classes deterministically.

Ignore list: `.prettierignore` (build output, lockfiles, locale JSON, public assets).

### ESLint

Flat config in `eslint.config.mjs`:

- Extends `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.
- Disables all formatting rules that would fight Prettier (`eslint-config-prettier`).
- Project-specific rules: no `console` except `.warn` / `.error`, no `debugger`, `prefer-const`, strict `eqeqeq`, enforced `import type` style, unused-vars allowed with leading `_`, self-closing JSX components.

### Format on save (editor-specific)

Configure your own editor — the repo does not ship editor configs. For VS Code, add to your **user** `settings.json`:

```jsonc
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": { "source.fixAll.eslint": "explicit" },
}
```

Recommended extensions: `esbenp.prettier-vscode`, `dbaeumer.vscode-eslint`, `bradlc.vscode-tailwindcss`.

Even without editor integration the **pre-commit hook below auto-formats every staged file**, so nothing unformatted lands in `git`.

### Pre-commit hook (husky + lint-staged)

On each `git commit`, staged files run through:

- `*.{ts,tsx,js,jsx,mjs}` → `eslint --fix` then `prettier --write`
- `*.{json,md,css}` → `prettier --write`

The hook is in `.husky/pre-commit`; `pnpm prepare` (run on install) wires it up. New contributors get it automatically after `pnpm install`.

---

## 12. Deployment note

Next 16 has deprecated the `middleware` filename in favour of `proxy`. When you're ready:

```bash
git mv src/middleware.ts src/proxy.ts
```

No code changes required, just the filename.
