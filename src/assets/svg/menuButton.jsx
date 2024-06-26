import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

function MenuButton({ toggleMenu }) {
  const [scope1, bar1] = useAnimate();
  const [scope2, bar2] = useAnimate();
  const [scope3, bar3] = useAnimate();

  const [scope4, word1] = useAnimate();
  const [scope5, word2] = useAnimate();
  const [scope6, word3] = useAnimate();

  useEffect(() => {
    if (toggleMenu) {
      bar1(
        scope1.current,
        {
          y: 0,
        },
        { duration: 0.2 }
      );
      word1(scope4.current, { y: -8.5 }, { duration: 0.3 });
      bar2(
        scope2.current,
        {
          y: 40,
        },
        { duration: 0.2 }
      );
      word2(scope5.current, { y: 33 }, { duration: 0.3 });
      bar3(
        scope3.current,
        {
          y: 80,
        },
        { duration: 0.2 }
      );
      word3(scope6.current, { y: 79.5 }, { duration: 0.3 });
    } else {
      bar1(scope1.current, { y: 0 }, { duration: 0.25 });
      bar2(scope2.current, { y: 0 }, { duration: 0.25 });
      bar3(scope3.current, { y: 0 }, { duration: 0.25 });
      word1(
        scope4.current,
        { y: -500, x: "16.5%", opacity: 1 },
        { duration: 0.5 }
      );
      word2(
        scope5.current,
        { y: -500, x: "23%", opacity: 1 },
        { duration: 0.5 }
      );
      word3(
        scope6.current,
        { y: -500, x: "26.5%", opacity: 1 },
        { duration: 0.5 }
      );
    }
  });

  return (
    <motion.div className="flex flex-col gap-0.5 cursor-pointer">
      <motion.svg
        width="43"
        height="4"
        viewBox="0 0 45 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={scope1}
      >
        <motion.path
          d="M2 2H43"
          stroke="url(#paint0_linear_86_271)"
          stroke-width="3"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_86_271"
            x1="22.5"
            y1="2"
            x2="22.5"
            y2="3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFC800" />
            <stop offset="0.800781" stop-color="#FFDB58" />
          </linearGradient>
        </defs>
      </motion.svg>
      <motion.svg
        width="43"
        height="4"
        viewBox="0 0 45 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={scope2}
      >
        <path
          d="M2 2H43"
          stroke="url(#paint0_linear_86_271)"
          stroke-width="3"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_86_271"
            x1="22.5"
            y1="2"
            x2="22.5"
            y2="3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFC800" />
            <stop offset="0.800781" stop-color="#FFDB58" />
          </linearGradient>
        </defs>
      </motion.svg>
      <motion.svg
        width="43"
        height="4"
        viewBox="0 0 45 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={scope3}
      >
        <path
          d="M2 2H43"
          stroke="url(#paint0_linear_86_271)"
          stroke-width="3"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_86_271"
            x1="22.5"
            y1="2"
            x2="22.5"
            y2="3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFC800" />
            <stop offset="0.800781" stop-color="#FFDB58" />
          </linearGradient>
        </defs>
      </motion.svg>
      <motion.div
        ref={scope4}
        className="absolute bg-custom-full-black opacity-0"
      >
        <a
          href="https://mg-website-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="33"
            height="20"
            viewBox="0 0 37 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.7526 7.09329C32.9054 7.42004 33.2942 7.56103 33.621 7.40819C33.9477 7.25536 34.0887 6.86658 33.9359 6.53983L32.7526 7.09329ZM29.4653 3.07667L29.2103 3.67802L29.2103 3.67802L29.4653 3.07667ZM24.0803 2.88892L23.8679 2.27128L24.0803 2.88892ZM19.9503 6.34955L20.5212 6.66682L20.5212 6.66682L19.9503 6.34955ZM19.1927 11.6843L18.556 11.83L18.556 11.83L19.1927 11.6843ZM22.196 16.1579L22.572 15.6238L22.196 16.1579ZM32.1872 14.9646L31.6959 14.5341L31.6959 14.5341L32.1872 14.9646ZM34.0524 9.90952L28.2535 14.7318L35.3292 17.3427L34.0524 9.90952ZM33.9359 6.53983C33.0805 4.7111 31.579 3.26338 29.7202 2.47533L29.2103 3.67802C30.7722 4.34019 32.0339 5.55666 32.7526 7.09329L33.9359 6.53983ZM29.7202 2.47533C27.8615 1.68728 25.777 1.6146 23.8679 2.27128L24.2928 3.50656C25.8969 2.95477 27.6485 3.01585 29.2103 3.67802L29.7202 2.47533ZM23.8679 2.27128C21.9588 2.92796 20.36 4.26757 19.3794 6.03229L20.5212 6.66682C21.3452 5.18398 22.6886 4.05834 24.2928 3.50656L23.8679 2.27128ZM19.3794 6.03229C18.3987 7.797 18.1055 9.86208 18.556 11.83L19.8294 11.5385C19.4508 9.88487 19.6972 8.14965 20.5212 6.66682L19.3794 6.03229ZM18.556 11.83C19.0066 13.798 20.1692 15.5297 21.82 16.692L22.572 15.6238C21.1849 14.6472 20.208 13.1921 19.8294 11.5385L18.556 11.83ZM21.82 16.692C23.4708 17.8542 25.4932 18.3647 27.4978 18.1253L27.3429 16.8282C25.6585 17.0294 23.9591 16.6004 22.572 15.6238L21.82 16.692ZM27.4978 18.1253C29.5025 17.8858 31.3477 16.9134 32.6784 15.3951L31.6959 14.5341C30.5778 15.8099 29.0273 16.627 27.3429 16.8282L27.4978 18.1253Z"
              fill="#ffc800"
            />
            <path
              d="M32.7526 7.09329C32.9054 7.42004 33.2942 7.56103 33.621 7.40819C33.9477 7.25536 34.0887 6.86658 33.9359 6.53983L32.7526 7.09329ZM29.4653 3.07667L29.2103 3.67802L29.2103 3.67802L29.4653 3.07667ZM24.0803 2.88892L23.8679 2.27128L24.0803 2.88892ZM19.9503 6.34955L20.5212 6.66682L20.5212 6.66682L19.9503 6.34955ZM19.1927 11.6843L18.556 11.83L18.556 11.83L19.1927 11.6843ZM22.196 16.1579L22.572 15.6238L22.196 16.1579ZM32.1872 14.9646L31.6959 14.5341L31.6959 14.5341L32.1872 14.9646ZM34.0524 9.90952L28.2535 14.7318L35.3292 17.3427L34.0524 9.90952ZM33.9359 6.53983C33.0805 4.7111 31.579 3.26338 29.7202 2.47533L29.2103 3.67802C30.7722 4.34019 32.0339 5.55666 32.7526 7.09329L33.9359 6.53983ZM29.7202 2.47533C27.8615 1.68728 25.777 1.6146 23.8679 2.27128L24.2928 3.50656C25.8969 2.95477 27.6485 3.01585 29.2103 3.67802L29.7202 2.47533ZM23.8679 2.27128C21.9588 2.92796 20.36 4.26757 19.3794 6.03229L20.5212 6.66682C21.3452 5.18398 22.6886 4.05834 24.2928 3.50656L23.8679 2.27128ZM19.3794 6.03229C18.3987 7.797 18.1055 9.86208 18.556 11.83L19.8294 11.5385C19.4508 9.88487 19.6972 8.14965 20.5212 6.66682L19.3794 6.03229ZM18.556 11.83C19.0066 13.798 20.1692 15.5297 21.82 16.692L22.572 15.6238C21.1849 14.6472 20.208 13.1921 19.8294 11.5385L18.556 11.83ZM21.82 16.692C23.4708 17.8542 25.4932 18.3647 27.4978 18.1253L27.3429 16.8282C25.6585 17.0294 23.9591 16.6004 22.572 15.6238L21.82 16.692ZM27.4978 18.1253C29.5025 17.8858 31.3477 16.9134 32.6784 15.3951L31.6959 14.5341C30.5778 15.8099 29.0273 16.627 27.3429 16.8282L27.4978 18.1253Z"
              fill="#ffc800"
            />
            <path
              d="M16.5239 17.0712V17.7244C16.8219 17.7244 17.0822 17.5226 17.1565 17.234C17.2307 16.9454 17.1002 16.6431 16.8392 16.4992L16.5239 17.0712ZM0.848145 16.418C0.487416 16.418 0.194988 16.7105 0.194988 17.0712C0.194988 17.4319 0.487416 17.7244 0.848145 17.7244V16.418ZM0.848145 2.37516C0.487416 2.37516 0.194988 2.66759 0.194988 3.02832C0.194988 3.38905 0.487416 3.68148 0.848145 3.68148V2.37516ZM16.5239 3.02832L16.8392 3.60032C17.1002 3.45644 17.2307 3.15413 17.1565 2.86552C17.0822 2.5769 16.8219 2.37516 16.5239 2.37516V3.02832ZM3.78735 10.0498L3.47202 9.47776C3.26362 9.59265 3.13419 9.81179 3.13419 10.0498C3.13419 10.2877 3.26362 10.5069 3.47202 10.6218L3.78735 10.0498ZM16.5239 16.418H0.848145V17.7244H16.5239V16.418ZM0.848145 3.68148H8.68603V2.37516H0.848145V3.68148ZM8.68603 3.68148H16.5239V2.37516H8.68603V3.68148ZM16.2086 2.45632L3.47202 9.47776L4.10268 10.6218L16.8392 3.60032L16.2086 2.45632ZM3.47202 10.6218L16.2086 17.6432L16.8392 16.4992L4.10268 9.47776L3.47202 10.6218Z"
              fill="#ffc800"
            />
            <path
              d="M16.5239 17.0712V17.7244C16.8219 17.7244 17.0822 17.5226 17.1565 17.234C17.2307 16.9454 17.1002 16.6431 16.8392 16.4992L16.5239 17.0712ZM0.848145 16.418C0.487416 16.418 0.194988 16.7105 0.194988 17.0712C0.194988 17.4319 0.487416 17.7244 0.848145 17.7244V16.418ZM0.848145 2.37516C0.487416 2.37516 0.194988 2.66759 0.194988 3.02832C0.194988 3.38905 0.487416 3.68148 0.848145 3.68148V2.37516ZM16.5239 3.02832L16.8392 3.60032C17.1002 3.45644 17.2307 3.15413 17.1565 2.86552C17.0822 2.5769 16.8219 2.37516 16.5239 2.37516V3.02832ZM3.78735 10.0498L3.47202 9.47776C3.26362 9.59265 3.13419 9.81179 3.13419 10.0498C3.13419 10.2877 3.26362 10.5069 3.47202 10.6218L3.78735 10.0498ZM16.5239 16.418H0.848145V17.7244H16.5239V16.418ZM0.848145 3.68148H8.68603V2.37516H0.848145V3.68148ZM8.68603 3.68148H16.5239V2.37516H8.68603V3.68148ZM16.2086 2.45632L3.47202 9.47776L4.10268 10.6218L16.8392 3.60032L16.2086 2.45632ZM3.47202 10.6218L16.2086 17.6432L16.8392 16.4992L4.10268 9.47776L3.47202 10.6218Z"
              fill="#ffc800"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_88"
                x1="23.3397"
                y1="3.18849"
                x2="29.7162"
                y2="16.8211"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#ffc800" />
                <stop offset="0.830781" stop-color="#ffc800" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_11_88"
                x1="23.3397"
                y1="3.18849"
                x2="29.7162"
                y2="16.8211"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D27685" />
                <stop offset="1" stop-color="#9E4784" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_11_88"
                x1="8.68603"
                y1="3.02832"
                x2="8.68603"
                y2="17.0712"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFC800" />
                <stop offset="0.830781" stop-color="#FFDB58" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_11_88"
                x1="8.68603"
                y1="3.02832"
                x2="8.68603"
                y2="17.0712"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D27685" />
                <stop offset="1" stop-color="#9E4784" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </motion.div>
      <motion.div
        ref={scope5}
        className="p-0.5 bg-custom-full-black absolute opacity-0"
      >
        <a
          href="https://github.com/MilanGligorijevic"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 55 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.8165 0.753906C12.8975 0.753906 0.801514 12.8499 0.801514 27.7689C0.801514 40.4277 9.51835 51.0198 21.2699 53.9509C21.1438 53.5862 21.0627 53.163 21.0627 52.6384V48.0211C19.9664 48.0211 18.1294 48.0211 17.6679 48.0211C15.8196 48.0211 14.1762 47.2264 13.3792 45.7496C12.4945 44.1084 12.3414 41.5983 10.1487 40.063C9.49809 39.5519 9.99336 38.9688 10.743 39.0476C12.1275 39.4394 13.2757 40.3894 14.3563 41.7987C15.4324 43.2102 15.9389 43.5299 17.9493 43.5299C18.9241 43.5299 20.3829 43.4736 21.7561 43.2575C22.4945 41.3822 23.771 39.6555 25.3311 38.8405C16.3351 37.9153 12.042 33.4398 12.042 27.3637C12.042 24.7477 13.1564 22.2173 15.0497 20.0854C14.4283 17.9692 13.6471 13.6536 15.2883 12.0101C19.336 12.0101 21.7831 14.6351 22.3707 15.3442C24.3878 14.6531 26.6031 14.2614 28.9309 14.2614C31.2632 14.2614 33.4874 14.6531 35.509 15.3487C36.0898 14.6441 38.5392 12.0101 42.5959 12.0101C44.2439 13.6558 43.4537 17.9895 42.8256 20.1011C44.7076 22.2286 45.8152 24.7522 45.8152 27.3637C45.8152 33.4353 41.5288 37.9085 32.5464 38.8383C35.0182 40.1282 36.8215 43.7527 36.8215 46.4835V52.6384C36.8215 52.8726 36.7697 53.0414 36.7427 53.2418C47.2695 49.552 54.8315 39.5564 54.8315 27.7689C54.8315 12.8499 42.7355 0.753906 27.8165 0.753906Z"
              fill="black"
            />
            <path
              d="M27.8165 0.753906C12.8975 0.753906 0.801514 12.8499 0.801514 27.7689C0.801514 40.4277 9.51835 51.0198 21.2699 53.9509C21.1438 53.5862 21.0627 53.163 21.0627 52.6384V48.0211C19.9664 48.0211 18.1294 48.0211 17.6679 48.0211C15.8196 48.0211 14.1762 47.2264 13.3792 45.7496C12.4945 44.1084 12.3414 41.5983 10.1487 40.063C9.49809 39.5519 9.99336 38.9688 10.743 39.0476C12.1275 39.4394 13.2757 40.3894 14.3563 41.7987C15.4324 43.2102 15.9389 43.5299 17.9493 43.5299C18.9241 43.5299 20.3829 43.4736 21.7561 43.2575C22.4945 41.3822 23.771 39.6555 25.3311 38.8405C16.3351 37.9153 12.042 33.4398 12.042 27.3637C12.042 24.7477 13.1564 22.2173 15.0497 20.0854C14.4283 17.9692 13.6471 13.6536 15.2883 12.0101C19.336 12.0101 21.7831 14.6351 22.3707 15.3442C24.3878 14.6531 26.6031 14.2614 28.9309 14.2614C31.2632 14.2614 33.4874 14.6531 35.509 15.3487C36.0898 14.6441 38.5392 12.0101 42.5959 12.0101C44.2439 13.6558 43.4537 17.9895 42.8256 20.1011C44.7076 22.2286 45.8152 24.7522 45.8152 27.3637C45.8152 33.4353 41.5288 37.9085 32.5464 38.8383C35.0182 40.1282 36.8215 43.7527 36.8215 46.4835V52.6384C36.8215 52.8726 36.7697 53.0414 36.7427 53.2418C47.2695 49.552 54.8315 39.5564 54.8315 27.7689C54.8315 12.8499 42.7355 0.753906 27.8165 0.753906Z"
              fill="#ffc800"
            />
            <defs>
              <linearGradient
                id="paint0_linear_7_411"
                x1="27.8165"
                y1="0.753906"
                x2="27.8165"
                y2="53.9509"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D27685" />
                <stop offset="1" stop-color="#9E4784" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </motion.div>
      <motion.div
        ref={scope6}
        className="p-0.5 bg-custom-full-black absolute opacity-0"
      >
        <a
          href="https://www.linkedin.com/in/milangligorijevic/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.0028 0.966064H5.58612C2.73665 0.966064 0.428711 3.274 0.428711 6.12347V52.5401C0.428711 55.3896 2.73665 57.6975 5.58612 57.6975H52.0028C54.8522 57.6975 57.1602 55.3896 57.1602 52.5401V6.12347C57.1602 3.274 54.8522 0.966064 52.0028 0.966064ZM18.361 47.3827H10.7538V22.9057H18.361V47.3827ZM14.4801 19.4064C12.0277 19.4064 10.0447 17.4182 10.0447 14.971C10.0447 12.5238 12.0303 10.5382 14.4801 10.5382C16.9247 10.5382 18.9129 12.5264 18.9129 14.971C18.9129 17.4182 16.9247 19.4064 14.4801 19.4064ZM46.8557 47.3827H39.2537V35.4794C39.2537 32.6403 39.2021 28.9888 35.3005 28.9888C31.3422 28.9888 30.7336 32.0807 30.7336 35.2731V47.3827H23.1316V22.9057H30.4293V26.2502H30.5325C31.5485 24.3265 34.0292 22.2971 37.7296 22.2971C45.4322 22.2971 46.8557 27.3668 46.8557 33.958V47.3827Z"
              fill="black"
            />
            <path
              d="M52.0028 0.966064H5.58612C2.73665 0.966064 0.428711 3.274 0.428711 6.12347V52.5401C0.428711 55.3896 2.73665 57.6975 5.58612 57.6975H52.0028C54.8522 57.6975 57.1602 55.3896 57.1602 52.5401V6.12347C57.1602 3.274 54.8522 0.966064 52.0028 0.966064ZM18.361 47.3827H10.7538V22.9057H18.361V47.3827ZM14.4801 19.4064C12.0277 19.4064 10.0447 17.4182 10.0447 14.971C10.0447 12.5238 12.0303 10.5382 14.4801 10.5382C16.9247 10.5382 18.9129 12.5264 18.9129 14.971C18.9129 17.4182 16.9247 19.4064 14.4801 19.4064ZM46.8557 47.3827H39.2537V35.4794C39.2537 32.6403 39.2021 28.9888 35.3005 28.9888C31.3422 28.9888 30.7336 32.0807 30.7336 35.2731V47.3827H23.1316V22.9057H30.4293V26.2502H30.5325C31.5485 24.3265 34.0292 22.2971 37.7296 22.2971C45.4322 22.2971 46.8557 27.3668 46.8557 33.958V47.3827Z"
              fill="#ffc800"
            />
            <defs>
              <linearGradient
                id="paint0_linear_7_409"
                x1="28.7944"
                y1="0.966064"
                x2="28.7944"
                y2="57.6975"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D27685" />
                <stop offset="1" stop-color="#9E4784" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default MenuButton;
