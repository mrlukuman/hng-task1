import React from "react";
import profile from "../assets/images/profile.jpg";
import camera from "../assets/images/camera.png";
import "./Profile.css";
import { FaTwitter, FaSlack } from "react-icons/fa";
import Nav from "./Nav";

export const Profile = () => {
  return (
    <>
      <div className="profile-container"></div>
      <Nav></Nav>

      <section className="profile">
        <div className="profile__image">
          <img className="personal-img" alt="profile" src={profile}></img>
          <div className="dark-overlay">
            <img className="camera-img" src={camera} alt="camera-img"></img>
          </div>
        </div>
        <div id="twitter" className="profile__name">
          <a href="https://twitter.com/tj_alani">
            <strong>tj_alani</strong>
          </a>
        </div>
        <div id="slack" className="slack__name">
          <strong>tj-alani</strong>
        </div>
        <div className="profile__links">
          <div id="twitter-profile" className="twitter-profile">
            <FaTwitter className="twitter-icon"></FaTwitter>
            <a href="https://twitter.com/tj_alani">@tj_alani</a>
          </div>
          <div id="slack-profile" className="slack-profile">
            <FaSlack className="slack-icon"></FaSlack>
            <a href="https://slack.com/">@tj-alani</a>
          </div>
        </div>
      </section>
    </>
  );
};
