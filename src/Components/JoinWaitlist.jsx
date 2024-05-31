import React from "react";
import headphone from "../assets/headphone.png";
import "./JoinWaitlist.css";
import { FiArrowRight } from "react-icons/fi";
import WaitlistReg from "./WaitlistReg";
import { LiaTimesSolid } from "react-icons/lia";

const JoinWaitlist = ({modalOpen}) => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #03363D, #0890A3)",
        marginBottom: "4rem",
      }}
      className="text-center waitlist-container"
    >
      <img
        src={headphone}
        alt="head phone user"
        className="img-fluid mx-auto"
      />
      <div className="card container mx-auto waitlist-card">
        <span className="text-center" style={{ color: "var(--dark-green)" }}>
          Join the waitlist
        </span>
        <h3
          className="text-center waitlist-header"
          style={{
            color: "#303642",
            fontFamily: "Aeonik-reg",
            fontWeight: "500",
          }}
        >
          Xheta - Empowering Minds, Transforming Future
        </h3>
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#waitlist"
        >
          <button
            className="btn btn-md px-3 waitlist-cta text-white"
            style={{
              backgroundColor: "var(--dark-green)",
              paddingBlock: "12px",
              fontFamily: "Aeonik-reg",
              fontSize: "18px",
              borderRadius: "8px",
            }}
            onClick={()=>modalOpen()}
          >
            Join the waitlist <FiArrowRight style={{ marginBottom: "2px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
