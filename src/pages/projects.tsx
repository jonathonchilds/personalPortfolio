// Add scrollbars?

import { Link } from "react-router-dom";

export default function Projects() {
  const projectButtons =
    "shadow-xl p-4 w-full rounded-full bg-gray-200 transparent hover:bg-gray-300 hover:shadow-2xl transition-all duration-500";

  return (
    <div className="grid p-10 grid-cols-3 gap-2 h-[20rem] text-center  ">
      <div>
        <button className={`${projectButtons}`}>
          <Link to="/minesweeper" className="text-[40px]">
            {" "}
            Minesweeper{" "}
          </Link>
        </button>
      </div>
      <div>
        <button className={`${projectButtons}`}>
          <Link to="/tictactoe" className="text-[40px]">
            Tic-Tac-Toe
          </Link>
        </button>
      </div>
      <div>
        <button className={`${projectButtons}`}>
          <a
            href="https://toolboxapp.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[40px]"
          >
            ToolBox
          </a>
        </button>
      </div>
    </div>
  );
}
