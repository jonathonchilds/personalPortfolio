import { useState } from "react";

const Introduction = () => {
  const [isHiAnimationComplete, setIsHiAnimationComplete] = useState(false);
  const [isNameAnimationComplete, setIsNameAnimationComplete] = useState(false);
  const [isProjectIntroAnimationComplete, setIsProjectIntroAnimationComplete] =
    useState(false);

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
    <div className="h-full w-full m-0 p-0 relative ">
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
          className="animate-slideInFromRight text-center text-[50px] p-8 w-[150px] h-[150px]"
        >
          Hi!
        </div>
        <div
          onAnimationEnd={handleEndOfNameAnimation}
          className={` ${
            isHiAnimationComplete ? "animate-slideInFromLeft" : "hidden"
          } text-center text-[50px] p-4`}
        >
          I&apos;m Jonathon.
        </div>
        <div
          onTransitionEnd={handleEndOfHereAreSomeOfMyProjectsTransition}
          className={` ${
            isNameAnimationComplete
              ? "transition-opacity opacity-100 duration-[3000ms]"
              : "opacity-0"
          } text-center text-[50px] p-4 `}
        >
          Welcome to my portfolio!
        </div>
      </div>
    </div>
  );
};

export default Introduction;
