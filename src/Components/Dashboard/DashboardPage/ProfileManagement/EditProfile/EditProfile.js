import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
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
      profileEmail: currentUser.email,
    };

    axios
      .post("http://localhost:8000/profileImageUpload", data)
      .then((response) => {
        console.log(response.data);
        setUploadImgSuccessMsg(true);
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
        setError("Faild to update your profile or already exist");
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
        setError("Faild to update your profile or already exist");
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
        setError("password must be 6 character");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleImageSubmit}>
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
            required
          />
        </div>

        <button type="submit">Submit Image</button>
      </form>

      {/* name edit*/}
      <form onSubmit={handleNameSubmit}>
        <label htmlFor="inputUserName1" className="form-label">
          Enter new name
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
          <button className="popup-edit-save-btn">
            <i className="bi bi-check2-circle p-2"></i>
            Save
          </button>
        </div>
      </form>

      {/* email edit */}
      <div className="pb-5">
        <form onSubmit={handleEmailSubmit}>
          <label htmlFor="inputUserEmail1" className="form-label pt-2">
            Enter new email
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

            <button className="popup-edit-save-btn">
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
              Enter new password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              ref={passwordRef}
              placeholder="Type your new password"
            />
          </div>

          {/* <div className="mb-3"> */}
          <label htmlFor="passwordConfirm" className="form-label">
            Password Confirmation
          </label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              id="passwordConfirm"
              ref={passwordConfirmRef}
              placeholder="Confirm your password"
            />
            <button className="popup-edit-save-btn">
              <i className="bi bi-check2-circle p-2"></i>
              Save
            </button>
          </div>
        </form>
      </div>

      {loading && <strong>Loading...</strong>}
      {uploadImgSuccessMsg && <strong>Image submitted successfully..</strong>}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default EditProfile;
