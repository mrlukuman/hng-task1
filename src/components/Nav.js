import pageshare from "../assets/images/page-share.png";
import more from "../assets/images/more-default.png";
import "./Nav.css";
import { useState } from "react";

export default function Nav() {
  const [moreClicked, setMoreclicked] = useState(false);

  const handleOnClick = () => {
    setMoreclicked((prev) => (prev ? false : true));
  };

  const overlay = (
    <div className="overlay" onClick={handleOnClick}>
      <div>
        <img src={pageshare} alt="page-share-icon"></img>
      </div>
      <div>
        <p>Share</p>
      </div>
    </div>
  );

  return (
    <>
      <nav className="nav-icons">
        <div className="share-page">
          <a href="#share">
            <img src={pageshare} alt="page-share-icon"></img>
          </a>
        </div>
        <div className="more">
          <img src={more} alt="page-share-icon" onClick={handleOnClick}></img>
          {moreClicked && overlay}
        </div>
      </nav>
    </>
  );
}
