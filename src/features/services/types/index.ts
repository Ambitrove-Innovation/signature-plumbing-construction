import type { ReactNode } from "react";

export interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
  details: string;
  slug: string;
}
