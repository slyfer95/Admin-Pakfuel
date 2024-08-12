import React, { useEffect, useState, useCallback } from "react";
import { Card, Image, Spinner, Button } from "react-bootstrap";
import profileImage from "../../../assets/images/profile.png";
import { COLORS } from "../../../constants/constants";
import { FaCamera } from "react-icons/fa";
import adminApis from "../../../api/admin";
import useApi from "../../../hooks/useApi";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropImage"; // You need to create this utility function

const ProfileCard = ({ user }) => {
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
        backgroundColor: COLORS.tertiary,
        color: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <Image
          src={profile || user.imageUrl || profileImage}
          alt="Profile"
          style={{ width: "50%", borderRadius: "50%" }}
        />

        <div
          style={{
            padding: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <FaCamera size={30} style={{ color: "#fff" }} />
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
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            zIndex: 1000,
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
          <Button
            variant="success"
            style={{
              zIndex: 10,
              position: "absolute",
              bottom: 20,
              right: 20,
            }}
            onClick={showCroppedImage}
          >
            Done
          </Button>
          <Button
            variant="danger"
            style={{
              zIndex: 10,
              position: "absolute",
              bottom: 20,
              right: 100,
            }}
            onClick={() => {
              setImage(null);
              setShowCropper(false);
            }}
          >
            Cancel
          </Button>
        </div>
      )}
      <h3>{user ? user?.name : <h4>Loading...</h4>}</h3>
      <p>Role: {user ? user?.role : <Spinner />}</p>
      {loading && <Spinner />}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Card>
  );
};

export default ProfileCard;
