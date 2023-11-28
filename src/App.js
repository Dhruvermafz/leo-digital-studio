import { Router, Routes, Route } from "react-router";
import Home from "./layouts/Home";
import "./App.css";

import "shortcodes";
import About from "./layouts/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
