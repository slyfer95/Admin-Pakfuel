import React from "react";
import { Card, Image, Spinner } from "react-bootstrap";
import profileImage from "../../../assets/images/profile.png";
import { COLORS } from "../../../constants/constants";

const ProfileCard = ({ user }) => {
  return (
    <Card
      style={{
        backgroundColor: COLORS.tertiary,
        color: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={profileImage}
        alt="Profile"
        style={{ width: "50%", borderRadius: "50%" }}
      />
      <h3>{user ? user?.name : <h4>Loading...</h4>}</h3>
      <p>Role: {user ? user?.role : <Spinner />}</p>
      {/* <p></p> */}
    </Card>
  );
};

export default ProfileCard;
