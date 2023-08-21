
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Intro = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to Jonathon's Porfolio.",
      "Full Stack Developer.",
      "Pixel-Perfect Perfectionist.",
      "Clean Code Enthusiast.",
    ],
    loop: 0,
    typeSpeed: 80,
  });

  return (
    <section
      className="flex flex-col justify-center items-center h-screen"
      id="introduction"
    >
      <p className="font-extrabold sm:text-6xl text-2xl h-20 mb-4 ">
        {text}
        <Cursor cursorStyle="_" />
      </p>
      <div>
        <a href="#minesweeper">
          <button className="heroButton">Minesweeper</button>
        </a>
        <a href="#tictactoe">
          <button className="heroButton">Tic-tac-toe</button>
        </a>
        <a href="#todo">
          <button className="heroButton">Todo App</button>
        </a>
        <a href="#artApp">
          <button className="heroButton">Art Studio App</button>
        </a>
        <a href="#contact">
          <button className="heroButton">Contact</button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
