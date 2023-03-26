import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Text from "../Text/Text";
import Title from "../Title/Title";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="login">
      <div className="login-content">
        <img src={logo} alt="" className="logo" />
        <span className="border-middle"></span>
        <Title>Login!</Title>
        <div className="single-input">
          <input type="text" placeholder="05XXXXXXXX" />
        </div>
        <Text>
          A 4 digit OTP will be sent via SMS to verify your phone number!
        </Text>
        <button onClick={() => navigate("/otp")}> Send Code</button>
      </div>
    </section>
  );
};

export default Login;
