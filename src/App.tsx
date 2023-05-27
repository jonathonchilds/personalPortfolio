import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./pages/introduction";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
