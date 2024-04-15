import React from "react";
import amazon from "../assets/amazon.png";
import zapier from "../assets/zapier.png";
import netflix from "../assets/netflix.png";
import adobe from "../assets/adobe.png";
import zoom from "../assets/zoom.png";
import notion from "../assets/notion.png";
import spotify from "../assets/spotify.png";
import "./Hero.css";
import glassy from '../assets/glassy.png'
import sepstar from '../assets/sepstar.png'
import {FiArrowRight} from 'react-icons/fi'
import WaitlistReg from "./WaitlistReg";

const Hero = () => {
  return (
    <>
    <div className="hero-section py-5 px-3">
      <div className="row container mx-auto justify-content-between 
      hero-container align-items-center g-3" style={{marginBottom:'5rem'}}>
        <div className="col-md-6">
          <h3 className="hero-header">Unlock Your Learning and Creative Potential</h3>
          <p className="hero-para">
            Xheta focus on empowering minds and transforming futures. Join the
            waitlist of learning from industry expert and enhance your skill.
          </p>
      <div data-bs-toggle="modal" data-bs-target="#waitlist">
          <button className="btn btn-lg px-4 text-white"
           style={{backgroundColor:'var(--dark-green)', 
           paddingBlock:'14px', fontSize:'18px', fontWeight:'500', borderRadius:'8px'}}>
            Join the waitlist <FiArrowRight style={{marginBottom:'2px'}}/></button>
            </div>
        </div>
        <div className="col-md-5" style={{position:'relative'}}>
            <img src={sepstar} alt="avatar-star" className="img-fluid sepstar-top"/>
            <img src={glassy} alt="hero-img" className="img-fluid"/>
            <img src={sepstar} alt="avatar-star" className="img-fluid sepstar-bottom"/>
        </div>
      </div>
      </div>
      <section
        className="logos-container mx-auto container py-4 rounded-2"
        style={{ boxShadow: "5px 5px 5px 5px #03363D0D" }}
      >
        <div className="bg-white">
          <img src={zapier} alt="zapier-logo" className="img-fluid" />
        </div>
        <div className="bg-white line ">
          <img src={spotify} alt="zapier-logo" className="img-fluid" />
        </div>
        <div className="bg-white line ">
          <img src={zoom} alt="zapier-logo" className="img-fluid" />
        </div>
        <div className="bg-white line ">
          <img src={amazon} alt="zapier-logo" className="img-fluid" />
        </div>
        <div className="bg-white line ">
          <img src={adobe} alt="zapier-logo" className="img-fluid" />
        </div>
        <div className="bg-white line ">
          <img src={notion} alt="zapier-logo" className="img-fluid" />
        </div>
        <div className="bg-white line ">
          <img src={netflix} alt="zapier-logo" className="img-fluid" />
        </div>
        <div
        className="modal fade"
        id="waitlist"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog mt-4 py-4" role="document">
          <div className="modal-content">
            <WaitlistReg/>
            </div>
            </div>
            </div>
      </section>
</>
  );
};

export default Hero;
