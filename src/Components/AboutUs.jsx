import React from "react";
import operator from "../assets/operator.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="row mx-auto py-4 justify-content-between container g-3">
      <img src={operator} alt="avatar" className="img-fluid col-lg-6 col-md-6 col-sm-6" />
      <div className="col-lg-5 col-md-5 col-sm-5">
        <h2 className="header mb-3">About Us</h2>
        <p className="about-body">
          XHETA is not just an e-learning platform; it’s a revolution in
          education. We are dedicated to empowering students and professionals
          in all fields of all ages to unlock their full potential through
          accessible, interactive, and personalized learning experiences.
          With XHETA, education knows no boundaries, and every learner can
          thrive.
        </p>
        <p className='about-body'>
          XHETA offers a comprehensive suite of online courses, resources, and
          tools designed to cater to diverse learning styles and preferences.
          From interactive lectures and multimedia content to collaborative
          projects and assessments, we provide a dynamic and engaging learning
          environment that fosters curiosity, critical thinking, and lifelong
          learning.
        </p>
        <button className="about-btn btn btn-md py-3 mt-2 px-3">Get early access</button>
      </div>
    </section>
  );
};

export default AboutUs;
