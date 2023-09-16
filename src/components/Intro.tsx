import { useTypewriter } from "react-simple-typewriter";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["Welcome!"],
    loop: 1,
    typeSpeed: 70,
  });

  return (
    <section className="h-screen " id="introduction">
      <div className="flex flex-col md:justify-center justify-around pt-28 items-center h-full text-center">
        <p className="font-extrabold md:text-6xl text-3xl md:h-20 md:mb-8 md:block px-4">
          {text}
        </p>
        <div className="mb-16 md:block flex flex-col space-y-6">
          <a href="#minesweeper">
            <button className="primaryBtn">Minesweeper</button>
          </a>
          <a href="#tictactoe">
            <button className="primaryBtn">Tic-tac-toe</button>
          </a>
          <a href="#toolbox">
            <button className="primaryBtn">ToolBox App</button>
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
