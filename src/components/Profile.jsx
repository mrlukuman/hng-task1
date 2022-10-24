import profilePic from "./profile.jpg";
import "./Profile.css";

const Profile = function (prop) {
  return (
    <>
      <img src={profilePic} alt="profile pic"></img>
    </>
  );
};

export default Profile;
