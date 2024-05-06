import React from "react";
import arrow from "../assets/arrow.png";
import sparkles from "../assets/sparkles.png";
import users from "../assets/users.png";
import h from "../assets/h.png";
const Gain = () => {
  return (
    <div style={{ backgroundColor: "#FAFEFE", paddingBlock: "4rem" }}>
      <div className="container">
        <h4
          style={{
            fontFamily: "Aeonik-reg",
            fontWeight: "500",
            color: "var(--dark-green)",
          }}
          className="text-center"
        >
          Here’s what you stand to gain, when you join the waitlist
        </h4>
        <p
          className="text-center"
          style={{
            fontFamily: "Aeonik-sm",
            fontWeight: "400",
            color: "#303642",
          }}
        >
          At XHETA, our Vision is to revolutionize education by harnessing the
          power of technology to empower learners worldwide, fostering a culture
          of lifelong learning and personal growth.
        </p>
      </div>
      <div className="row justify-content-center container mx-auto mt-4 gap-2 g-3">
        <div className="d-flex gap-3 align-items-center col-md-5">
          <button
            style={{
              backgroundColor: "#2D575D",
              borderRadius: "5px",
              width:'100px', height:'50px',
              border:'none'
            }}
           
          >
            <img src={h} alt="h-icon" className="img-fluid fs-5" />
          </button>
          <div className="row ">
            <span
              style={{
                fontWeight: "700",
                fontSize: "18px",
                color: "#1D1D1D",
                fontFamily: "Aeonik-reg",
              }}
            >
              Early Access
            </span>
            <span style={{fontSize:'15px'}}>
              Be among the first to experience our innovative educational
              platform as soon as it launches.
            </span>
          </div>
        </div>
        <div className="d-flex gap-3 align-items-center col-md-5">
          <button
            style={{
              backgroundColor: "#2D575D",
              borderRadius: "5px",
              width:'100px', height:'50px',
              border:'none'
            }}
           
          >
            <img src={arrow} alt="h-icon" className="img-fluid" height='30px'/>
          </button>
          <div className="row ">
            <span
              style={{
                fontWeight: "700",
                fontSize: "18px",
                color: "#1d1d1d",
                fontFamily: "Aeonik-reg",
              }}
            >
              Sneak Peeks
            </span>
            <span style={{fontSize:'15px'}}>
              Get exclusive sneak peeks and insights into our platform's
              features and content before anyone else.
            </span>
          </div>
        </div>
        <div className="d-flex gap-3 align-items-center col-md-5">
          <button
            style={{
              backgroundColor: "#2D575D",
              borderRadius: "5px",
              width:'130px', height:'50px',
              border:'none'
            }}
          >
            <img src={users} alt="h-icon" className="img-fluid" height='30px'/>
          </button>
          <div className="row">
            <span
              style={{
                fontWeight: "700",
                fontSize: "18px",
                color: "#1d1d1d",
                fontFamily: "Aeonik-reg",
              }}
            >
              Community Connections
            </span>
            <span style={{fontSize:'15px'}}>
              Join a vibrant community of learners, educators, and enthusiasts
              to collaborate, share insights, and grow together.
            </span>
          </div>
        </div>
        <div className="d-flex gap-3 align-items-center col-md-5">
          <button
            style={{
              backgroundColor: "#2D575D",
              borderRadius: "5px",
              width:'100px', height:'50px',
              border:'none'
            }}
           
          >
            <img src={sparkles} alt="h-icon" className="img-fluid fs-5" />
          </button>
          <div className="row">
            <span
              style={{
                fontWeight: "700",
                fontSize: "18px",
                color: "#1d1d1d",
                fontFamily: "Aeonik-reg",
              }}
            >
              Special Offers
            </span>
            <span style={{fontSize:'15px'}}>
              Enjoy special offers, discounts, and bonuses reserved only for our
              waitlist members on Xheta.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gain;
