import React from "react";
import PageLayout from "../../components/PageLayout";
import LatestArticlesContainer from "../../components/LatestArticlesContainer";
// import "./css/style.css";

function Introduction() {
  return (
    <PageLayout>
      <div>
        <h1 className="text-5xl mb-5 text-custom-white lg:text-4xl ms:text-xl">
          Welcome to my <span className="yellow_text">Articles</span>
        </h1>
        <h1 className="text-4xl text-custom-white mb-28 lg:text-3xl sm:hidden">
          I'm Milan and this is where I document my coding
          <span className="yellow_text font-bold ml-1">/</span>designing
          challenges and revelations.
        </h1>
        <h1 className="hidden sm:block text-xl text-custom-white mb-20">
          I'm Milan and this is where I document my coding
          <span className="yellow_text font-bold ml-1">/</span>designing
          challenges and revelations.
        </h1>
        <LatestArticlesContainer />
      </div>
    </PageLayout>
  );
}

export default Introduction;
