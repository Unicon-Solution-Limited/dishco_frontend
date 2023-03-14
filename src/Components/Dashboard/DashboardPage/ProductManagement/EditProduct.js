import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductManagement.css";

const EditProduct = () => {
  const { editPdId } = useParams();
  const [message, setMessage] = useState(false);
  const [photo, setPhoto] = useState("");
  const foodNameRef = useRef();
  const foodCodeRef = useRef();
  const stockRef = useRef();
  const descriptionRef = useRef();
  const [selectedFood, setSelectedFood] = useState([]);
  const [addons, setAddons] = useState([{ addonName: "", addonPrice: "" }]);

  // Handle Image Upload (image upload by api in cloudenery)
  const imageUploadHandler = async (e) => {
    // setLoading(true);
    const imageFile = e.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    //your folder name
    data.append("upload_preset", "dishcofood");
    try {
      const result = await axios.post(
        //aykhne [Your Cloudinary Cloud Name] baki link thik thak thakbe
        "https://api.cloudinary.com/v1_1/dnz6zg4on/upload",
        data
      );
      setPhoto(result?.data?.url);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  //img submit handle
  const editHandleImgSubmit = (e) => {
    e.preventDefault();
    const editImg = {
      image: photo,
    };

    axios
      .patch(`http://localhost:8000/updateImage/${editPdId}`, editImg, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data) {
          console.log("suceesfully added");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setMessage("Your Product Udpade Successfully");
  };

  //Product name update
  const handleFoodNameSubmit = (e) => {
    e.preventDefault();
    const editName = {
      name: foodNameRef?.current?.value,
    };

    axios
      .patch(`http://localhost:8000/updateName/${editPdId}`, editName, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data) {
          foodNameRef.current.value = "";
          console.log("suceesfully added");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setMessage("Your Product Udpade Successfully");
  };

  //product code update
  const handleFoodCodeSubmit = (e) => {
    e.preventDefault();
    const editCode = {
      foodCode: foodCodeRef.current.value,
    };

    axios
      .patch(`http://localhost:8000/updateCode/${editPdId}`, editCode, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data) {
          foodCodeRef.current.value = "";
          console.log("suceesfully added");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setMessage("Your Product Udpade Successfully");
  };

  //Product Stock update
  const handleFoodStockSubmit = (e) => {
    e.preventDefault();
    const editStock = {
      stock: stockRef.current.value,
    };

    axios
      .patch(`http://localhost:8000/updateStock/${editPdId}`, editStock, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data) {
          stockRef.current.value = "";
          console.log("suceesfully added");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setMessage("Your Product Udpade Successfully");
  };

  //Description update
  const handleFoodDesSubmit = (e) => {
    e.preventDefault();
    const editDescription = {
      foodDescription: descriptionRef.current.value,
    };

    axios
      .patch(
        `http://localhost:8000/updateDescription/${editPdId}`,
        editDescription,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data) {
          descriptionRef.current.value = "";
          console.log("suceesfully added");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setMessage("Your Product Udpade Successfully");
  };

  //get selected food for update the addons name, price and food price with size
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/getFoodForEdit?foodEditId=${editPdId}`
        );
        const data = await response.json();
        setSelectedFood(data);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchFood();
  }, [editPdId]);

  console.log(selectedFood, "this is selected food");

  //remove addons
  const handleRemoveAddon = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://localhost:8000/deleteAddons/${id}`
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

  //dynamic addons adding
  const handleAddonsChange = (event, index) => {
    const newAddons = [...addons];
    newAddons[index][event.target.name] = event.target.value;
    setAddons(newAddons);
  };

  const handleAddaddons = () => {
    setAddons([...addons, { addonName: "", addonPrice: "" }]);
  };

  const handleRemoveAddons = (index) => {
    setAddons(addons.filter((s, i) => i !== index));
  };

  //now submit funtion update the addons to the backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    const allData = {
      addonsItem: addons,
    };
    // update the new adon info at mongodb
    axios
      .patch(`http://localhost:8000/updateNewAddons/${editPdId}`, allData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data) {
          stockRef.current.value = "";
          console.log("suceesfully added");
          if (response.data) {
            setAddons([{ addonName: "", addonPrice: "" }]);
            // window.location.reload();
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setMessage("Your Product Udpade Successfully");
  };

  return (
    <section className="container py-5">
      <Link to="/allProduct" className="btn MyBtn">
        <i className="bi bi-chevron-double-left"></i> Back
      </Link>

      <div className="edit_form my-5 row">
        <form className="col-6 mb-3" onSubmit={editHandleImgSubmit}>
          <label for="exampleInputImage" className="form-label">
            <strong>Product Image: </strong>
          </label>
          <div className="d-flex">
            <input
              type="file"
              className="form-control editInput"
              id="exampleInputImage"
              onChange={imageUploadHandler}
            />
            <button type="submit" className="btn MyBtn">
              <i className="bi bi-check2-square"></i>
            </button>
          </div>
        </form>

        <form className="col-6 mb-3" onSubmit={handleFoodNameSubmit}>
          <label for="exampleInputText" className="form-label">
            <strong>Product Name: </strong>
          </label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control editInput"
              id="exampleInputText"
              placeholder="DishCo Special Pizza"
              ref={foodNameRef}
            />
            <button type="submit" className="btn MyBtn">
              <i className="bi bi-check2-square"></i>
            </button>
          </div>
        </form>

        <form className="mb-3 col-6" onSubmit={handleFoodCodeSubmit}>
          <label for="exampleInputText" className="form-label">
            <strong>Product Code: </strong>
          </label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control editInput"
              id="exampleInputText"
              placeholder="DSP-20P"
              ref={foodCodeRef}
            />
            <button type="submit" className="btn MyBtn">
              <i className="bi bi-check2-square"></i>
            </button>
          </div>
        </form>

        <form className="col-6 mb-3" onSubmit={handleFoodStockSubmit}>
          <label htmlFor="name" className="form-label">
            <strong>Product Stock</strong>
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            ref={stockRef}
          >
            <option value="Stock_In">Stock In</option>
            <option value="Stock_Out">Stock Out</option>
          </select>
          <button className="btn MyBtn">Update</button>
        </form>

        <form className="col-12 mb-4" onSubmit={handleFoodDesSubmit}>
          <label htmlFor="description" className="form-label">
            <strong>Food Description</strong>
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            ref={descriptionRef}
          />
          <button className="btn MyBtn">Update</button>
        </form>

        {/* addons */}
        <div className="my-5 col-6">
          <form onSubmit={handleSubmit}>
            {addons.map((size, index) => (
              <div key={index}>
                <label>
                  Addons Name:
                  <input
                    type="text"
                    name="addonName"
                    value={size.addonName}
                    onChange={(e) => handleAddonsChange(e, index)}
                    className="form-control"
                    placeholder="Ex. Extra Cheese"
                  />
                </label>
                ---
                <label>
                  Addons Price:
                  <input
                    type="number"
                    name="addonPrice"
                    value={size.addonPrice}
                    onChange={(e) => handleAddonsChange(e, index)}
                    className="form-control"
                    placeholder="30 tk."
                  />
                </label>
                <button
                  type="button"
                  onClick={() => handleRemoveAddons(index)}
                  className="btn btn-danger"
                >
                  <i className="bi bi-trash"></i>
                </button>
                <br />
              </div>
            ))}

            <button
              type="button"
              className="btn btn-success mt-2"
              onClick={handleAddaddons}
            >
              Addons Add
            </button>
            <button className="btn btn-success mt-2" type="submit">
              submit
            </button>
          </form>
          <button
            className="btn btn-success mt-2"
            onClick={() => handleRemoveAddon(editPdId)}
          >
            DELETE PREVIOUS ADDONS
          </button>
        </div>
        {/* addons */}
      </div>

      <h3 style={{ color: "green", textAlign: "center" }}>{message}</h3>
    </section>
  );
};

export default EditProduct;
