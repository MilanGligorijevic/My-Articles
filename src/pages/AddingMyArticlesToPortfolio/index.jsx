import React from "react";
import PageLayout from "../../components/PageLayout";
import ArticleInfo from "../../components/ArticleInfo";
import Button from "../../components/Button";
import VideoBox from "../../components/VideoBox";
import video1 from "../../assets/video/MyArticlesAndPortfolio1.mp4";
import img1 from "../../assets/img/MyArticlesAndPortfolio2.PNG";
import video3 from "../../assets/video/MyArticlesAndPortfolio3.mp4";
import video4 from "../../assets/video/MyArticlesAndPortfolio4.mp4";
import HighlightField from "../../components/HighlightField";
import Arrow from "../../assets/svg/arrow";
import ImageBox from "../../components/ImageBox";
import CodeContainer from "../../components/CodeContainer";

function AddingMyArticlesToPortfolio() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4">
        <ArticleInfo
          title={"My Articles and Portfolio"}
          shortDescription={"Adding link to My Articles on a portfolio website"}
        />
        <div className="flex gap-5 mb-6">
          <Button
            link={"https://mg-website-portfolio.netlify.app/"}
            text={"Live Demo"}
          />
          <Button
            link={
              "https://github.com/MilanGligorijevic/MG-React-Portfolio/tree/main/src/views/components/MyArticles"
            }
            text={"Source Code"}
          />
        </div>
        <h1 className="text-3xl text-custom-white sm:text-2xl">Description</h1>
        <p>
          I had to link My Articles and Portfolio website. The idea was to make
          it stand out and catch eye of the user so adding it as just another
          link in a Navbar was not an option. It could be a solution on a mobile
          version but on a desktop it was not an option.
        </p>
        <p>
          I was considering options that would fit my Portfolio design and I got
          my initial idea.
        </p>
        <h1 className="text-3xl text-custom-white sm:text-2xl">Initial idea</h1>
        <p>
          My initial idea was to make a simple cirle like the one that was
          following the mouse cursor around which would be fixed in top right
          corner of the website during user's scroll.
        </p>
        <VideoBox videoFile={video1} />
        <p>
          Hovering the circle would increase its size and reveal My Articles
          text which would inform user of what it is representing. Clicking the
          circle would take the user to My Articles website.
        </p>
        <p>
          After playing a bit with this idea and making initial design I decided
          to change things up.
        </p>
        <p>
          Instead of going for a full yellow circle I tried making just a simple
          text My Articles that would spin in circles and it just seemed like a
          better fit.
        </p>
        <h1 className="text-3xl text-custom-white mt-2 sm:text-2xl">
          Initial setup
        </h1>
        <p>
          My entire portfolio was made in React and I used SCSS for styling
          which was the exact path I had to take for this situation.
        </p>
        <p>
          First of all I made a React component MyArticles which would represent
          a link to My Articles website. My entire component was just a div that
          contained My Articles text and some styling/animations.
        </p>
        <HighlightField
          children={
            <div className="flex gap-2">
              <Arrow /> For a div to stay in a top-right corner I had to add
              position:fixed with top and right properties.
            </div>
          }
        />
        <ImageBox src={img1} alt="initial design my articles text" />
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> I made My Articles text in Figma by using ARC plug-in
                and exported it as SVG
              </div>
              <div className="flex gap-2">
                <Arrow /> Framer Motion is my library of choice for animations
                in React and it is used in this example as well
              </div>
            </>
          }
        />
        <p>
          After adding MyArticles SVG to the component, it was time for some
          animations. I decided to use one of the text animations I already had
          in the project since it was a perfect fit for this situation.
        </p>
        <CodeContainer
          code={`const myArticlesVariants = {
    initial: {
      rotateZ: 0,
    },
    animate: {
      rotateZ: 360,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 25,
      },
    },
  }
`}
          componentName={"myarticlessvg.jsx"}
          showMoreButton={true}
        />
        <HighlightField
          children={
            <div className="flex gap-2">
              <Arrow /> Animation rotates My Articles text on Z axis in circles
              for the given duration time
            </div>
          }
        />
        <VideoBox videoFile={video3} />
        <p>
          Initial animation was done. It could be used like that but it was
          missing some life. First of all I didn't want it to be on the screen
          at first since it would mess up my landing section design on a
          portfolio. With that being said I decided to move it into a screen
          when a user scrolls. This way it would not mess up my landing section
          and it would make itself even more noticeable for the end user.
        </p>
        <p>
          For this to work I had to add some additional code to MyArticles
          component. I needed a way to track scroll and to make a change to my
          component after scroll has passed some value.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> For this scenario I used useScroll hook from Framer
                Motion which could return Y position of a scroll
              </div>
              <div className="flex gap-2">
                <Arrow /> I had to implement useMotionValueEvent hook to listen
                for a change in scroll position
              </div>
              <div className="flex gap-2">
                <Arrow /> Animation would trigger after a certain scroll
                threshold has been reached
              </div>
            </>
          }
        />
        <p>
          After implementing this scroll technique, My Articles text would slide
          into a screen on a certain amount of scroll.
        </p>
        <CodeContainer
          code={`import React, { useState } from "react";
import "./css/style.scss";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import MyArticlesSvg from "../../assets/svgs/myarticlessvg";

function MyArticles() {
  const { scrollY } = useScroll();
  const [hiddenArticles, setHiddenArticles] = useState(true);

  const myArticlesVariants = {
    hidden: {
      x: "200%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  useMotionValueEvent(scrollY, "change", (scrollValue) => {
    if (scrollValue > 160) {
      setHiddenArticles(false);
    } else {
      setHiddenArticles(true);
    }
  });

  return (
    <motion.div
      className="my_articles"
      variants={myArticlesVariants}
      animate={hiddenArticles ? "hidden" : "visible"}
    >
      <MyArticlesSvg />
    </motion.div>
  );
}

export default MyArticles;
`}
          componentName={"MyArticles.js"}
          showMoreButton={true}
        />
        <h1 className="text-3xl text-custom-white mt-2 sm:text-2xl">
          Final design and implementation
        </h1>
        <p>
          I added two out of free animations I wanted for this setup. All that
          was left to do was to add simple onHover animation and a link to My
          Articles website. Of course I had to do some fine-tuning as well.
        </p>
        <p>
          I wanted to make My Articles text bigger on hover and to increase its
          rotation speed.
        </p>
        <p>
          Scaling it up was easier part, making it go faster was a bit trickier.
        </p>
        <HighlightField
          children={
            <div className="flex gap-2">
              <Arrow /> I used scale property to increase components size on
              hover
            </div>
          }
        />
        <p>
          Since my animation speed was determined by its duration property, the
          answer was easy. All I had to do was change its duration on hover and
          that's it.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> I added entire new animation to whileHover propery of
                my component where I tuned down its initial duration time
              </div>
              <div className="flex gap-2">
                <Arrow /> Notice how scale and rotation animations have
                different duration properties
              </div>
            </>
          }
        />

        <p className="mb-4">
          After some tweaks and changes I got the animation I wanted in its full
          display.
        </p>
        <VideoBox videoFile={video4} />
        <CodeContainer
          code={`import React from "react";
import { motion } from "framer-motion";

function MyArticlesSvg() {
  const myArticlesVariants = {
    initial: {
      rotateZ: 0,
    },
    animate: {
      rotateZ: 360,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 25,
      },
    },
    hover: {
      scale: 1.15,
    },
  };

  return (
    <motion.svg
      width="90"
      height="117"
      viewBox="0 0 219 217"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={myArticlesVariants}
      initial="initial"
      animate="animate"
      whileHover={{
        rotateZ: 360,
        scale: 1.15,
        transition: {
          scale: { duration: 0.3 },
          repeat: Infinity,
          repeatType: "mirror",
          duration: 7,
        },
      }}
    >
      <path
        d="M89.6749 208.667L87.0537 207.871L85.4194 189.203L73.6959 203.815L71.0608 203.015L85.555 185.126L87.6014 185.748L89.6749 208.667ZM90.5299 208.926L88.2171 208.224L91.6178 195.662L94.035 187.701L96.7262 188.518L90.5299 208.926ZM72.5325 203.462L70.2198 202.76L76.4162 182.351L79.1073 183.169L76.6901 191.13L72.5325 203.462Z"
        fill="url(#paint0_linear_237_130)"
      />
      <path
        d="M54.6086 194.216L56.431 182.3L45.6419 187.692L43.0479 185.805L56.8538 179.328L61.5421 172.885L63.8281 174.548L59.1399 180.992L57.2264 196.12L54.6086 194.216Z"
        fill="url(#paint1_linear_237_130)"
      />
      <path
        d="M21.5385 155.471L42.0002 152.466L43.3689 155.007L20.7365 157.966L19.8541 156.328L21.5385 155.471ZM35.8442 141.041L22.0874 156.489L20.4447 157.424L19.5623 155.787L34.4685 138.487L35.8442 141.041ZM29.0671 145.108L31.1046 144.01L36.7881 154.559L34.7506 155.657L29.0671 145.108Z"
        fill="url(#paint2_linear_237_130)"
      />
      <path
        d="M11.3625 135.742L9.94768 128.825C9.62675 127.256 9.59492 125.882 9.85217 124.703C10.1075 123.514 10.6462 122.542 11.4684 121.786C12.279 121.022 13.3636 120.501 14.7222 120.223C15.679 120.027 16.5945 120.044 17.4688 120.274C18.3317 120.496 19.1149 120.914 19.8185 121.528C20.5106 122.134 21.0934 122.912 21.5667 123.862L22.0266 124.575L23.3563 131.076L21.109 131.566L20.1052 126.658C19.9016 125.663 19.5602 124.87 19.0807 124.281C18.5917 123.693 18.0163 123.292 17.3547 123.079C16.693 122.865 16.0033 122.832 15.2858 122.978C14.4821 123.143 13.8112 123.444 13.273 123.883C12.7348 124.323 12.3726 124.915 12.1862 125.661C11.9883 126.399 11.998 127.299 12.2152 128.361L13.0635 132.509L31.6915 128.699L32.258 131.468L11.3625 135.742ZM29.7601 119.255L21.3273 126.273L20.723 123.391L28.9832 116.334L29.1554 116.299L29.7601 119.255Z"
        fill="url(#paint3_linear_237_130)"
      />
      <path
        d="M8.31569 99.1542L29.5777 100.832L29.3588 103.607L8.09673 101.929L8.31569 99.1542ZM8.85503 92.3199L11.1623 92.502L9.86583 108.93L7.55855 108.748L8.85503 92.3199Z"
        fill="url(#paint4_linear_237_130)"
      />
      <path
        d="M12.7168 77.5516L33.095 83.8458L32.2607 86.547L11.8825 80.2528L12.7168 77.5516Z"
        fill="url(#paint5_linear_237_130)"
      />
      <path
        d="M37.2031 59.702L38.6306 57.2787C39.7174 58.0889 40.5608 59.0334 41.1608 60.1122C41.7607 61.1909 42.04 62.3812 41.9986 63.6829C41.9488 64.9796 41.4902 66.3642 40.6228 67.8367C39.9884 68.9137 39.209 69.7751 38.2847 70.4206C37.3653 71.0578 36.3495 71.4739 35.2373 71.6688C34.1167 71.8587 32.9331 71.8189 31.6865 71.5492C30.4365 71.2662 29.1678 70.7456 27.8804 69.9872L26.0503 68.9092C24.7629 68.1508 23.6966 67.2961 22.8515 66.3449C22.0029 65.3804 21.3926 64.3578 21.0204 63.2772C20.6532 62.1881 20.5353 61.0703 20.6667 59.9236C20.7981 58.777 21.1984 57.6357 21.8675 56.4997C22.6853 55.1114 23.6376 54.0912 24.7243 53.4393C25.811 52.7874 26.9733 52.469 28.2112 52.4841C29.4455 52.4858 30.7057 52.7805 31.9917 53.368L30.5643 55.7913C29.6366 55.4036 28.7715 55.1886 27.9689 55.1465C27.1579 55.0995 26.4106 55.2714 25.7271 55.6621C25.0436 56.0528 24.4218 56.7236 23.8617 57.6744C23.3809 58.4906 23.1128 59.3017 23.0573 60.1078C23.0068 60.9054 23.1438 61.6831 23.4681 62.4409C23.7974 63.1902 24.2998 63.9055 24.9752 64.5867C25.6507 65.268 26.4764 65.8961 27.4525 66.471L29.3078 67.5639C30.2082 68.0943 31.1083 68.4998 32.0083 68.7806C32.9133 69.053 33.7784 69.1716 34.6039 69.1365C35.4293 69.1013 36.1904 68.8867 36.8873 68.4925C37.5758 68.0933 38.1604 67.4856 38.6412 66.6695C39.2509 65.6345 39.5725 64.7132 39.6062 63.9057C39.6399 63.0981 39.4413 62.3578 39.0104 61.6846C38.5845 61.0031 37.9821 60.3422 37.2031 59.702Z"
        fill="url(#paint6_linear_237_130)"
      />
      <path
        d="M57.7514 43.7784L59.3324 45.4486L51.5877 52.7795L50.0067 51.1093L57.7514 43.7784ZM37.3302 36.9075L51.992 52.3969L49.9388 54.3403L35.277 38.851L37.3302 36.9075Z"
        fill="url(#paint7_linear_237_130)"
      />
      <path
        d="M76.882 32.3129L77.9632 34.3427L67.9949 39.6519L66.9138 37.622L76.882 32.3129ZM58.473 20.5587L68.4991 39.3833L66.0038 40.7123L55.9777 21.8877L58.473 20.5587ZM70.929 24.314L72.0101 26.3439L63.3606 30.9507L62.2795 28.9208L70.929 24.314ZM67.8078 15.587L68.8958 17.6298L59.0568 22.87L57.9688 20.8273L67.8078 15.587Z"
        fill="url(#paint8_linear_237_130)"
      />
      <path
        d="M95.9665 23.7688C95.8603 23.2822 95.6903 22.8695 95.4564 22.5307C95.23 22.1803 94.8975 21.893 94.4587 21.6689C94.0296 21.4427 93.4604 21.2621 92.7512 21.127C92.0516 20.9898 91.1792 20.8853 90.134 20.8135C89.0369 20.7331 88.0327 20.5974 87.1215 20.4064C86.2081 20.2059 85.4025 19.9269 84.7048 19.5694C84.0071 19.2119 83.4321 18.7526 82.9798 18.1916C82.5275 17.6306 82.2129 16.9446 82.0359 16.1336C81.859 15.3226 81.8625 14.5372 82.0465 13.7774C82.2305 13.0176 82.5775 12.3171 83.0873 11.6761C83.6046 11.0235 84.2661 10.4593 85.0719 9.98362C85.8776 9.50792 86.8148 9.15347 87.8834 8.92027C89.4482 8.57881 90.84 8.58995 92.0588 8.95368C93.2851 9.30579 94.2897 9.90121 95.0724 10.7399C95.8531 11.5691 96.3621 12.5275 96.5995 13.6152L93.8516 14.2149C93.6809 13.4325 93.363 12.7772 92.8979 12.249C92.4307 11.7112 91.8209 11.3445 91.0685 11.1489C90.3141 10.9437 89.4169 10.9546 88.3769 11.1815C87.3942 11.396 86.6154 11.7208 86.0407 12.1561C85.466 12.5914 85.0764 13.0962 84.8719 13.6706C84.6769 14.2429 84.6502 14.8534 84.7918 15.5022C84.8876 15.9411 85.0657 16.3221 85.3261 16.6451C85.5939 16.9565 85.9568 17.2221 86.4146 17.4421C86.8819 17.6599 87.449 17.8311 88.1159 17.9554C88.7923 18.0777 89.5858 18.1644 90.4966 18.2155C91.7526 18.2913 92.8547 18.4406 93.8029 18.6635C94.7511 18.8864 95.5581 19.195 96.224 19.5895C96.8972 19.9723 97.4382 20.459 97.847 21.0495C98.2632 21.6284 98.5597 22.3233 98.7367 23.1343C98.922 23.9834 98.9179 24.789 98.7243 25.5509C98.5307 26.3128 98.1674 27.0068 97.6344 27.6329C97.1013 28.259 96.4155 28.8035 95.5769 29.2663C94.7458 29.7176 93.7816 30.0629 92.6844 30.3024C91.7208 30.5127 90.7423 30.5863 89.749 30.5231C88.7652 30.458 87.8333 30.2415 86.9535 29.8738C86.0831 29.5039 85.3336 28.9778 84.7049 28.2954C84.0836 27.6013 83.6596 26.7343 83.4326 25.6943L86.1804 25.0947C86.3366 25.8103 86.6092 26.3955 86.9984 26.8503C87.3854 27.2956 87.8539 27.6332 88.4038 27.863C88.9633 28.0908 89.566 28.2191 90.2121 28.2481C90.8655 28.2654 91.5262 28.2012 92.1941 28.0554C93.1577 27.8452 93.9444 27.5336 94.5539 27.1207C95.1635 26.7078 95.5859 26.2158 95.8211 25.6447C96.0659 25.0715 96.1143 24.4462 95.9665 23.7688Z"
        fill="url(#paint9_linear_237_130)"
      />
      <path
        d="M126.694 7.84819L129.335 8.57505L131.458 27.1935L142.794 12.2793L145.449 13.0101L131.429 31.2726L129.367 30.7051L126.694 7.84819ZM125.832 7.61108L128.162 8.25243L125.092 20.8989L122.884 28.9209L120.173 28.1746L125.832 7.61108ZM143.966 12.602L146.297 13.2433L140.637 33.8069L137.926 33.0606L140.133 25.0385L143.966 12.602Z"
        fill="url(#paint10_linear_237_130)"
      />
      <path
        d="M162.126 21.3751L160.617 33.3352L171.261 27.6618L173.904 29.4806L160.272 36.3165L155.754 42.8809L153.425 41.278L157.943 34.7137L159.46 19.5398L162.126 21.3751Z"
        fill="url(#paint11_linear_237_130)"
      />
      <path
        d="M196.2 59.2404L175.824 62.7799L174.39 60.2761L196.937 56.7249L197.862 58.339L196.2 59.2404ZM182.278 74.0403L195.625 58.2364L197.243 57.2587L198.168 58.8728L183.72 76.5567L182.278 74.0403ZM188.946 69.7967L186.938 70.9475L180.98 60.5513L182.988 59.4005L188.946 69.7967Z"
        fill="url(#paint12_linear_237_130)"
      />
      <path
        d="M206.89 78.6956L208.485 85.5734C208.847 87.1336 208.915 88.5063 208.689 89.6916C208.465 90.8864 207.952 91.8726 207.15 92.6502C206.359 93.435 205.289 93.9841 203.938 94.2975C202.987 94.5182 202.071 94.5251 201.191 94.3183C200.323 94.1187 199.529 93.7215 198.809 93.1265C198.102 92.5388 197.499 91.7764 197 90.8393L196.522 90.1383L195.022 83.6742L197.256 83.126L198.388 88.0061C198.618 88.9955 198.98 89.7786 199.475 90.3556C199.979 90.9303 200.565 91.3157 201.232 91.5119C201.899 91.708 202.589 91.7233 203.302 91.5578C204.102 91.3724 204.764 91.0532 205.291 90.6003C205.817 90.1473 206.164 89.5456 206.331 88.7951C206.509 88.052 206.476 87.1524 206.231 86.0965L205.274 81.9726L186.752 86.2695L186.114 83.5155L206.89 78.6956ZM188.931 95.6588L197.177 88.4226L197.856 91.2874L189.784 98.5586L189.613 98.5983L188.931 95.6588Z"
        fill="url(#paint13_linear_237_130)"
      />
      <path
        d="M210.894 115.191L189.596 114.071L189.742 111.292L211.041 112.412L210.894 115.191ZM210.534 122.037L208.223 121.916L209.089 105.459L211.4 105.58L210.534 122.037Z"
        fill="url(#paint14_linear_237_130)"
      />
      <path
        d="M207.061 136.902L186.525 131.143L187.288 128.421L207.824 134.179L207.061 136.902Z"
        fill="url(#paint15_linear_237_130)"
      />
      <path
        d="M183.051 155.387L181.687 157.847C180.58 157.065 179.712 156.143 179.084 155.08C178.456 154.018 178.145 152.835 178.153 151.533C178.168 150.235 178.591 148.839 179.419 147.344C180.025 146.251 180.782 145.37 181.689 144.7C182.591 144.039 183.596 143.597 184.702 143.373C185.818 143.153 187.002 143.162 188.255 143.399C189.512 143.649 190.794 144.136 192.101 144.861L193.959 145.89C195.265 146.615 196.354 147.441 197.223 148.37C198.097 149.312 198.734 150.318 199.134 151.389C199.53 152.468 199.677 153.582 199.576 154.732C199.474 155.882 199.104 157.033 198.465 158.186C197.684 159.595 196.759 160.64 195.689 161.32C194.62 162 193.467 162.349 192.229 162.367C190.995 162.397 189.727 162.136 188.426 161.582L189.79 159.122C190.727 159.485 191.598 159.678 192.401 159.699C193.213 159.724 193.956 159.533 194.629 159.125C195.302 158.716 195.906 158.029 196.441 157.064C196.9 156.236 197.147 155.418 197.181 154.61C197.211 153.812 197.053 153.038 196.709 152.289C196.36 151.548 195.84 150.847 195.146 150.183C194.453 149.52 193.611 148.914 192.621 148.365L190.737 147.321C189.823 146.814 188.913 146.432 188.006 146.175C187.094 145.927 186.226 145.831 185.402 145.887C184.578 145.944 183.822 146.179 183.136 146.591C182.458 147.008 181.89 147.631 181.431 148.459C180.848 149.51 180.551 150.439 180.538 151.247C180.526 152.056 180.744 152.791 181.192 153.452C181.636 154.122 182.255 154.767 183.051 155.387Z"
        fill="url(#paint16_linear_237_130)"
      />
      <path
        d="M162.927 171.843L161.303 170.215L168.853 162.684L170.477 164.312L162.927 171.843ZM183.521 178.177L168.459 163.077L170.46 161.08L185.523 176.18L183.521 178.177Z"
        fill="url(#paint17_linear_237_130)"
      />
      <path
        d="M144.103 183.806L142.969 181.805L152.795 176.237L153.929 178.238L144.103 183.806ZM162.814 195.074L152.298 176.519L154.758 175.125L165.274 193.68L162.814 195.074ZM150.264 191.646L149.13 189.645L157.656 184.814L158.79 186.814L150.264 191.646ZM153.613 200.289L152.472 198.275L162.17 192.779L163.311 194.792L153.613 200.289Z"
        fill="url(#paint18_linear_237_130)"
      />
      <path
        d="M125.249 192.847C125.368 193.331 125.549 193.739 125.792 194.072C126.027 194.416 126.367 194.695 126.811 194.907C127.246 195.122 127.82 195.288 128.533 195.404C129.236 195.523 130.11 195.604 131.157 195.649C132.256 195.701 133.263 195.81 134.179 195.977C135.098 196.153 135.91 196.411 136.617 196.75C137.324 197.089 137.911 197.533 138.378 198.082C138.844 198.631 139.177 199.309 139.375 200.115C139.573 200.921 139.59 201.706 139.426 202.471C139.262 203.235 138.934 203.944 138.441 204.598C137.941 205.264 137.294 205.846 136.501 206.342C135.708 206.839 134.781 207.218 133.719 207.479C132.163 207.861 130.772 207.887 129.544 207.555C128.309 207.235 127.289 206.666 126.484 205.848C125.682 205.04 125.148 204.095 124.883 203.014L127.614 202.343C127.805 203.12 128.14 203.767 128.619 204.283C129.1 204.808 129.719 205.159 130.476 205.335C131.236 205.52 132.132 205.486 133.166 205.231C134.143 204.991 134.913 204.646 135.476 204.196C136.039 203.746 136.415 203.231 136.605 202.651C136.785 202.074 136.795 201.463 136.637 200.818C136.529 200.382 136.341 200.006 136.073 199.69C135.797 199.386 135.427 199.13 134.964 198.922C134.491 198.716 133.919 198.56 133.249 198.453C132.57 198.349 131.775 198.283 130.863 198.255C129.605 198.213 128.5 198.092 127.546 197.894C126.592 197.696 125.777 197.409 125.101 197.032C124.418 196.667 123.865 196.195 123.441 195.615C123.009 195.047 122.695 194.36 122.497 193.554C122.289 192.71 122.272 191.905 122.446 191.138C122.619 190.371 122.964 189.668 123.481 189.028C123.997 188.388 124.668 187.826 125.495 187.342C126.314 186.869 127.268 186.498 128.359 186.23C129.317 185.995 130.293 185.895 131.288 185.932C132.273 185.972 133.21 186.164 134.099 186.508C134.979 186.855 135.742 187.362 136.388 188.027C137.028 188.705 137.474 189.56 137.728 190.594L134.997 191.266C134.822 190.554 134.534 189.976 134.134 189.532C133.735 189.097 133.258 188.772 132.702 188.556C132.137 188.343 131.531 188.231 130.884 188.219C130.231 188.219 129.572 188.3 128.908 188.463C127.95 188.699 127.172 189.031 126.573 189.46C125.975 189.888 125.566 190.391 125.345 190.968C125.116 191.548 125.084 192.174 125.249 192.847Z"
        fill="url(#paint19_linear_237_130)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_237_130"
          x1="78.0426"
          y1="212.107"
          x2="88.211"
          y2="178.617"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_237_130"
          x1="45.7969"
          y1="196.056"
          x2="66.3885"
          y2="167.754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_237_130"
          x1="14.1773"
          y1="159.858"
          x2="44.9897"
          y2="143.257"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_237_130"
          x1="3.41837"
          y1="130.197"
          x2="37.7085"
          y2="123.184"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_237_130"
          x1="1.55778"
          y1="99.9815"
          x2="36.4493"
          y2="102.735"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_237_130"
          x1="6.04469"
          y1="76.5455"
          x2="39.4858"
          y2="86.8746"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_237_130"
          x1="16.2052"
          y1="53.544"
          x2="46.3621"
          y2="71.3082"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_237_130"
          x1="35.0656"
          y1="29.8642"
          x2="59.126"
          y2="55.2826"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_237_130"
          x1="58.6"
          y1="12.9319"
          x2="75.053"
          y2="43.8236"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_237_130"
          x1="86.4146"
          y1="2.71177"
          x2="93.8768"
          y2="36.907"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_237_130"
          x1="138.232"
          y1="4.10372"
          x2="128.944"
          y2="37.849"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_237_130"
          x1="170.887"
          y1="19.3051"
          x2="151.044"
          y2="48.1367"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_237_130"
          x1="203.444"
          y1="54.6614"
          x2="173.077"
          y2="72.0643"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_237_130"
          x1="214.977"
          y1="84.0305"
          x2="180.882"
          y2="91.9401"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_237_130"
          x1="217.628"
          y1="114.187"
          x2="182.677"
          y2="112.349"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_237_130"
          x1="213.757"
          y1="137.732"
          x2="180.057"
          y2="128.283"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_237_130"
          x1="204.203"
          y1="160.992"
          x2="173.591"
          y2="144.025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_237_130"
          x1="185.969"
          y1="185.158"
          x2="161.251"
          y2="160.379"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_237_130"
          x1="162.887"
          y1="202.701"
          x2="145.63"
          y2="172.251"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_237_130"
          x1="135.35"
          y1="213.647"
          x2="126.994"
          y2="179.659"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="0.800781" stop-color="#FFDB58" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export default MyArticlesSvg;
`}
          componentName={"myarticlessvg.jsx"}
          showMoreButton={true}
        />
      </div>
    </PageLayout>
  );
}

export default AddingMyArticlesToPortfolio;
