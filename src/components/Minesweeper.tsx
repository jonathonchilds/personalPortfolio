//Add number of bombs
//Integrate AI chat

import { Fragment, useEffect, useState } from "react";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Minesweeper() {
  function IconOne() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    );
  }

  function IconTwo() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    );
  }

  function IconThree() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
        <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
        <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
        <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
        <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
        <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
      </svg>
    );
  }

  const solutions = [
    {
      name: "Insights",
      description: "Measure actions your users take",
      href: "##",
      icon: IconOne,
    },
    {
      name: "Automations",
      description: "Create your own targeted content",
      href: "##",
      icon: IconTwo,
    },
    {
      name: "Reports",
      description: "Keep track of your growth",
      href: "##",
      icon: IconThree,
    },
  ];

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
            className={`secondaryBtn w-40  `}
          >
            Easy
          </button>
          <button
            onClick={() => handleNewGame(1)}
            className={`secondaryBtn w-40 hidden sm:block`}
          >
            Intermediate
          </button>
          <button
            onClick={() => handleNewGame(2)}
            className={`secondaryBtn w-40 hidden sm:block`}
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
        <h2 className="text-center text-lg pb-4">{dynamicH2()}</h2>
        <div>
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
