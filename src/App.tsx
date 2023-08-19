import Minesweeper from "./components/Minesweeper1";
import Tictactoe from "./components/Tictactoe1";

import Hero from "./components/Hero1";

function App() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
      
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="hero" className="snap-start">
        <Minesweeper />
      </section>
      <section id="hero" className="snap-start">
        <Tictactoe />
      </section>
    </main>
  );
}
export default App;
