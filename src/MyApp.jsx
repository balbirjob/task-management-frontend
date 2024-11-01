import React from 'react'
import {Routes, Route} from "react-router-dom"
import Dashboard from "./component/dashboard/Dashboard"
import LRform from "./component/home/LRform"


const MyApp = () => {
  return (
    <Routes>
        <Route path="/" element={< LRform/>}/>
        <Route path="/dashboard" element={< Dashboard/>}/>
    </Routes>
  )
}

export default MyApp