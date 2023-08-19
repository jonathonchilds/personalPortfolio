import Minesweeper from "./components/Minesweeper1";
import Tictactoe from "./components/Tictactoe";
import Header from "./components/Header";
import Introduction from "./components/Introduction";

function App() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
      <Header />
      <section id="introduction">
        <Introduction />
      </section>
      <section id="minesweeper" className="snap-start">
        <Minesweeper />
      </section>
      <section id="tictactoe" className="snap-start">
        <Tictactoe />
      </section>
      <section id="todo" className="snap-start py-[90px] h-screen overflow-hidden">
        <iframe
          src="https://e2todo.vercel.app/"
          className="h-screen w-screen overflow-hidden snap-start"
        ></iframe>
      </section>
    </main>
  );
}
export default App;
