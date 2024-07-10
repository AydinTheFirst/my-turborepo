import React from "react";
import ReactDOM from "react-dom/client";

import "@/styles/tailwind.css";
import "@/styles/index.css";

import { Toaster } from "@/components/Toaster";
import { Provider } from "@/providers";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorBoundaryLayout } from "./components/ErrorBoundary";
import { routes } from "@generouted/react-router";

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <React.StrictMode>
      <Provider>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </React.StrictMode>
  </>,
);
