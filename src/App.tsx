import { useState } from "react";

function App() {
  const [isHiAnimationComplete, setIsHiAnimationComplete] = useState(false);
  const handleAnimationEnd = () => {
    setIsHiAnimationComplete(true);
  };
  return (
    <>
      <div
        id="container"
        className="m-16 columns-1 justify-items-center grid gap-6"
      >
        <div
          onAnimationEnd={handleAnimationEnd}
          className="animate-slideInFromRight flex items-center justify-center text-[50px] shadow-lg text-slate-900 p-8 w-[150px] h-[150px]"
        >
          hi!
        </div>
        <div
          className={` ${
            isHiAnimationComplete ? "animate-slideInFromLeft" : "hidden"
          } justify-center text-[50px] text-slate-900 p-16`}
        >
          i&apos;m jonathon
        </div>
        <div className="justify-center text-[50px] text-slate-900 p-16 hidden">
          here are some of my projects
        </div>
      </div>
    </>
  );
}
export default App;
