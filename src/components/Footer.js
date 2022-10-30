import "./Footer.css";
import zuri from "../assets/images/ZuriInternship_Logo.png";
import i4g from "../assets/images/I4G.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="horizontal-line"></div>
        <div className="footer">
          <div>
            <img src={zuri} alt="zuri-internship-logo"></img>
          </div>
          <p>HNG Internship 9 Frontend Task</p>
          <div>
            <img src={i4g} alt="i4g-logo"></img>
          </div>
        </div>
      </footer>
    </>
  );
}
