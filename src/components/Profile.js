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

      <div className="profile__image">
        <img className="personal-img" alt="profile" src={profile}></img>
        <div className="dark-overlay">
          <img className="camera-img" src={camera} alt="camera-img"></img>
        </div>
      </div>
      <div className="profile__name">
        <strong>Tajudeen Lukuman Aleru</strong>
      </div>
      <div className="profile__links">
        <div id="twitter" className="twitter-profile">
          <FaTwitter className="twitter-icon"></FaTwitter>
          <a href="https://twitter.com/tj_alani">@tjalani</a>
        </div>
        <div id="slack" className="slack-profile">
          <FaSlack className="slack-icon"></FaSlack>
          <a href="https://twitter.com/tj_alani">@tjalani</a>
        </div>
      </div>
    </>
  );
};
