import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "./Navbar";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Welcome to Jonathon's Porfolio :)", "Full Stack Developer", "Pixel-Perfect Perfectionist", "Clean Code Enthusiast"],
    loop: 0,
    typeSpeed: 100,
  });

  return (
    <section className="text-center space-y-36 justify-center my-32 h-screen">
      <Navbar />
      <p className="font-extrabold sm:text-6xl text-2xl h-20 ">
        {text}
        <Cursor cursorStyle="_" />
      </p>
    </section>
  );
};

export default Hero;
