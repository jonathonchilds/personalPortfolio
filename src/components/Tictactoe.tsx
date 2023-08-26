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
      return `The computer wins!`;
    } else if (game.winner == "TIE") {
      return `It's a tie!`;
    } else return "";
  };

  return (
    <section
      className="flex sm:flex-row flex-col justify-around pt-16"
      id="tictactoe"
    >
      <div className="text-center flex flex-col items-center space-y-6 justify-evenly ">
        <div>
          <div className="flex space-x-6 pb-12">
            <h2 className="sm:text-3xl sm:ml-10 font-bold mb-8 sm:mb-0 text-2xl pt-2 font-kaushan -rotate-12 text-sungold">
              Unbeatable
            </h2>
            <h1 className="sm:font-extrabold sm:text-6xl text-[3rem] ">
              Tic-Tac-Toe
            </h1>
          </div>
          <button onClick={handleNewGame} className="secondaryBtn">
            {game.id == null ? "Start Game" : "Reset Game"}
          </button>
        </div>
        {/* <div className="w-full flex justify-evenly mt-6 ">
          <a href="https://github.com/jonathonchilds/React-Tac-Toe/blob/trunk/src/App.tsx">
            <button className="primaryBtn w-52">Source Code</button>
          </a>
          <a href="https://tic-tac-toe-api.fly.dev/">
            <button className="primaryBtn w-52">API</button>
          </a>
        </div> */}
      </div>
      <div className=" flex justify-center items-center  ">
        <div className="flex justify-center flex-col  h-[650px] w-[650px] ">
          <h1 className="text-3xl font-bold text-center pb-6">{dynamicHeader()}</h1>

          <div className="flex justify-center">
            <ul className="grid grid-cols-3 grid-rows-3 gap-5 sm:h-[500px] sm:w-[500px] h-[300px]">
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
