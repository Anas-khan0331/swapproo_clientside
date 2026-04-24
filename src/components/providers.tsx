"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { makeStore, setupListeners } from "@/store";

export function Providers({ children }: { children: React.ReactNode }) {
  const [store] = useState(() => {
    const s = makeStore();
    setupListeners(s.dispatch);
    return s;
  });

  return <Provider store={store}>{children}</Provider>;
}
