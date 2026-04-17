import type { ReactNode } from "react";

export interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
  details: string;
  slug: string;
}

export interface Testimonial {
  name: string;
  text: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
