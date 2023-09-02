import { useEffect, useState } from "react";

export default function Tictactoe() {
  const [game, setGame] = useState({
    board: [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    id: null,
    winner: null,
  });

  useEffect(() => {
    handleNewGame();
  }, []);

  async function handleNewGame() {
    const response = await fetch("https://tic-tac-toe-api.fly.dev/game", {
      method: "POST",
      headers: { "content-type": "application/json" },
    });
    if (response.ok) {
      const newGame = await response.json();
      setGame(newGame);
    }
  }
  async function handleClickCell(row: number, column: number) {
    const url = `https://tic-tac-toe-api.fly.dev/game/${game.id}`;
    const body = { row: row, column: column };
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const newGame = await response.json();
      setGame(newGame);
    }
  }

  const dynamicHeader = () => {
    if (game.winner == "X") {
      return (
        <div className="flex flex-col justify-center">
          <p className="pb-2">Computer Victory!</p>
          <div>
            <button onClick={handleNewGame} className="primaryBtn w-28">
              Reset
            </button>
          </div>
        </div>
      );
    } else if (game.winner == "TIE") {
      return (
        <div className="flex flex-col justify-center">
          <p className="pb-2">Tie!</p>
          <div>
            <button onClick={handleNewGame} className="primaryBtn w-28">
              Reset
            </button>
          </div>
        </div>
      );
    } else return "";
  };

  return (
    <section
      className="md:h-screen flex md:flex-row flex-col justify-around "
      id="tictactoe"
    >
      <div className="flex flex-col justify-center text-center space-y-20 max-w-xl ">
        <div className="flex space-x-4">
          <h2 className="sm:text-3xl sm:ml-10 font-bold mb-8 sm:mb-0 text-2xl pt-2 font-kaushan -rotate-12 text-sungold">
            Unbeatable
          </h2>
          <h1 className="sm:font-extrabold sm:text-6xl text-[3rem] ">
            Tic-Tac-Toe
          </h1>
        </div>
        <p className="text-md text-gray-600 leading-10">
          React - API Integration - Async/Await - JavaScript - Functional
          Components - Hooks - useState - useEffect - Fetch API - JSON - Dynamic
          Rendering - Event Handling - CSS - Tailwind CSS - Responsive Design -
          Flexbox - Grid Layout - JSX - Mapping - State Management
        </p>

        <div className="w-full flex justify-evenly">
          <a href="https://github.com/jonathonchilds/personalPortfolio/blob/trunk/src/components/Tictactoe.tsx">
            <button className="primaryBtn w-52">Source Code</button>
          </a>
          <a href="https://tic-tac-toe-api.fly.dev/">
            <button className="primaryBtn w-52">API</button>
          </a>
        </div>
      </div>
      <div className=" flex justify-center items-center md:h-screen ">
        <div className="flex justify-center flex-col  md:h-[650px] md:w-[650px]">
          <h1 className="text-3xl font-bold text-center mb-6 h-20">
            {dynamicHeader()}
          </h1>

          <div className="flex justify-center">
            <ul className="grid grid-cols-3 grid-rows-3 md:gap-5 gap-2 md:h-[500px] md:w-[500px] h-[200px] w-[200px]">
              {game.board.map((boardRow, rowIndex) => {
                return boardRow.map((cell, columnIndex) => {
                  return (
                    <li
                      key={columnIndex}
                      onClick={() => handleClickCell(rowIndex, columnIndex)}
                      className=" rounded-lg text-6xl flex items-center justify-center bg-purple hover:cursor-pointer  hover:opacity-80"
                    >
                      {cell}
                    </li>
                  );
                });
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
