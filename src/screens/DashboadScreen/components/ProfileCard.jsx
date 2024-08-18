import React, { useEffect, useState, useCallback } from "react";
import { Card, Image, Button } from "react-bootstrap";
import profileImage from "../../../assets/images/profile.png";
import { COLORS } from "../../../constants/constants";
import { FaCamera } from "react-icons/fa";
import adminApis from "../../../api/admin";
import useApi from "../../../hooks/useApi";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropImage";
import { AppContext } from "../../../context/context";
import { useContext } from "react";

const ProfileCard = ({ user }) => {
  const { user: appUser } = useContext(AppContext);
  const [image, setImage] = useState("");
  const [profile, setProfile] = useState(user.imageUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const uploadImageApi = useApi(adminApis.uploadImage);

  const uploadImage = async (cropped) => {
    setLoading(true);
    setError(null);
    try {
      await uploadImageApi.request(cropped);
      setProfile(cropped);
    } catch (e) {
      setError(e.message || "Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (uploadImageApi.data) {
      console.log("Image uploaded successfully", uploadImageApi.data);
    }
    if (uploadImageApi.error) {
      console.error("Failed to upload image", uploadImageApi.error);
      setError(uploadImageApi.error.message || "Failed to upload image");
    }
  }, [uploadImageApi.data, uploadImageApi.error]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setFileName(file.name);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedBlob = await getCroppedImg(image, croppedAreaPixels);
      const reader = new FileReader();
      reader.readAsDataURL(croppedBlob);
      reader.onloadend = () => {
        const base64data = reader.result;
        setImage(base64data);
        uploadImage(base64data);
        setShowCropper(false);
      };
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, image, fileName]);

  return (
    <Card
      style={{
        color: "#000",
        padding: "2rem",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        alignItems: "center",
        fontFamily: "'Roboto', sans-serif",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
        backdropFilter: "blur(5px)",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "rgba(0, 0, 128, 0.4)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          right: "-30px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(127, 0, 255, 0.4)",
          zIndex: -1,
        }}
      />

      <div style={{ position: "relative", display: "inline-block" }}>
        <Image
          src={profile || appUser?.imageUrl || profileImage}
          alt="Profile"
          style={{
            width: "60%",
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            elevation: "20px",
          }}
        />

        <div
          style={{
            padding: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <FaCamera size={30} style={{ color: COLORS.primary }} />
        </div>
      </div>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {showCropper && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "calc(100% - 100px)",
              position: "relative",
            }}
          >
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Button
              variant="success"
              style={{
                marginRight: "10px",
                fontFamily: "'Roboto', sans-serif",
              }}
              onClick={showCroppedImage}
            >
              Done
            </Button>
            <Button
              variant="danger"
              style={{
                fontFamily: "'Roboto', sans-serif",
              }}
              onClick={() => {
                setImage(null);
                setShowCropper(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
      <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
        {user?.name || "Loading..."}
      </h3>
      <p style={{ fontFamily: "'Open Sans', sans-serif" }}>
        Role: {user?.role || "Loading..."}
      </p>

      {error && (
        <p style={{ color: "red", fontFamily: "'Open Sans', sans-serif" }}>
          {error}
        </p>
      )}
    </Card>
  );
};

export default ProfileCard;
