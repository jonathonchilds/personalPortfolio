import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./pages/introduction";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
