import Minesweeper from "./components/Minesweeper";
import Tictactoe from "./components/Tictactoe";

import Hero from "./components/Hero";

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
