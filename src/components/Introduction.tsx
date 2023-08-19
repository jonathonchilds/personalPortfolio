import { useTypewriter, Cursor } from "react-simple-typewriter";

const Introduction = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to Jonathon's Porfolio.",
      "- Full Stack Developer.",
      "- Pixel-Perfect Perfectionist.",
      "- Clean Code Enthusiast.",
    ],
    loop: 0,
    typeSpeed: 80,
  });

  return (
    <section className="text-center snap-start space-y-36 justify-center py-32 h-screen">
      <p className="font-extrabold sm:text-6xl text-2xl h-20 ">
        {text}
        <Cursor cursorStyle="_" />
      </p>
    </section>
  );
};

export default Introduction;
