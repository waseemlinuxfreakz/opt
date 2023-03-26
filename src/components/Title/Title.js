import React from "react";
import "./Title.css";

const Title = (props) => {
  const classes = props?.className ? props?.className : "";
  return <h3 className={`title ${classes}`}>{props?.children}</h3>;
};

export default Title;
