import React from "react";
import PageLayout from "../../components/PageLayout";
import ArticleInfo from "../../components/ArticleInfo";
import CodeContainer from "../../components/CodeContainer";
import img1 from "../../assets/img/HoverEffectRedesign1.PNG";
import img2 from "../../assets/img/HoverEffectRedesign2.PNG";
import img3 from "../../assets/img/HoverEffectRedesign3.PNG";
import video1 from "../../assets/video/HoverEffectRedesign4.mp4";
import ImageBox from "../../components/ImageBox";
import VideoBox from "../../components/VideoBox";
import Button from "../../components/Button";
import HighlightField from "../../components/HighlightField";
import Arrow from "../../assets/svg/arrow";

function HoverEffectRedesign() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4">
        <ArticleInfo
          title={"Hover effect redesign"}
          shortDescription={
            "Hover effect changes for better UX/UI in Framer Motion"
          }
          fullDescription={""}
        />
        <div className="flex gap-5 mb-6">
          <Button
            link={"https://mg-website-portfolio.netlify.app/#skills"}
            text={"Live Demo"}
          />
          <Button
            link={"https://github.com/MilanGligorijevic/MG-React-Portfolio"}
            text={"Source Code"}
          />
        </div>
        <h1 className="text-3xl text-custom-white">Description</h1>
        <p>
          Small redesign of one of the sections from my portfolio website. Main
          focus is on making UX/UI a bit better and more understandable. The
          initial design of the section is shown on the picture below. White
          boxes represent the technology with its logo.
        </p>
        <ImageBox src={img1} alt="skills section initial design" />
        <h1 className="text-3xl text-custom-white">Initial hover effect</h1>
        <p>
          Hover effect was pretty simple. It made hovered box pop-up by changing
          it's size and z-index.
        </p>
        <ImageBox src={img2} alt="skills section initial hover" />
        <p>
          Although the animation was pretty straight forward, it did not provide
          any information about the technology it represented nor about its
          usage.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> Framer Motion is my library of choice for animations
                in React and it is used in this example as well
              </div>
              <div className="flex gap-2">
                <Arrow /> npm i framer-motion
              </div>
            </>
          }
        />
        <h1 className="text-3xl text-custom-white">Redesign idea</h1>
        <p>
          Initial idea was to make a design where the hovered box would pop-up
          to the left and all other boxes would move to the right and the user
          would get a short explanation about the technology used.
        </p>
        <p>I found some example that resembled my idea:</p>
        <HighlightField
          children={
            <div className="flex gap-2">
              <Arrow />{" "}
              https://codesandbox.io/p/sandbox/heuristic-wozniak-2z01b?file=%2Fsrc%2Ftest.js%3A28%2C3
            </div>
          }
        />
        <p>
          Unfortunately since my boxes all used absolute positioning it was too
          complex to make and maintain. I opted for a bit simpler option to
          resize icon and display some description on hover.
        </p>
        <h1 className="text-3xl text-custom-white mt-2">
          Final design and implementation
        </h1>
        <p>
          I implemented changes to all of my boxes and I did not like how some
          of the icons looked when resized to smaller dimensions so I decided to
          remove them and keep just the text.
        </p>
        <p>
          Next step was to customize the text for each of the boxes and pass it
          throught.
        </p>
        <HighlightField
          children={
            <div className="flex gap-2">
              <Arrow /> I used props for this problem by passing technology
              description throught parent component SkillsContainer.jsx
            </div>
          }
        />
        <p>
          After a few smaller tweaks and changes I got the result that was
          simple to maintain and yet was a great fit to the rest of the
          portfolio in a design sense.
        </p>
        <VideoBox videoFile={video1} />
        <h1 className="text-3xl text-custom-white mt-2">Component code</h1>
        <CodeContainer
          code={`import React from "react";
import "./css/style.scss";
import { easeIn, easeInOut, motion } from "framer-motion";

function SkillBox(props) {
  const skillVariants = {
    initial: {
      rotate: props.rotate,
    },
    hover: {
      scale: 1.25,
      zIndex: 100,
      backgroundColor: "#222222",
      transition: {
        ease: easeIn,
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    hover: {
      opacity: [1, 0.4, 0.2, 0],
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 0.8,
      scale: 1.05,
      transition: {
        delay: 0.1,
        duration: 0.3,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className={skill_box \${props.class}}
      variants={skillVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.p className="skill_box_text" variants={textVariants}>
        {props.description}
      </motion.p>
      <motion.img
        src={props.svg}
        className="skills_logo"
        alt="skill"
        variants={iconVariants}
      ></motion.img>
    </motion.div>
  );
}

export default SkillBox;`}
          componentName={"SkillBox.jsx"}
          showMoreButton={true}
        />
      </div>
    </PageLayout>
  );
}

export default HoverEffectRedesign;
