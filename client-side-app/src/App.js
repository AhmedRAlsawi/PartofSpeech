import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/HomePage";
import Wordsquiz from "./pages/Wordsquiz";
import Rank from "./pages/Rank";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="container ">
        <Navbar />
        <div className="minHeight">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/wordsquiz" element={<Wordsquiz />} />
            <Route exact path="/score" element={<Rank />} />
            <Route exact path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
