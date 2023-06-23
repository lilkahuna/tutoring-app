import React from "react"
import Home from "./Pages/Home"
import Qualifications from './Pages/Qualifications'
import Schedule from "./Pages/Schedule"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Issues from "./Pages/Issues"

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/qualifications" element={<Qualifications />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/issues" element={<Issues />}></Route>
        </Routes>
      </BrowserRouter>
    </>

    
  );
}

export default App;