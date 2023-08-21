import { motion } from "framer-motion";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";

import Contact from "./components/Contact";
import Minesweeper from "./components/Minesweeper";
import Tictactoe from "./components/Tictactoe";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
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
      <section
        id="todo"
        className="snap-start py-[90px] h-screen overflow-hidden text-center z-30 top-0"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -1,
          }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1, y: 1 }}
        >
          <div className="space-x-16 mb-8">
            <a href="https://github.com/jonathonchilds/e2todo/blob/trunk/src/app/Provider.tsx">
              <button className="heroButton">Source Code</button>
            </a>
            <a href="https://e2todo-jonathonchilds.vercel.app/">
              <button className="heroButton">Live Website</button>
            </a>
          </div>
        </motion.div>
        <iframe
          src="https://e2todo.vercel.app/"
          className="h-screen w-screen overflow-hidden snap-start"
        ></iframe>
      </section>
      <section
        id="artApp"
        className="snap-start py-[90px] h-screen overflow-hidden text-center"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -1,
          }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1, y: 1 }}
        >
          <div className="space-x-16 mb-8">
            <a href="https://github.com/jonathonchilds/artcalculatorapp/blob/trunk/app/page.jsx">
              <button className="heroButton">Source Code</button>
            </a>
            <a href="https://app.digitalartsstudio.net">
              <button className="heroButton">Live Website</button>
            </a>
          </div>
        </motion.div>
        <iframe
          src="https://app.digitalartsstudio.net/"
          className="h-screen w-screen overflow-hidden snap-start"
        ></iframe>
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <a href="#introduction">
        <footer className="sticky bottom-5 w-full cursor-pointer hidden md:block">
          <div className="flex items-center justify-end mr-5">
            <ArrowSmallUpIcon className="h-10 w-10 text-gray-400/70 hover:text-[#F7AB0A]/80 transition-all " />
          </div>
        </footer>
      </a>
    </main>
  );
}
export default App;
