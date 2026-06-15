const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "/api";

type RequestOptions = RequestInit & { params?: Record<string, string> };

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, ...init } = options;
  let url = `${BASE_URL}${endpoint}`;

  if (params) {
    const qs = new URLSearchParams(params).toString();
    url = `${url}?${qs}`;
  }

  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message ?? `HTTP ${res.status}`);
  }

  return res.json();
}

export const http = {
  get: <T>(url: string, opts?: RequestOptions) => request<T>(url, { ...opts, method: "GET" }),
  post: <T>(url: string, body: unknown, opts?: RequestOptions) =>
    request<T>(url, { ...opts, method: "POST", body: JSON.stringify(body) }),
  put: <T>(url: string, body: unknown, opts?: RequestOptions) =>
    request<T>(url, { ...opts, method: "PUT", body: JSON.stringify(body) }),
  patch: <T>(url: string, body: unknown, opts?: RequestOptions) =>
    request<T>(url, { ...opts, method: "PATCH", body: JSON.stringify(body) }),
  delete: <T>(url: string, opts?: RequestOptions) => request<T>(url, { ...opts, method: "DELETE" }),
};
