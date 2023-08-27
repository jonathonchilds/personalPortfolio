//Add number of bombs
//Integrate AI chat

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
        return "bg-transparent ";
      // Bomb
      case "@":
        return "bg-green-400 bg-opacity-25";
      // Numbered
      default:
        return "bg-purple";
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
      return "Choose a difficulty to play again.";
    } else return "";
  }

  function cellStyling() {
    if (game.board.length === 8) {
      return "m-0 p-0 list-none border-sungold/80 border-[.5px] h-[38px] w-[38px] flex items-center justify-center ";
    } else if (game.board.length === 16) {
      return "m-0 p-0 list-none border-sungold/80 border-[.5px] h-[30px] w-[30px] flex items-center justify-center ";
    } else if (game.board.length === 24) {
      return "m-0 p-0 list-none border-sungold/80 border-[.5px] h-[24px] w-[24px] flex items-center justify-center ";
    }
  }

  return (
    <section
      className="h-screen flex sm:flex-row flex-col-reverse justify-around "
      id="minesweeper"
    >
      <div className="text-center flex flex-col justify-center items-center sm:w-1/3 sm:py-6 content-evenly ">
        <h1 className="sm:font-extrabold sm:text-6xl text-[3rem] pb-6 ">
          Minesweeper
        </h1>
        <div className="flex space-y-4 justify-center flex-col pb-16">
          <button
            onClick={() => handleNewGame(0)}
            className={`primaryBtn w-40  `}
          >
            Easy
          </button>
          <button
            onClick={() => handleNewGame(1)}
            className={`primaryBtn w-40 hidden sm:block`}
          >
            Intermediate
          </button>
          <button
            onClick={() => handleNewGame(2)}
            className={`primaryBtn w-40 hidden sm:block`}
          >
            Expert
          </button>
          <p className="sm:hidden text-center mt-4">
            (Use a desktop browser to experience intermediate and expert
            difficulties.)
          </p>
        </div>
      </div>
      <div className="my-auto">
        <h2 className="text-center text-lg pb-4 h-12">{dynamicH2()}</h2>
        <div className="w-[600px]">
          <ul
            className={`difficultyStyle  border-sungold/80 rounded position-relative border difficulty-${game.board.length}`}
          >
            {game.board.map((row, rowIndex) =>
              row.map((cell, columnIndex) => (
                <li
                  className={`${cellStyling()} ${
                    game.state == ("lost" || "won")
                      ? "pointer-events-none opacity-30"
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
    </section>
  );
}

// React-Powered: Harnessing the latest features of React, ensuring a fast, responsive, and user-friendly interface.
// Dynamic Drag & Drop: Integrated with react-beautiful-dnd, making task management intuitive and engaging.
// Global State Management: Using React's useContext for efficient state management, ensuring swift updates across the app.
// Adaptive Design: Leveraging custom hooks like useMediaQuery to dynamically adjust to user screen sizes.
// Styled with Tailwind: Modern UI design using the Tailwind CSS framework, complete with custom utilities for fine-tuned, pixel-perfect designs.
// Dark Mode Capabilities: Integrated with next-themes for seamless theme toggling, enhancing user experience.
// Backend Integration: Connected with supabase for reliable database operations – CRUD functionalities for tasks, ensuring data persistence.
// Modular Architecture: Organized component-based structure, making the codebase maintainable and scalable.
// Mobile-Responsive: Includes both desktop and mobile footers, ensuring a seamless experience across devices.
// Efficient Error Handling: Advanced error checks in async functions for optimal user feedback and debugging.
// Future-Ready: Built using modern ES6+ syntax and TypeScript for type-safety, making the app robust and less error-prone.
