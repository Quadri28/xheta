import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import CoreValues from "./Components/CoreValues";
import Gain from "./Components/Gain";
import JoinWaitlist from "./Components/JoinWaitlist";
import Hero from "./Components/Hero";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const modalIsOpen = () => {
    setOpenModal(true);
  };
  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalIsClosed = () => {
    setOpenModal(false);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Navbar  modalOpen={modalOpen}/>
      <Hero
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        setIsOpen={setIsOpen}
        copied={copied}
        setOpenModal={setOpenModal}
       modalIsClosed={modalIsClosed}
        modalOpen={modalOpen}
        modalIsOpen={modalIsOpen}
      />
      <AboutUs modalOpen={modalOpen}/>
      <CoreValues />
      <Gain />
      <JoinWaitlist modalOpen={modalOpen}/>
      <Footer />
    </>
  );
}

export default App;
