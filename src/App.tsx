import Minesweeper from "./components/minesweeper";
import Tictactoe from "./components/tictactoe";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Minesweeper />
      <Tictactoe />
    </>
  );
}
export default App;
