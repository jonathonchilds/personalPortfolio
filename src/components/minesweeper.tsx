//TODO: Add number of bombs
// add chat bot for help?
//add use effect or cache to pre-load API connection?

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
    return "text-sm px-4 sm:px-10 sm:py-3 rounded-lg py-1 shadow-lg bg-green-400 bg-opacity-60 m-2 hover:cursor-pointer hover:shadow-lg hover:opacity-75";
  }

  function cellStyling() {
    return "m-0 p-0 list-none border border-yellow-400  h-[38px] w-[38px] flex items-center justify-center ";
  }

  return (
    <section className="my-48 flex  sm:flex-row flex-col justify-around">
      <div className="shadow-lg shadow-indigo-500 rounded-xl p-8 border">
        <div className="flex justify-center">
          <div className=" px-2 py-4  w-fit h-fit flex items-center justify-center flex-col font-stone-700 ">
            <h1 className="text-[3rem]">
              {game.state == undefined ? "Minesweeper" : ""}
            </h1>
            <h2 className="text-center pb-[1rem] text-[2rem]">{dynamicH2()}</h2>
            <div className="flex sm:flex-row sm:items-center justify-center flex-col mx-4">
              <button
                onClick={() => handleNewGame(0)}
                className={`${buttonStyling}  `}
              >
                Easy
              </button>
              <button
                onClick={() => handleNewGame(1)}
                className={`${buttonStyling}  hidden sm:block`}
              >
                Intermediate
              </button>
              <button
                onClick={() => handleNewGame(2)}
                className={`${buttonStyling}  hidden sm:block`}
              >
                Expert
              </button>
              <p className="sm:hidden text-center mt-4">
                Use a desktop browser to experience intermediate and expert
                difficulties!
              </p>
            </div>
          </div>
        </div>
        <div
          className={` ${
            game.state == undefined ? "pt-0" : "pt-4"
          } flex justify-center `}
        >
          <ul
            className={`difficultyStyle  border-yellow-400 rounded position-relative border difficulty-${game.board.length}`}
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
      <div className="text-center sm:w-1/3 sm:py-6 ">
        <div className="flex mb-6">
          <h1 className="font-extrabold text-6xl ">Minesweeper</h1>
          <h2 className="font-bold text-3xl font-kaushan ml-10 -rotate-12">
            A classic!
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          assumenda dolor ut necessitatibus quae odit nulla aperiam ducimus odio
          quibusdam esse labore ratione dolorum ipsa culpa eveniet, ab veritatis
          autem!
        </p>
      </div>
    </section>
  );
}
