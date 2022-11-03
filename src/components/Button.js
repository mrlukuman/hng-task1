import React from "react";
import "./Button.css";
import shareicon from "../assets/images/share-icon.png";

function Button(prop) {
  return (
    <a id={prop.data.id} className="tip button " href={prop.data.link}>
      {prop.data.name}
      <span>{prop.data.subtext}</span>
      <div className="link-share-icon">
        <img src={shareicon} alt="share-icon"></img>
      </div>
    </a>
  );
}

export default Button;
