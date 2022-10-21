import React from "react";
import "./Button.css";

function Button(prop) {
  return (
    <a id="prop.key" className="button" href={prop.data.link}>
      <div>{prop.data.name}</div>
    </a>
  );
}

export default Button;
