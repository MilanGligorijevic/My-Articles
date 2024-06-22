import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Introduction from "./pages/Introduction";
import HoverEffectRedesign from "./pages/HoverEffectRedesign";
import PortfolioSectionRedesign from "./pages/PortfolioSectionRedesign";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Introduction />,
      },
      {
        path: "/hoverEffectRedesign",
        element: <HoverEffectRedesign />,
      },
      {
        path: "/portfolioSectionRedesign",
        element: <PortfolioSectionRedesign />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
