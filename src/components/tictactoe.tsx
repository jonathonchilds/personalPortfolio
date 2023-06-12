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
  const header = game.winner
    ? `${game.winner} is the winner!`
    : "React-Tac-Toe";

  return (
    <section className="my-48 flex  sm:flex-row flex-col justify-around">
      <div className="text-center sm:w-1/3 sm:py-6 ">
        <div className="flex mb-6">
          <h1 className="font-extrabold text-6xl ">React-Tac-Toe</h1>
          <h2 className="font-bold text-3xl font-kaushan ml-10 -rotate-12">
            Unbeatable!
          </h2>
        </div>
        <div className="flex justify-evenly">
          <img src="src/assets/icons/reactlogo.png" alt="react logo" />
          <img src="src/assets/icons/tailwindlogo.png" alt="tailwind logo" />
          <img src="src/assets/icons/html5logo.png" alt="html5 logo" />

          <img
            src="src/assets/icons/typescriptlogo.png"
            alt="javascript logo"
          />
        </div>
        <p className="p-14">
          Now here's a fun one! With changes to heroku in the midst of our
          cohort, the API we used to load the unbeatable game logic was taken
          down! Not to worry, friends! I forked the repo and enjoyed my first
          exposure to the Ruby language. I also underwent the seemingly
          monumental task of solving outdated dependency and version issues.
          Finally, I got the thing deployed! This was the first application (&
          API) I'd ever deployed!
        </p>
      </div>
      <div className="mb-24 shadow-lg shadow-indigo-500 rounded-xl border p-8">
        <div className="flex flex-col">
          <h1 className="text-center mt-4 py-4 text-3xl">{header} </h1>
          <div className="flex justify-center">
            <button
              onClick={handleNewGame}
              className="text-sm px-4 sm:px-10 sm:py-3 py-1 mb-8 shadow-lg rounded-lg bg-green-400 bg-opacity-60 m-2 hover:cursor-pointer hover:shadow-lg hover:opacity-75"
            >
              New Game
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="grid grid-cols-3 grid-rows-3 gap-1 h-[400px] w-[400px]">
            {game.board.map((boardRow, rowIndex) => {
              return boardRow.map((cell, columnIndex) => {
                return (
                  <li
                    key={columnIndex}
                    onClick={() => handleClickCell(rowIndex, columnIndex)}
                    className=" border-2 border-black rounded-xl text-4xl flex items-center justify-center"
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
