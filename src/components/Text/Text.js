import React from "react";
import "./Text.css";

const Text = (props) => {
  const classes = props?.className ? props?.className : "";
  return <p className={`text ${classes}`}>{props.children}</p>;
};

export default Text;
