import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import CoreValues from './Components/CoreValues';
import Gain from './Components/Gain';
import JoinWaitlist from './Components/JoinWaitlist';
import Hero from './Components/Hero';

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
     <AboutUs/>
     <CoreValues/>
     <Gain/>
     <JoinWaitlist/>
     <Footer/>
    </>
  )
}

export default App
