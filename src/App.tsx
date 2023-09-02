import Header from "./components/Header";
import Contact from "./components/Contact";
import Minesweeper from "./components/Minesweeper";
import Tictactoe from "./components/Tictactoe";
import Intro from "./components/Intro";
import TodoFrame from "./components/TodoFrame";
import ArtCalcFrame from "./components/ArtCalcFrame";
import ToolboxFrame from "./components/ToolboxFrame";

import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scrollbar ">
      <Header />
      <section id="introduction" className="snap-start">
        <Intro />
      </section>
      <section id="minesweeper" className="snap-start">
        <Minesweeper />
      </section>
      <section id="tictactoe" className="snap-start">
        <Tictactoe />
      </section>
      <section id="toolbox" className="snap-start">
        <ToolboxFrame />
      </section>
      <section id="todo" className="snap-start">
        <TodoFrame />
      </section>
      <section id="artApp" className="snap-start">
        <ArtCalcFrame />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <a href="#introduction">
        <footer className="sticky bottom-5 w-full cursor-pointer hidden md:block">
          <div className="flex items-center justify-end mr-5">
            <ArrowSmallUpIcon className="h-10 w-10 text-gray-400/70 hover:text-sungold duration-300 " />
          </div>
        </footer>
      </a>
    </main>
  );
}
export default App;
