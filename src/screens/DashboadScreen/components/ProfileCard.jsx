import React from "react";
import { Card, Image } from "react-bootstrap";
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
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
      <p>Phone: +1234567890</p>
    </Card>
  );
};

export default ProfileCard;
