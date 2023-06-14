import React from "react"
import Home from "./Pages/Home"
import Qualifications from './Pages/Qualifications'
import Schedual from "./Pages/Schedual"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {Wave} from "./Components/Wave";

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/qualifications" element={<Qualifications />}></Route>
          <Route path="/schedual" element={<Schedual />}></Route>
        </Routes>
      </BrowserRouter>
      <Wave />
    </>

    
  );
}

export default App;