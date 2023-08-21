//Add number of bombs
//Integrate AI chat

import { useEffect, useState } from "react";

import { ApiButton, SourceButton } from "./Buttons";

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

  useEffect(() => {
    handleNewGame(0);
  }, []);

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

  const buttonStyling =
    "text-sm px-4 sm:px-10 sm:py-3 rounded-lg py-1 shadow-lg bg-green-400 bg-opacity-60 m-2 hover:cursor-pointer hover:shadow-lg hover:opacity-75";

  const cellStyling =
    "m-0 p-0 list-none border border-yellow-400  h-[38px] w-[38px] flex items-center justify-center ";

  return (
    <section
      className=" h-screen flex sm:flex-row flex-col-reverse justify-around pt-14"
      id="minesweeper"
    >
      <div className="rounded-xl my-auto p-8 sm:border">
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
                (Use a desktop browser to experience intermediate and expert
                difficulties.)
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
      <div className="text-center flex flex-col justify-center items-center sm:w-1/3 sm:py-6 content-evenly ">
        <div className="sm:flex sm:mb-8">
          <h1 className="sm:font-extrabold sm:text-6xl text-[3rem] ">
            Minesweeper
          </h1>
          <h2 className="sm:text-3xl sm:ml-10 font-bold mb-8 sm:mb-0 text-2xl font-kaushan  -rotate-12">
            Classic!
          </h2>
        </div>
        <div className="flex flex-wrap justify-evenly sm:w-full pb-6 sm:px-0 px-2">
          <img src="assets/icons/reactlogo.png" alt="react logo" />
          <img src="assets/icons/typescriptlogo.png" alt="javascript logo" />

          <img src="assets/icons/tailwindlogo.png" alt="tailwind logo" />
          <img src="assets/icons/html5logo.png" alt="html5 logo" />
        </div>
        <div className="text-slate-100 pb-6">
          <p className="pb-2">
            I coded this classic game using TypeScript & React, with thorough
            typing definitions.
          </p>
          <p className="pb-2 font-semibold">
            I built the styling for this game twice - once using SCSS and again
            using Tailwind CSS (seen here).
          </p>
          <p className="pb-2">
            Minesweeper fetches from an external API to handle gameplay logic.
          </p>
          <p className="pb-2">
            This game is fully-featured and includes a little extra styling
            flair via font-awesome.
          </p>
          <p className="pb-2">Go ahead and play a game!</p>
        </div>
        <div className="w-full flex justify-evenly mt-6 ">
          <SourceButton href="https://github.com/jonathonchilds/Minesweeper/blob/trunk/src/App.tsx" />
          <ApiButton href="https://minesweeper-api.herokuapp.com/" />
        </div>
      </div>
    </section>
  );
}
