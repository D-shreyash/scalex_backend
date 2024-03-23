import { createContext } from "react";
import About from "../conponent/About/About.js";
import Home from "../conponent/Home/Home.js";
import { Route, Routes } from "react-router-dom";

const cryptodata = createContext();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
