import slack from "../assets/images/slack.png";
import github from "../assets/images/github.png";
import "./Social.css";

export default function Social() {
  return (
    <>
      <div className="social-container">
        <a id="slack-home" href="https://slack.com/">
          <img src={slack} alt="slack-icon"></img>
        </a>
        <a id="github-home" href="https://github.com/tjalani">
          <img src={github} alt="github-icon"></img>
        </a>
      </div>
    </>
  );
}
