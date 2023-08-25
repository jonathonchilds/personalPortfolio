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
    } else if (game.state == undefined) {
      return "";
      // eslint-disable-next-line no-constant-condition
    } else if (game.state == "playing" || "new") {
      return "Good luck!";
    }
  }

  const buttonStyling =
    "text-sm px-4 sm:px-10 sm:py-3 rounded-lg py-1 bg-[#5c0af7] bg-opacity-60 m-2 hover:cursor-pointer hover:shadow-lg hover:opacity-75";

  const cellStyling =
    "m-0 p-0 list-none border-sungold/80 border-[.5px] h-[38px] w-[38px] flex items-center justify-center ";
  
  function dynamicCellStyling() {
    if (game.board.length === 8)
    {
      return "m-0 p-0 list-none border-sungold/80 border-[.5px] h-[38px] w-[38px] flex items-center justify-center ";
    }
    else if (game.board.length === 16)
    {
      return "m-0 p-0 list-none border-sungold/80 border-[.5px] h-[30px] w-[30px] flex items-center justify-center ";
    }
    else if (game.board.length === 24)
    {
      return "m-0 p-0 list-none border-sungold/80 border-[.5px] h-[24px] w-[24px] flex items-center justify-center ";
      }
  }

  return (
    <section
      className="h-screen flex sm:flex-row flex-col-reverse justify-around "
      id="minesweeper"
    >
      <div className="my-auto">
        <div
          className={` ${
            game.state == undefined ? "pt-0" : "pt-4"
          } flex justify-center `}
        >
          <ul
            className={`difficultyStyle  border-sungold/80 rounded position-relative border difficulty-${game.board.length}`}
          >
            {game.board.map((row, rowIndex) =>
              row.map((cell, columnIndex) => (
                <li
                  className={`${dynamicCellStyling()} ${
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
        <h1 className="sm:font-extrabold sm:text-6xl text-[3rem] pb-6 ">
          Minesweeper
        </h1>
        <div className="flex sm:flex-row sm:items-center justify-center flex-col space-x-4 pb-16">
          <button onClick={() => handleNewGame(0)} className={`secondaryBtn  `}>
            Easy
          </button>
          <button
            onClick={() => handleNewGame(1)}
            className={`secondaryBtn hidden sm:block`}
          >
            Intermediate
          </button>
          <button
            onClick={() => handleNewGame(2)}
            className={`secondaryBtn hidden sm:block`}
          >
            Expert
          </button>
          <p className="sm:hidden text-center mt-4">
            (Use a desktop browser to experience intermediate and expert
            difficulties.)
          </p>
        </div>
        
        <h2 className="text-center text-2xl p-4 pb-16">{dynamicH2()}</h2>
        {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                <item.icon aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-4">
                          <a
                            href="##"
                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span className="flex items-center">
                              <span className="text-sm font-medium text-gray-900">
                                Documentation
                              </span>
                            </span>
                            <span className="block text-sm text-gray-500">
                              Start integrating products and tools
                            </span>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}

        <div className="w-full flex justify-evenly mt-6 ">
          <a href="https://github.com/jonathonchilds/Minesweeper/blob/trunk/src/App.tsx">
            <button className="primaryBtn w-52">Source Code</button>
          </a>
          <a href="https://minesweeper-api.herokuapp.com/">
            <button className="primaryBtn w-52">API</button>
          </a>
        </div>
      </div>
    </section>
  );
}
