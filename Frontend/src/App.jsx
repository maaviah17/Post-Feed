import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Createpost from "./pages/Createpost"
import Feedpost from "./pages/Feedpost"
import Home from "./pages/Home"

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create-post" element={<Createpost />}/>
        <Route path="/feed" element={<Feedpost />}/>
      </Routes>
    </BrowserRouter>
  )
}
 
export default App

