import "./App.css";
import { Router, Routes, Route } from "react-router";
import Home from "./layouts/Home";
import "./styles/component/index.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
