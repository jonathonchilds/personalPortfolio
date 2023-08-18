//add useEffect hook to create new game on page load instead of having to use "new game" button
//update tic-tac-toe API documentation to reflect my changes!

import { useState } from "react";
import { ApiButton, SourceButton } from "./Buttons";

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
      return `The computer wins!`;
    } else if (game.winner == "TIE") {
      return `It's a tie! (You can't win!)`;
    } else return "";
  };

  return (
    <section
      className="h-screen sm:my-48 flex sm:flex-row flex-col justify-around "
      id="tictactoe"
    >
      <div className="text-center sm:w-1/3 sm:py-6 flex flex-col  justify-center items-center content-evenly ">
        <div className="flex flex-col sm:flex-row sm:mb-8">
          <h1 className="sm:font-extrabold sm:text-6xl text-[3rem] ">
            React-Tac-Toe
          </h1>
          <h2 className="sm:text-3xl sm:ml-10 font-bold mb-8 sm:mb-0 text-2xl pt-2 font-kaushan underline underline-offset-4  -rotate-12">
            Unbeatable
          </h2>
        </div>
        <div className="flex w-full flex-wrap justify-evenly mb-8">
          <img src="./assets/icons/reactlogo.png" alt="react logo" />
          <img src="./assets/icons/tailwindlogo.png" alt="tailwind logo" />
          <img src="./assets/icons/html5logo.png" alt="html5 logo" />

          <img src="./assets/icons/typescriptlogo.png" alt="javascript logo" />
        </div>
        <p className="pb-1">
          My pride in this game lies in the fact that I cloned a broken API
          (written in Ruby), installed the required dependencies, and then
          deployed it for public use.
        </p>
        <p className="p-2 font-semibold flex justify-center items-center">
          It was an awesome achievement!
        </p>
        <p className="p-2 font-semibold flex justify-center items-center">
          Tic-Tac-Toe is written in TypeScript and uses React. Tailwind for styling!
        </p>
        <div className="w-full flex justify-evenly mt-6 ">
          <SourceButton href="https://github.com/jonathonchilds/React-Tac-Toe/blob/trunk/src/App.tsx" />
          <ApiButton href="https://tic-tac-toe-api.fly.dev/" />
        </div>
      </div>
      <div className=" flex justify-center items-center  ">
        <div className="sm:shadow-lg shadow-indigo-500 rounded-xl flex justify-center flex-col sm:border h-[650px] w-[650px] ">
          <h1 className="text-3xl font-bold text-center">{dynamicHeader()}</h1>
          <div className="flex flex-col">
            <div className="flex justify-center">
              <button
                onClick={handleNewGame}
                className="text-sm px-4 mb-7 sm:px-10 sm:py-3 py-1 shadow-lg rounded-lg bg-green-400 bg-opacity-60 m-2 hover:cursor-pointer hover:shadow-lg hover:opacity-75"
              >
                {game.id == null ? "Start Game" : "Reset Game"}
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <ul className="grid grid-cols-3 grid-rows-3 gap-3 sm:h-[500px] sm:w-[500px] w-5/6 h-[300px]">
              {game.board.map((boardRow, rowIndex) => {
                return boardRow.map((cell, columnIndex) => {
                  return (
                    <li
                      key={columnIndex}
                      onClick={() => handleClickCell(rowIndex, columnIndex)}
                      className=" border-2 border-black rounded-xl text-6xl text-slate-100 flex items-center justify-center bg-indigo-500 hover:cursor-pointer hover:shadow-lg hover:opacity-95"
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
