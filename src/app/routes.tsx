import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/components/layout";
import { HomePage } from "@/features/home/HomePage";
import { ServicesPage } from "@/features/services/ServicesPage";
import { ReviewsPage } from "@/features/reviews/ReviewsPage";
import { FaqPage } from "@/features/faq/FaqPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "reviews",
        element: <ReviewsPage />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
    ],
  },
]);
