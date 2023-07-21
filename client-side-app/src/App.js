import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";

const HomePage = React.lazy(() => import("./pages/HomePage"))
const Wordsquiz = React.lazy(() => import("./pages/Wordsquiz"))
const Rank = React.lazy(() => import("./pages/Rank"))
const Notfound = React.lazy(() => import("./pages/Notfound"))

function App() {
  return (
    <>
      <div className="container">
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
