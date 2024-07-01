import React from "react";
import PageLayout from "../../components/PageLayout";
import ArticleInfo from "../../components/ArticleInfo";
import Button from "../../components/Button";
import VideoBox from "../../components/VideoBox";
import video1 from "../../assets/video/StaggeredTextAnimation4.mp4";
import video2 from "../../assets/video/StaggeredTextAnimation2.mp4";
import video3 from "../../assets/video/StaggeredTextAnimation3.mp4";
import img1 from "../../assets/img/StaggeredTextAnimation1.PNG";
import HighlightField from "../../components/HighlightField";
import Arrow from "../../assets/svg/arrow";
import ImageBox from "../../components/ImageBox";
import CodeContainer from "../../components/CodeContainer";

function StaggeredTextAnimation() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4">
        <ArticleInfo
          title={"Staggered text animation"}
          shortDescription={
            "Simple and appealing animation seen in most Awwwards winning websites"
          }
        />
        <div className="flex gap-5 mb-6">
          <Button
            link={"https://mg-staggered-text-animation.netlify.app/"}
            text={"Live Demo"}
          />
          <Button
            link={
              "https://github.com/MilanGligorijevic/staggered-text-animation"
            }
            text={"Source Code"}
          />
        </div>
        <h1 className="text-3xl text-custom-white sm:text-2xl">Description</h1>
        <p>
          If you have ever visited any of the Awwwards winning websites you must
          have seen this animation. It is simple yet eye pleasing which is
          exactly why I tried to recreate it.
        </p>
        <VideoBox videoFile={video1} />
        <h1 className="text-3xl text-custom-white sm:text-2xl">
          Initial setup
        </h1>
        <p>
          For making this animation I used React, Tailwind and Framer Motion.
          First of all it is necessary to setup the environment by creating
          React app, adding Tailwind and installing Framer Motion.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> npx create-react-app app-name
              </div>
              <div className="flex gap-2">
                <Arrow /> Adding tailwind
                https://tailwindcss.com/docs/guides/create-react-app
              </div>
              <div className="flex gap-2">
                <Arrow /> npm i framer-motion
              </div>
            </>
          }
        />
        <p>
          First of all I created a simple component with bright background
          color, yellow in this case, and added some text in the center of it.
          It was a decent initial look to showcase staggered animation.
        </p>
        <ImageBox src={img1} alt="staggered text initial design" />
        <h1 className="text-3xl text-custom-white sm:text-2xl">
          Animation setup
        </h1>
        <p>
          The initial setup was done so it was time to add some animation and
          complexity to it. For this animation to work I had to add two div
          containers with word I wanted to animate. First container would be
          visible at first then on hover it would move out of view on Y axis and
          the second div would come in.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> Please not for this to work, parent of those
                containers has to have overflow-hidden
              </div>
            </>
          }
        />
        <p>
          As previously noted, for animations I used Framer Motion and its
          variants. I made a variant in which on hover the div would move for a
          100% on Y axis.
        </p>
        <VideoBox videoFile={video2} />
        <CodeContainer
          code={`import React from "react";
import { motion } from "framer-motion";

function AnimatedText({ children }) {
  const animationVariants = {
    initial: { y: 0 },
    hover: { y: "-100%" },
  };

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      <motion.div variants={animationVariants}>{children}</motion.div>
    </motion.div>
  );
}

export default AnimatedText;
`}
          componentName={"AnimatedText.js"}
          showMoreButton={true}
        />
        <p>
          This was the initial animation of the first div container and in the
          same way I added another div container with exaclty the same word and
          similar movement on Y axis that would show up on cover.
        </p>
        <VideoBox videoFile={video3} />
        <HighlightField
          children={
            <div className="flex gap-2">
              <Arrow /> Please note that for this to work second div container
              has to have absolute positioning
            </div>
          }
        />
        <h1 className="text-3xl text-custom-white mt-2 sm:text-2xl">
          Fine-tuning and final animation
        </h1>
        <p>
          Basic setup was done but for the animation to resemble Awwwards
          winning websites it had to be tweaked and changed.
        </p>
        <p>
          Instead of animating the entire word at once, it was better to animate
          letter by letter to get that staggered effect. With that being said I
          divided my words into arrays of letters inside of span elements.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> After those changes animation stopped working due to a
                span being an inline element
              </div>
              <div className="flex gap-2">
                <Arrow /> For it to work I had to make tweak those span elements
                by adding inline-block property
              </div>
            </>
          }
        />
        <p>
          I iterated throught letters arrays by using map function. Index
          parameter came in handy for adding additional delay to each letter
          which resulted in that staggered effect.
        </p>
        <p>
          After making those changes and adding some duration and easing to
          animation I was satisfied with my final result.
        </p>
        <VideoBox videoFile={video1} />
        <CodeContainer
          code={`import React from "react";
import { motion } from "framer-motion";

function AnimatedText({ children }) {
  const animationVariants = {
    initial: { y: 0 },
    hover: {
      y: "-100%",
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      <div>
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block"
              variants={animationVariants}
              transition={{
                duration: 0.18,
                delay: 0.03 * index,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute">
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block"
              variants={animationVariants}
              transition={{
                duration: 0.18,
                delay: 0.03 * index,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}

export default AnimatedText;

`}
          componentName={"AnimatedText.js"}
          showMoreButton={true}
        />
      </div>
    </PageLayout>
  );
}

export default StaggeredTextAnimation;
