import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./pages/introduction";
import Projects from "./pages/projects";
import Minesweeper from "./pages/minesweeper";
import Tictactoe from "./pages/tictactoe";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tictactoe" element={<Tictactoe />} />
          <Route path="/minesweeper" element={<Minesweeper />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
