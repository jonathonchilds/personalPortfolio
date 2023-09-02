import { useTypewriter } from "react-simple-typewriter";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["Welcome to Jonathon's Porfolio"],
    loop: 1,
    typeSpeed: 70,
  });

  return (
    <section className="h-screen " id="introduction">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <p className="font-extrabold sm:text-6xl text-2xl h-20 mb-4 ">{text}</p>
        <div className="mb-16 md:block flex flex-col space-y-6">
          <a href="#minesweeper">
            <button className="primaryBtn">Minesweeper</button>
          </a>
          <a href="#tictactoe">
            <button className="primaryBtn">Tic-tac-toe</button>
          </a>
          <a href="#toolbox">
            <button className="secondaryBtn">ToolBox App</button>
          </a>
          <a href="#todo">
            <button className="secondaryBtn">Todo App</button>
          </a>
          <a href="#artApp">
            <button className="secondaryBtn">Art Studio App</button>
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
