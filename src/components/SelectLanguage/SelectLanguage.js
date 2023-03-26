import React from "react";
import Text from "../Text/Text";
import Title from "../Title/Title";
import googleTranslateImage from "./images/google-translate.png";
import arabic from "./images/arabic.png";
import english from "./images/english.png";
import "./SelectLanguage.css";
import { Link } from "react-router-dom";

const SelectLanguage = () => {
  return (
    <section className="select-language">
      <div className="select-language-content">
        <img src={googleTranslateImage} alt="" className="google-translate" />
        <Title className="text-20">Choose Your Preferred Language</Title>
        <Text>Please select your language</Text>

        <div className="select-languages">
          <ul>
            <li>
              <Link to="/login">
                <img src={arabic} alt="" />
                <span>العربية</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <img src={english} alt="" />
                <span>English</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SelectLanguage;
