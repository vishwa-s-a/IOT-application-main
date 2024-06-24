import React from 'react'
import Home from "./Home";
import Doctor from "../src/Components/SignIn/Doctor"
import { Route, Routes } from "react-router-dom";
import Patient from './Components/SignIn/Patient';

const App = () =>{
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/signIn-d' element={<Doctor/>} /> 
<Route path='/signIn-p' element={<Patient/>} />
      </Routes>
    

         </>
  )
}

export default App;