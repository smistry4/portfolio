import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
