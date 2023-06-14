//TODO: Add number of bombs
// add chat bot for help?
//add use effect or cache to pre-load API connection?

import { useEffect, useState } from "react";

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
  console.log(game);

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
    <section
      className=" flex  sm:flex-row flex-col justify-around mb-[20rem]"
      id="minesweeper"
    >
      <div className="shadow-xl shadow-indigo-500 rounded-xl p-8 border">
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
      <div className="text-center flex flex-col justify-center items-center sm:w-1/3 sm:py-6 ">
        <div className="flex mb-8">
          <h1 className="font-extrabold text-6xl ">Minesweeper</h1>
          <h2 className="font-bold text-3xl font-kaushan ml-10 -rotate-12">
            A classic!
          </h2>
        </div>
        <div className="flex justify-evenly w-full mb-8">
          <img src="../public/assets/icons/reactlogo.png" alt="react logo" />
          <img src="assets/icons/typescriptlogo.png" alt="javascript logo" />

          <img src="./assets/icons/tailwindlogo.png" alt="tailwind logo" />
          <img src="./assets/icons/html5logo.png" alt="html5 logo" />
        </div>
        <p className="pb-2">What a wonderful classic!</p>
        <p className="pb-2">
          At hand we have a strongly-typed React app that incorporates an
          external API.
        </p>
        <p className="pb-2 font-semibold">
          For this assignment, we were given the API web address and told to
          analyze the data returned by calls, and then code a game of
          Minesweeper!
        </p>
        <p className="pb-2">
          This gave rise to asynchornous updates to the game state and dynamic
          rendering of the game board based on difficulty.
        </p>
        <p>
          I also added plenty of styling flair, including the implementation of
          icons from font-awesome :) *Note: For the original non-portfolio
          version I used SCSS for styling!
        </p>
        <div className="w-full flex justify-evenly mt-6 ">
          <button className="border p-4 px-6 rounded-full bg-cyan-500  ">
            <a
              href="https://github.com/jonathonchilds/Minesweeper/blob/trunk/src/App.tsx"
              target="_blank"
            >
              View the source!
            </a>
          </button>
          <button className="border p-4 px-6 rounded-full  bg-cyan-500 relative ">
            <a href="https://minesweeper-api.herokuapp.com/" target="_blank">
              Check out the API
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
