import React from 'react'
import Navbar from "./Component/navbar"
import Login from "./Component/Login"
import Barchart from "./Component/barchart"
import Piechart from "./Component/piechart"


function App() {
  return (
    <div>

      <Navbar/>
      <Login/> 
    <Barchart/>
      <Piechart/>


    </div>
    
  )
}

export default App
