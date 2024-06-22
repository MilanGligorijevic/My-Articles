import React from "react";
import PageLayout from "../../components/PageLayout";
import ArticleInfo from "../../components/ArticleInfo";
import Button from "../../components/Button";
import ImageBox from "../../components/ImageBox";
import VideoBox from "../../components/VideoBox";
import CodeContainer from "../../components/CodeContainer";
import HighlightField from "../../components/HighlightField";
import Arrow from "../../assets/svg/arrow";
import img1 from "../../assets/img/PortfolioSectionRedesign1.PNG";
import img2 from "../../assets/img/PortfolioSectionRedesign2.PNG";
import img3 from "../../assets/img/PortfolioSectionRedesign3.PNG";
import video1 from "../../assets/video/PortfolioSectionRedesign4.mp4";

function PortfolioSectionRedesign() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4">
        <ArticleInfo
          title={"Portfolio section redesign"}
          shortDescription={
            "Projects section design changes on my portfolio for a more suitable UI"
          }
        />
        <div className="flex gap-5 mb-6">
          <Button
            link={"https://mg-website-portfolio.netlify.app/#projects"}
            text={"Live Demo"}
          />
          <Button
            link={"https://github.com/MilanGligorijevic/MG-React-Portfolio"}
            text={"Source Code"}
          />
        </div>
        <h1 className="text-3xl text-custom-white">Description</h1>
        <p>
          Complete redesign of Projects section from my portfolio website. The
          initial design was not suitable for the rest of the website which is
          why it had to be adjusted. It was also not very clear to the end user
          that there were more than one projects presented. I decided to go for
          a more simple look with animations that work well with the rest of the
          design.
        </p>
        <h1 className="text-3xl text-custom-white">Initial design</h1>
        <ImageBox src={img1} alt="projects section initial design" />
        <p>
          It was just a simple image carousel that contained ProjectPreview
          components on each slide displaying project's name, landing page and a
          button to the website.
        </p>
        <h1 className="text-3xl text-custom-white">Redesign idea</h1>
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
        <p>
          Idea was to make something that will be more appealing and more
          understandable on the first sight. I decided to spread project names
          into separate rows each representing a single link to the project.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> Each project is hosted on Netlify platform and
                available online
              </div>
            </>
          }
        />
        <ImageBox src={img2} alt="projects section initial design" />
        <p>
          This way end user could get a representation of all projects at once
          and they fitted end-design better. Since I previously had images of
          the projects I needed some way to make a short overview of the project
          in the new design. With that being said I added short descriptions as
          the text in the background which was the exact same technic I used on
          the rest of the portfolio.
        </p>
        <ImageBox src={img3} alt="projects section initial design" />
        <h1 className="text-3xl text-custom-white mt-2">
          Final design and implementation
        </h1>
        <p>
          After changes to font sizes and colors I got the result that was
          better fitting the rest of the portfolio website.
        </p>
        <p>
          Hovering any of the project names would speed up sliding animation to
          the left and enable end user to get overview of the project hovered.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> Animation is made by using Framer Motion variants
              </div>
            </>
          }
        />
        <VideoBox videoFile={video1} />
        <h1 className="text-3xl text-custom-white mt-2">Component code</h1>
        <CodeContainer
          code={`import React from "react";
import "./css/style.scss";
import { motion } from "framer-motion";

function ProjectsList() {
  const sliderTextVariants = {
    initialRight: {
      x: "10%",
    },
    animateRight: {
      x: "10%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 30,
      },
    },
    initialLeft: {
      x: "-10%",
    },
    animateLeft: {
      x: "-10%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 30,
      },
    },
    hover: {
      x: "-30%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 9,
      },
    },
  };

  return (
    <div className="projects_list">
      <a
        href="https://hungry-reservations.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialLeft"
          animate="animateRight"
          whileHover="hover"
        >
          HUNGRY
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            DEVELOPED WEB APPLICATION FOR MAKING RESERVATIONS IN LOCAL GREEK
            RESTAURANT. I EXPANDED APP TO MORE EXAMPLE RESTAURANTS FOR POTENTIAL
            COMMERCIAL USE IN THE FUTURE. APP IS MADE IN REACT AS A FRONTEND AND
            FIREBASE AS A BACKEND
          </motion.div>
        </motion.div>
      </a>
      <a
        href="https://main--popcorn-movies-shows.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialLeft"
          animate="animateRight"
          whileHover="hover"
        >
          POPCORN TV&M
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            FULLY DEVELOPED WEB APPLICATION FOR BROWSING AND TRACKING MOVIES AND
            TV SHOWS. APP IS MADE IN REACT AS A FRONTEND FRAMEWORK AND FIREBASE
            AS A BACKEND TOOL. DATA IS PROVIDED BY TVDB API
          </motion.div>
        </motion.div>
      </a>
      <a
        href="https://main--illustrious-dusk-821b80.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialRight"
          animate="animateLeft"
          whileHover="hover"
        >
          A-Z WEBSHOP
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            FULLY DEVELOPED FRONTEND SIDE OF FUNCTIONAL WEBSHOP USING FREE
            PUBLIC API. WEBSHOP IS FOCUSED ON E-COMMERCE BY SELLING PRODUCTS
            FROM A TO Z. PROJECT IS DONE BY USING TYPESCRIPT IN REACT WITH
            FUNCTIONAL COMPONENTS
          </motion.div>
        </motion.div>
      </a>
      <a
        href="https://chatting-made-easy.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialLeft"
          animate="animateRight"
          whileHover="hover"
        >
          CHAT APP
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            FULLY FUNCTIONAL SIMPLE CHATTING APPLICATION MADE IN VUE AS A
            FRONTEND FRAMEWORK AND FIREBASE AS A BACKEND TOOL FOR GOOGLE
            AUTHENTICATION LOGIN
          </motion.div>
        </motion.div>
      </a>
      <a
        href="https://www.jtmplast.rs/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialRight"
          animate="animateLeft"
          whileHover="hover"
        >
          JTM PLAST
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            DEVELOPED A WEBSITE FOR A COMPANY THAT SELLS AND DISTRIBUTES
            WRAPPING MATERIAL. DEVELOPMENT WAS DONE IN VANILLA JAVASCRIPT HTML
            CSS AND BOOTSTRAP
          </motion.div>
        </motion.div>
      </a>
      {/* <a
        href="https://clinquant-cuchufli-8dff01.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialLeft"
          animate="animateRight"
          whileHover="hover"
        >
          PORTFOLIO
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            DEVELOPED A SIMPLE FIRST PORTFOLIO FOR POSTING MY PROJECTS AND
            ACHIEVEMENTS. DEVELOPMENT WAS DONE IN REACT HTML JAVASCRIPT AND CSS.
            IT SHOWCASES MY PROGRESS ON A FRONTEND JOURNEY SO FAR
          </motion.div>
        </motion.div>
      </a> */}
    </div>
  );
}

export default ProjectsList;
`}
          componentName={"ProjectsList.jsx"}
          showMoreButton={true}
        />
      </div>
    </PageLayout>
  );
}

export default PortfolioSectionRedesign;
