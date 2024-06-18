import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Example2 from "./pages/Example2";
import Introduction from "./pages/Introduction";
import HoverEffectRedesign from "./pages/HoverEffectRedesign";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/introduction",
        element: <Introduction />,
      },
      {
        path: "/hoverEffectRedesign",
        element: <HoverEffectRedesign />,
      },
      {
        path: "/example2",
        element: <Example2 />,
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
