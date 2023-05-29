import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Introduction() {
  const [isHiAnimationComplete, setIsHiAnimationComplete] = useState(false);
  const [isNameAnimationComplete, setIsNameAnimationComplete] = useState(false);
  const [isProjectIntroAnimationComplete, setIsProjectIntroAnimationComplete] =
    useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isProjectIntroAnimationComplete) {
      const timeoutId = setTimeout(() => {
        navigate("/projects");
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  });

  const handleEndOfNameAnimation = () => {
    setIsNameAnimationComplete(true);
  };

  const handleEndOfHiAnimation = () => {
    setIsHiAnimationComplete(true);
  };

  const handleEndOfHereAreSomeOfMyProjectsTransition = () => {
    setIsProjectIntroAnimationComplete(true);
  };

  // after the introduction animation is complete, the user is redirected to the projects page

  return (
    <div>
      <div
        id="container"
        className={
          isProjectIntroAnimationComplete
            ? `m-16 columns-1 justify-items-center grid transition-transform transform translate-y-[-100vh] duration-500 `
            : `m-16 columns-1 justify-items-center grid`
        }
      >
        <div
          onAnimationEnd={handleEndOfHiAnimation}
          className="animate-slideInFromRight flex items-center justify-center text-[50px] shadow-lg text-slate-900 p-8 w-[150px] h-[150px]"
        >
          hi!
        </div>
        <div
          onAnimationEnd={handleEndOfNameAnimation}
          className={` ${
            isHiAnimationComplete ? "animate-slideInFromLeft" : "hidden"
          } justify-center text-[50px] text-slate-900 p-4`}
        >
          i&apos;m jonathon
        </div>
        <div
          onTransitionEnd={handleEndOfHereAreSomeOfMyProjectsTransition}
          className={` ${
            isNameAnimationComplete
              ? "transition-opacity opacity-100 duration-[3000ms]"
              : "opacity-0"
          } justify-center text-[50px] text-slate-900 p-4 `}
        >
          & here are some of my projects&hellip;
        </div>
      </div>
    </div>
  );
}
