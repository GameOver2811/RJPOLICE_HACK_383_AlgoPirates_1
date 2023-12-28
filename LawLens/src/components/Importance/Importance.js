import React from "react";
import "./Importance.css";
import art from "../../assets/Untitled_Artwork -1.png";
import { Container } from "react-bootstrap";

export default function Importance() {
  return (
    <section id="importance">
      <Container className="container">
        <img src={art} alt="not found" />
        <h1 className="title">
          Want to 
          <br /> file an FIR?
        </h1>
        <div
          className="first-left"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="370"
          data-aos-delay="10"
        >
          <h2 className="first-left-title">Step-01 :<br/> Visit the Nearest Police Station or File complaint online</h2>
          <p className="first-left-info">
          If you prefer a physical visit, go to the police station where the incident occurred or is under jurisdiction or Access the official police website or online complaint portal that facilitates the filing of FIRs.
          </p>
        </div>
        <div
          className="first-right"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="10"
          data-aos-duration="370"
        >
          <h2 className="first-right-title">Step-02 : <br/> Provide Your Details</h2>
          <div className="first-right-info">
          Furnish your personal details, including your name, address, contact number, and any other information requested by the police.
          </div>
        </div>
        <div
          className="second-left"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="370"
          data-aos-delay="10"
        >
          <h2 className="second-left-title">Step-03 : <br/> Get a Copy of the FIR & Follow Up! </h2>
          <p className="second-left-info">
          Ensure that you receive a copy of the FIR once it's registered.Take note of the FIR number assigned to your case. It will be useful for tracking the status of your complaint.
          </p>
        </div>
      </Container>
    </section>
  );
}
