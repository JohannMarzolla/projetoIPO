import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Componentes/Home";
import Oque from "./Componentes/Oque";
import Quiz from "./Componentes/Quiz";

import "./App.css"

export default function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Oque" element={<Oque/>} />
      <Route path="/Quiz" element={<Quiz/>} />
    </Routes>
    </BrowserRouter>
  )
}