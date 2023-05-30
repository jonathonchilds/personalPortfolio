//add useEffect hook to create new game on page load instead of having to use "new game" button

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
    <div>
      <div className="flex flex-col">
        <h1 className="text-center mt-4 text-3xl">{header} </h1>
        <div className="flex justify-center">
          <button
            onClick={handleNewGame}
            className="rounded-lg shadow-lg w-[150px] py-2 m-4"
          >
            New Game
          </button>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-3 grid-rows-3 gap-1 h-[400px] w-[400px]">
          {game.board.map((boardRow, rowIndex) => {
            return boardRow.map((cell, columnIndex) => {
              return (
                <li
                  key={columnIndex}
                  onClick={() => handleClickCell(rowIndex, columnIndex)}
                  className=" border-2 border-black text-4xl flex items-center justify-center"
                >
                  {cell}
                </li>
              );
            });
          })}
        </ul>
      </div>
    </div>
  );
}
