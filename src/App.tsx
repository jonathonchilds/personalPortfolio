import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./pages/introduction";
import Projects from "./pages/projects";
import Minesweeper from "./pages/minesweeper";
import Tictactoe from "./pages/tictactoe";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tictactoe" element={<Tictactoe />} />
          <Route path="*" element={<Minesweeper />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
