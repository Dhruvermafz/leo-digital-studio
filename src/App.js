import { Router, Routes, Route } from "react-router";
import Home from "./layouts/Home";
import "./App.css";
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </Router>
    <>
      <Home />
    </>
  );
}

export default App;
