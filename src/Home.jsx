import React from "react";
import "./App.css";
import Navbar from "./Components/Home/Navbar.jsx";
import Body1 from "./Components/Home/Body1.jsx";
import Feature from "./Components/Home/Feature.jsx";
import Body2 from "./Components/Home/Body2.jsx";
import Body3 from "./Components/Home/Body3.jsx";
import Testimonials from "./Components/Home/Testimonials.jsx";
import Team from "./Components/Home/Team.jsx";
import Body4 from "./Components/Home/Body4.jsx";
import Footer from "./Components/Home/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Body1 />
        <Feature />
        <Body2 />
        <Body3 />
        <Testimonials />
        <Team />
        <Body4 />
        <Footer />
      </div>
    </>
  );
}

export default App;
