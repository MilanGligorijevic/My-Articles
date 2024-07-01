import React from "react";
import ArticlePreview from "../ArticlePreview";
import article1Video from "../../assets/video/HoverEffectRedesign4.mp4";
import article2Video from "../../assets/video/PortfolioSectionRedesign4.mp4";
import article3Video from "../../assets/video/DropdownMenu5.mp4";
import article5Video from "../../assets/video/StaggeredTextAnimation4.mp4";
import { Link } from "react-router-dom";

function LatestArticlesContainer() {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-start">
        <h1 className="text-3xl text-custom-white mb-6 lg:text-2xl">
          Latest Articles
        </h1>
        <button className="hidden md:block text-custom-white hover:underline pt-1">
          <Link to="/exploreAllArticles">Explore all</Link>
        </button>
      </div>
      <div className="flex flex-wrap gap-7">
        <ArticlePreview
          img={article5Video}
          title={"Staggered text animation"}
          description={
            "If you have ever visited any of the Awwwards winning websites you must have seen this animation. It is simple yet eye pleasing which is exactly why I tried to recreate it."
          }
          articleLink={"/dropdownMenu"}
          tags={["hover", "design"]}
        />
        <ArticlePreview
          img={article3Video}
          title={"Dropdown menu"}
          description={
            "I needed a dropdown menu button and animation for my Articles website. I decided to go for a simple dropdown animation with a little spin."
          }
          articleLink={"/dropdownMenu"}
          tags={["click", "design"]}
        />
        <ArticlePreview
          img={article2Video}
          title={"Portfolio section redesign"}
          description={
            "Complete redesign of Projects section from my portfolio website. The initial design was not suitable for the rest of the website which is why it had to be adjusted"
          }
          articleLink={"/portfolioSectionRedesign"}
          tags={["hover", "design"]}
        />
        <ArticlePreview
          img={article1Video}
          title={"Hover effect redesign"}
          description={
            "Small redesign of one of the sections from my portfolio website. Main focus was on making UX/UI a bit better and more understandable"
          }
          articleLink={"/hoverEffectRedesign"}
          tags={["hover"]}
        />
      </div>
    </div>
  );
}

export default LatestArticlesContainer;
