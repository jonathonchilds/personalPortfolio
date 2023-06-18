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
      className="sm:my-48 flex sm:flex-row flex-col justify-around "
      id="tictactoe"
    >
      <div className="text-center sm:w-1/3 sm:py-6 flex flex-col  justify-center items-center content-evenly ">
        <div className="flex flex-col sm:flex-row sm:mb-8">
          <h1 className="sm:font-extrabold sm:text-6xl text-[3rem] ">
            React-Tac-Toe
          </h1>
          <h2 className="sm:text-3xl sm:ml-10 font-bold mb-8 sm:mb-0 text-2xl font-kaushan  -rotate-12">
            Unbeatable!
          </h2>
        </div>
        <div className="flex w-full justify-evenly mb-8">
          <img src="./assets/icons/reactlogo.png" alt="react logo" />
          <img src="./assets/icons/tailwindlogo.png" alt="tailwind logo" />
          <img src="./assets/icons/html5logo.png" alt="html5 logo" />

          <img src="./assets/icons/typescriptlogo.png" alt="javascript logo" />
        </div>
        <p className="font-bold text-xl m-4">
          Tl;dr I deployed this API for my classmates and I. React-Tac-Toe lives
          on!
        </p>
        <p className="pb-1">Here's a proud project!</p>
        <p className="sm:mx-0 mx-2">
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
        <p className="pb-1 sm:mx-0 mx-2">
          Although before this project I'd never actually deployed an app nor
          been exposed to the Ruby language/framework, I dove in and got it
          running.
        </p>
        <p className="p-2 font-semibold flex justify-center items-center">
          It was an empowering learning experience!
          <img
            src="/public/assets/sweatEmoji.png"
            width={25}
            className="ml-2"
          ></img>
        </p>
        <div className="w-full flex justify-evenly mt-6 ">
          <button className="border sm:p-4 sm:px-6 py-2 px-4 text-sm sm:text-base rounded-full bg-cyan-500  ">
            <a
              href="https://github.com/jonathonchilds/React-Tac-Toe/blob/trunk/src/App.tsx"
              target="_blank"
            >
              View the source!
            </a>
          </button>
          <button className="border sm:p-4 sm:px-6 py-2 px-4 text-sm sm:text-base rounded-full  bg-cyan-500 ">
            <a href="https://tic-tac-toe-api.fly.dev/" target="_blank">
              Check out the API
            </a>
          </button>
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
