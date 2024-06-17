import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

function MenuButton({ toggleMenu }) {
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();

  useEffect(() => {
    if (toggleMenu) {
      animate1(
        scope1.current,
        {
          rotateZ: 45,
          y: 8,
        },
        { duration: 0.1 }
      );
      animate2(scope2.current, { opacity: 0 }, { duration: 0.1 });
      animate3(scope3.current, { rotateZ: -45, y: -8 }, { duration: 0.1 });
    } else {
      animate1(scope1.current, { rotateZ: 0, y: 0 }, { duration: 0.1 });
      animate2(scope2.current, { opacity: 1 }, { duration: 0.1 });
      animate3(scope3.current, { rotateZ: 0, y: 0 }, { duration: 0.1 });
    }
  });

  return (
    <motion.div className="flex flex-col gap-0.5">
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
    </motion.div>
  );
}

export default MenuButton;
