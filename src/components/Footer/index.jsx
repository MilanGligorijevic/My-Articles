import React from "react";

function Footer() {
  return (
    <div className="h-10 flex justify-end items-center mx-[10%] mt-24 text-sm text-custom-yellow1">
      © 2024 Articles. by{" "}
      <a
        href="https://github.com/MilanGligorijevic"
        target="_blank"
        rel="noreferrer"
        className="ml-1"
      >
        <svg
          width="27"
          height="21"
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
    </div>
  );
}

export default Footer;