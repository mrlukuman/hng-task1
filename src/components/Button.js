import React from "react";
import "./Button.css";
import shareicon from "../assets/images/share-icon.png";

function Button(prop) {
  return (
    <div className="tip button">
      <a id="prop.key" className="tip" href={prop.data.link}>
        <div>{prop.data.name}</div>
        <span>{prop.data.subtext}</span>

        <div className="link-share-icon">
          <img src={shareicon} alt="share-icon"></img>
        </div>
      </a>
    </div>
  );
}

export default Button;
