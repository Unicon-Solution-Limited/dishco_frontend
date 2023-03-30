import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../../../Authentication/AuthContext/AuthContext";

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const { currentUser } = useAuth();

  const handleChange = async (event) => {
    setLoading(true);
    const imageFile = event.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    // your folder name
    data.append("upload_preset", "dishcofood");

    try {
      const result = await axios.post(
        // aykhne [Your Cloudinary Cloud Name] baki link thik thak thakbe
        "https://api.cloudinary.com/v1_1/dnz6zg4on/upload",
        data
      );
      setImage(result.data.url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="image-upload-circle">
        <label htmlFor="image-upload" className="image-upload-label">
          {image ? (
            <img
              src={image}
              alt="uploaded profile"
              className="uploaded-image"
            />
          ) : (
            <div className="placeholder-image">
              <i className="bi bi-cloud-arrow-up-fill upload-icon"></i>
            </div>
          )}
        </label>
        <input
          id="image-upload"
          className="ProfilePicInput"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      {loading && <strong>Loading...</strong>}
    </div>
  );
};

export default EditProfile;
