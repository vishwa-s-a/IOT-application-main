import React from 'react'
import Home from "./Home";
import Doctor from "../src/Components/SignIn/Doctor"
import { Route, Routes } from "react-router-dom";
import Patient from './Components/SignIn/Patient';
import DoctorDashboard from './Components/Dashboard/DoctorDashboard';
import PatientDashboard from './Components/Dashboard/PatientDashboard';
const App = () =>{
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/signIn-d' element={<Doctor/>} /> 
        <Route path='/signIn-p' element={<Patient/>} />
        <Route path='/doctor/dashboard' element={<DoctorDashboard/>}/>
        <Route path='/patient/dashboard' element={<PatientDashboard/>}/>
      </Routes>
    

    </>
  )
}

export default App;