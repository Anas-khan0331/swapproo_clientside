import { type ReactNode } from "react";

const Show = ({ when = true, children }: { when?: boolean; children: ReactNode }) => {
  if (!when) return null;
  return children;
};

export default Show;
