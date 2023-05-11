import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../../Authentication/AuthContext/AuthContext";

const EditProfile = () => {
  const [image, setImage] = useState();
  const { currentUser, updateUserName, updatePassword, updateEmail } =
    useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [uploadImgSuccessMsg, setUploadImgSuccessMsg] = useState(false);
  const [profileData, setProfileData] = useState([]);

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

  //get profile image according to the email
  useEffect(() => {
    const fetchCustomerOrders = async () => {
      if (currentUser) {
        try {
          const response = await axios.get(
            `http://localhost:8000/getProfileImage?profileEmail=${currentUser.email}`
          );
          setProfileData(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchCustomerOrders();
  }, [currentUser]);

  //image submission in the backend
  const handleImageSubmit = (e) => {
    e.preventDefault();
    const data = {
      profileImage: image,
      profileEmail: currentUser?.email,
    };

    axios
      .post(
        `http://localhost:8000/profileImageUpload?email=${currentUser?.email}`,
        data,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setUploadImgSuccessMsg(true);
        setTimeout(() => {
          setUploadImgSuccessMsg(false);
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        // Handle the error
      });
  };

  //submission for Name
  const handleNameSubmit = async (e) => {
    e.preventDefault();

    const promisesForName = [];
    setLoading(true);

    if (nameRef.current.value) {
      promisesForName.push(updateUserName(nameRef.current.value));
    }

    Promise.all(promisesForName)
      .then(() => {
        history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setError("Failed to update your profile or already exist");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // submission for Email
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const promisesForEmail = [];
    setLoading(true);
    if (emailRef.current.value !== currentUser.email) {
      promisesForEmail.push(updateEmail(emailRef.current.value));
    }

    Promise.all(promisesForEmail)
      .then(() => {
        history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setError("Failed to update your profile or already exist");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // submission for password
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match!");
    }

    const promisesForPassword = [];
    setLoading(true);

    if (passwordRef.current.value) {
      promisesForPassword.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promisesForPassword)
      .then(() => {
        history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setError("Password must be 6 character");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //delete profile image from data base
  const handlePreviousImgDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/deleteProfileImage/${id}?email=${currentUser?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
          },
        }
      );
      const data = response.data;
      if (data) {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  return (
    <div className="container my-5">
      <Link to="/profile" className="btn MyBtn">
        <i className="bi bi-chevron-double-left"></i> Back
      </Link>
      {profileData.length ? (
        <button onClick={() => handlePreviousImgDelete(profileData[0]?._id)}>
          Delete previous image
        </button>
      ) : (
        <form onSubmit={handleImageSubmit} className="upload_image_section">
          <div>
            <label htmlFor="image-upload">
              {image ? (
                <img
                  src={image}
                  alt="uploaded profile"
                  className="uploaded_image"
                />
              ) : (
                <>
                  <div className="image-upload-circle">
                    <i className="bi bi-upload"></i>
                  </div>
                </>
              )}
            </label>
            <input
              id="image-upload"
              className="ProfilePicInput"
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              maxLength="20480"
              onChange={handleChange}
              required
            />
          </div>
          <div className="image_note">
            <p>NB:</p>
            <p>Image Size Max: 20kb</p>
            <p>width: 150px, height: 150px.</p>
          </div>
          <button type="submit" className="btn MyBtn">
            Save Image
          </button>
        </form>
      )}
      <br />
      {/* name edit*/}
      <form onSubmit={handleNameSubmit}>
        <label htmlFor="inputUserName1" className="form-label">
          <strong>Enter new name</strong>
        </label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            ref={nameRef}
            required
            id="inputUserName1"
            name="name"
            placeholder="Type your new name"
          />
          <button className="btn MyBtn">
            <i className="bi bi-check2-circle p-2"></i>
            Save
          </button>
        </div>
      </form>
      <br />
      {/* email edit */}
      <div className="pb-5">
        <form onSubmit={handleEmailSubmit}>
          <label htmlFor="inputUserEmail1" className="form-label pt-2">
            <strong>Enter new email</strong>
          </label>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              ref={emailRef}
              required
              id="inputUserEmail1"
              name="email"
              placeholder="Type your new email"
            />

            <button className="btn MyBtn">
              <i className="bi bi-check2-circle p-2"></i>
              Save
            </button>
          </div>
        </form>
      </div>

      {/* password edit  */}
      <div className="pb-5">
        <form onSubmit={handlePasswordSubmit}>
          <div className="mb-3">
            <label htmlFor="inputPassword1" className="form-label pt-2">
              <strong>Enter new password</strong>
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              ref={passwordRef}
              placeholder="Type your new password"
            />
          </div>
          <br />
          {/* <div className="mb-3"> */}
          <label htmlFor="passwordConfirm" className="form-label">
            <strong> Password Confirmation</strong>
          </label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              id="passwordConfirm"
              ref={passwordConfirmRef}
              placeholder="Confirm your password"
            />
            <button className="btn MyBtn">
              <i className="bi bi-check2-circle p-2"></i>
              Save
            </button>
          </div>
        </form>
      </div>

      {loading && <strong className="successful_msg">Uploading...</strong>}
      {uploadImgSuccessMsg && (
        <strong className="successful_msg">
          Image submitted successfully..
        </strong>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default EditProfile;
