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
    <section className=" h-screen " id="introduction">
      <div className="flex flex-col justify-center items-center h-full z-10 ">
        <p className="font-extrabold sm:text-6xl text-2xl h-20 mb-4 ">
          {text}
          <Cursor cursorStyle="_" />
        </p>
        <div>
          <a href="#minesweeper">
            <button className="primaryBtn">Minesweeper</button>
          </a>
          <a href="#tictactoe">
            <button className="primaryBtn">Tic-tac-toe</button>
          </a>
          <a href="#todo">
            <button className="primaryBtn">Todo App</button>
          </a>
          <a href="#artApp">
            <button className="primaryBtn">Art Studio App</button>
          </a>
          <a href="#contact">
            <button className="primaryBtn">Contact</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
