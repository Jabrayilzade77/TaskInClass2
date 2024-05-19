import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detail";
import HomePage from "./Pages/HomePage";
import MainProvider from "./context/MainProvider";

function App() {
  return (
    <>
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="detail" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </MainProvider>
    </>
  );
}

export default App;
