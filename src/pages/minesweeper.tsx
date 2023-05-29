//TODO: Add number of bombs
// add chat bot for help
// add link back to home page
// add link to github
// add link to linkedin
// add link to resume
// add link to email
// add link to phone number

import React, { useState } from "react";

export default function Minesweeper() {
  const [game, setGame] = useState<Game>({
    board: [],
    id: undefined,
    winner: undefined,
    state: undefined,
  });

  type Cell =
    | " "
    // "_" is an empty revealed cell
    | "_"
    | "F"
    | "*"
    | "@"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8";
  type Row = Array<Cell>;
  type Board = Array<Row>;

  type Game = {
    board: Board;
    id: number | undefined;
    state: string | undefined;
    winner: string | undefined;
  };

  async function handleNewGame(difficulty: number) {
    const response = await fetch(
      "https://minesweeper-api.herokuapp.com/games",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ difficulty }),
      }
    );
    const newGame = (await response.json()) as Game;
    if (response.ok) {
      setGame(newGame);
    }
  }

  async function handleClickCell(
    row: number,
    col: number,
    action: "check" | "flag",
    event: React.MouseEvent
  ) {
    if (game.state != undefined) {
      /* empty */
    }
    event.preventDefault();
    const url = `https://minesweeper-api.herokuapp.com/games/${game.id}/${action}`;
    const body = { row, col };
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const newGame = (await response.json()) as Game;
      setGame(newGame);
    }
  }

  function transformClassName(cell: string) {
    switch (cell) {
      // Flagged
      case "F":
        return "bg-red-400 ";
      // Checked
      case "*":
        return "bg-green-400";
      // Empty
      case " ":
        return "bg-transparent";
      // Bomb
      case "@":
        return "bg-green-400 bg-opacity-25";
      // Numbered
      default:
        return "bg-[#81b29a96]";
    }
  }

  function transformCellValue(value: string) {
    return value === "F" ? (
      <i className="fa-brands fa-font-awesome"></i>
    ) : value == "*" ? (
      <i className="fa-solid fa-bomb"></i>
    ) : value == "_" ? (
      " "
    ) : value == "@" ? (
      <i className="text-fit">{":-)"}</i>
    ) : (
      value
    );
  }

  function dynamicH2() {
    if (game.state == "won") {
      return "Nice one! Choose a difficulty to play again.";
    } else if (game.state == "lost") {
      return "Oof! Choose a difficulty to play again.";
    } else if (game.state == undefined) {
      return "";
      // eslint-disable-next-line no-constant-condition
    } else if (game.state == "playing" || "new") {
      return "Good luck!";
    }
  }

  function buttonStyling() {
    return " px-10 py-3 bg-green-400 bg-opacity-60 m-2 hover:cursor-pointer hover:shadow-lg hover:opacity-75";
  }

  function cellStyling() {
    return "m-0 p-0 list-none border border-yellow-400  h-[38px] w-[38px] flex items-center justify-center ";
  }

  return (
    <div className="shadow-lg shadow-indigo-500 rounded-xl p-8">
      <div className="flex justify-center">
        <div className="shadow-xl rounded-xl px-2 py-4  w-fit h-fit flex items-center justify-center flex-col font-stone-700 ">
          <h1 className="text-[3rem]">
            {game.state == undefined ? "Minesweeper" : ""}
          </h1>
          <h2 className="text-center pb-[1rem] text-[2rem]">{dynamicH2()}</h2>
          <div className="flex items-center justify-center mx-4">
            <button
              onClick={() => handleNewGame(0)}
              className={`${buttonStyling} rounded-lg`}
            >
              Easy
            </button>
            <button
              onClick={() => handleNewGame(1)}
              className={`${buttonStyling} rounded-lg`}
            >
              Intermediate
            </button>
            <button
              onClick={() => handleNewGame(2)}
              className={`${buttonStyling} rounded-lg`}
            >
              Expert
            </button>
          </div>
        </div>
      </div>
      <div
        className={` ${
          game.state == undefined ? "pt-0" : "pt-4"
        } flex justify-center `}
      >
        <ul
          className={`difficultyStyle  border-yellow-400 rounded border difficulty-${game.board.length}`}
        >
          {game.board.map((row, rowIndex) =>
            row.map((cell, columnIndex) => (
              <li
                className={`${cellStyling} ${
                  game.state == ("lost" || "won")
                    ? "pointer-events-none opacity-60"
                    : transformClassName(cell)
                }
                `}
                key={columnIndex}
                onClick={(event) => {
                  handleClickCell(rowIndex, columnIndex, "check", event);
                }}
                onContextMenu={(event) => {
                  handleClickCell(rowIndex, columnIndex, "flag", event);
                }}
              >
                {transformCellValue(cell)}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
