//add useEffect hook to create new game on page load instead of having to use "new game" button
//update tic-tac-toe API documentation to reflect my changes!

import { useState } from "react";

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
      className="my-48 flex  sm:flex-row flex-col justify-around"
      id="tictactoe"
    >
      <div className="text-center sm:w-1/3 sm:py-6 flex flex-col  justify-center items-center content-evenly ">
        <div className="flex mb-8">
          <h1 className="font-extrabold text-6xl ">React-Tac-Toe</h1>
          <h2 className="font-bold text-3xl font-kaushan ml-10 -rotate-12">
            Unbeatable!
          </h2>
        </div>
        <div className="flex w-full justify-evenly mb-8">
          <img src="src/assets/icons/reactlogo.png" alt="react logo" />
          <img src="src/assets/icons/tailwindlogo.png" alt="tailwind logo" />
          <img src="src/assets/icons/html5logo.png" alt="html5 logo" />

          <img
            src="src/assets/icons/typescriptlogo.png"
            alt="javascript logo"
          />
        </div>
        <p className="font-bold text-xl m-4">
          Tldr; I deployed this API for my classmates and I since the original
          was broken.
        </p>
        <p className="pb-1">Here's a proud project!</p>
        <p>
          We were instructed to look at the structure of this API and based on
          the data it returned, code an app to play a game of (unbeatable)
          tic-tac-toe.
        </p>
        <p className="font-semibold p-2">
          Problem was, the API was taken down during Heroku's big changes last
          year!
        </p>
        <p className="pb-2">Challenge accepted!</p>
        <p className="pb-1">
          I forked the repo, installed the dependencies, and deployed the app
          myself via fly.io! (Where the API is served to this day!)
        </p>
        <p className="pb-1">
          It's a great example of my desire to problem solve.
        </p>
        <p className="pb-1">
          Although before this project I'd never actually deployed an app nor
          been exposed to the Ruby language/framework, I dove in and got it
          running.
        </p>
        <p className="p-2 font-semibold">
          It was an empowering learning experience!
        </p>
      </div>
      <div className="shadow-lg shadow-indigo-500 rounded-xl border p-9">
        <h1 className="text-3xl font-bold text-center mb-4">
          {dynamicHeader()}
        </h1>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <button
              onClick={handleNewGame}
              className="text-sm px-4 sm:px-10 sm:py-3 py-1 mb-8 shadow-lg rounded-lg bg-green-400 bg-opacity-60 m-2 hover:cursor-pointer hover:shadow-lg hover:opacity-75"
            >
              {game.id == null ? "Start Game" : "Reset Game"}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="grid grid-cols-3 grid-rows-3 gap-3 h-[500px] w-[500px]">
            {game.board.map((boardRow, rowIndex) => {
              return boardRow.map((cell, columnIndex) => {
                return (
                  <li
                    key={columnIndex}
                    onClick={() => handleClickCell(rowIndex, columnIndex)}
                    className=" border-2 border-black rounded-xl text-6xl flex items-center justify-center"
                  >
                    {cell}
                  </li>
                );
              });
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
