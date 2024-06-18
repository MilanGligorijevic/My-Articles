import React from "react";
import PageLayout from "../../components/PageLayout";
// import "./css/style.css";

function Introduction() {
  return (
    <PageLayout>
      <div>
        <h1 className="text-5xl mb-4">
          Welcome to my <span className="yellow_text">Articles</span>
        </h1>
        <h1 className="text-5xl">
          I'm Milan and this is where I document my coding/designing challenges
          and revelations
        </h1>
      </div>
    </PageLayout>
  );
}

export default Introduction;
