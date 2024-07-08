import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Introduction from "./pages/Introduction";
import HoverEffectRedesign from "./pages/HoverEffectRedesign";
import PortfolioSectionRedesign from "./pages/PortfolioSectionRedesign";
import DropdownMenu from "./pages/DropdownMenu";
import LandingPageDesign from "./pages/LandingPageDesign";
import ExploreAllArticles from "./pages/ExploreAllArticles";
import StaggeredTextAnimation from "./pages/StaggeredTextAnimation";
import AddingMyArticlesToPortfolio from "./pages/AddingMyArticlesToPortfolio";

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
      {
        path: "/dropdownMenu",
        element: <DropdownMenu />,
      },
      {
        path: "/landingPageDesign",
        element: <LandingPageDesign />,
      },
      {
        path: "/exploreAllArticles",
        element: <ExploreAllArticles />,
      },
      {
        path: "/staggeredTextAnimation",
        element: <StaggeredTextAnimation />,
      },
      {
        path: "/addingMyArticlesToPortfolio",
        element: <AddingMyArticlesToPortfolio />,
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
