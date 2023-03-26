import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Text from "../Text/Text";
import Title from "../Title/Title";
import "./OTP.css";

const OTP = () => {
  return (
    <section className="otp">
      <div className="otp-content">
        <img src={logo} alt="Logo" className="logo" />
        <span className="border-middle"></span>
        <Title>OTP Verification</Title>
        <Text>
          Enter the OTP you received on <strong>0557008722</strong>
        </Text>
        <div className="single-link">
          <Link to="/login">Click here to change phone number</Link>
        </div>
        <div className="otp-form">
          <input type="text" id="otp-1" />
          <input type="text" id="otp-2" />
          <input type="text" id="otp-3" />
          <input type="text" id="otp-4" />
        </div>

        <button className="resend-otp">Resend OTP</button>
      </div>
    </section>
  );
};

export default OTP;
