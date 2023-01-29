import React, { useRef, useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState();
  const nameRef = useRef();
  const foodCodeRef = useRef();
  const categoriesRef = useRef();
  const subCategoriesRef = useRef();
  const childCategoriesRef = useRef();
  const [addons, setAddons] = useState([{ addonName: "", addonPrice: "" }]);
  const [sizePrice, setSizePrice] = useState([{ size: "", price: "" }]);
  const [selectCategoriesOption, setSelectCategoriesOption] = useState("");
  const [selectSubCategoriesOption, setSelectSubCategoriesOption] =
    useState("");

  //addons
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

  //size and price daynamic
  const handleSizePriceChange = (event, index) => {
    const newSizePrice = [...sizePrice];
    newSizePrice[index][event.target.name] = event.target.value;
    setSizePrice(newSizePrice);
  };

  const handleAddSizePrice = () => {
    setSizePrice([...sizePrice, { size: "", price: "" }]);
  };

  const handleRemoveSizePrice = (index) => {
    setSizePrice(sizePrice.filter((s, i) => i !== index));
  };

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
      console.log(result?.data?.url);
      setPhoto(result?.data?.url);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //submit funtion
  const handleSubmit = (event) => {
    event.preventDefault();
    const allData = {
      Image: photo,
      name: nameRef.current.value,
      foodCode: foodCodeRef.current.value,
      categories: categoriesRef.current.value,
      subCategories: subCategoriesRef.current.value,
      childCategories: childCategoriesRef.current.value,
      addonsItem: addons,
      sizePriceItem: sizePrice,
    };
    console.log(allData);
    setSizePrice([{ size: "", price: "" }]);
    setAddons([{ addonName: "", addonPrice: "" }]);
  };

  //dainamic select option according to the categories
  const handleSelectCategoriesOption = (e) => {
    setSelectCategoriesOption(e.target.value);
  };
  const handleSubCategoriesOption = (e) => {
    setSelectSubCategoriesOption(e.target.value);
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="img" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="img"
            onChange={imageUploadHandler}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" ref={nameRef} />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Food Code
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            ref={foodCodeRef}
          />
        </div>

        <div className="mb-4">
          <div>
            <label htmlFor="categories" className="form-label">
              Categories
            </label>
          </div>
          <div>
            <select
              id="categories"
              name="categories"
              className="input-group form-select"
              ref={categoriesRef}
              onClick={handleSelectCategoriesOption}
            >
              <option value="">Choose Categories</option>
              <option value="Appetizer & Rice">Appetizer & Rice </option>
              <option value="Platter">Platter</option>
              <option value="Cheapo Box">Cheapo Box</option>
              <option value="Cuisines">Cuisines</option>
              <option value="Steak">Steak</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Dessert">Dessert</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
        </div>
        {/* sub categories */}
        <div className="mb-4">
          <div>
            <label htmlFor="sub_categories" className="form-label">
              Sub-Categories
            </label>
          </div>
          <select
            id="sub_categories"
            name="sub_categories"
            className="input-group form-select"
            ref={subCategoriesRef}
            onClick={handleSubCategoriesOption}
          >
            {selectCategoriesOption === "Appetizer & Rice" && (
              <>
                <option value="">Choose</option>
                <option value="Appetizer">Appetizer</option>
                <option value="rice Cuisine">rice Cuisine</option>
              </>
            )}

            {selectCategoriesOption === "Platter" && (
              <>
                <option value="">Choose</option>
                <option value="DishCo Platter">DishCo Platter</option>
              </>
            )}

            {selectCategoriesOption === "Cheapo Box" && (
              <>
                <option value="">Choose</option>
                <option value="Meat Box">Meat Box</option>
                <option value="Rice Bowl">Rice Bowl</option>
                <option value="Platter Cuisine"></option>
              </>
            )}

            {selectCategoriesOption === "Cuisines" && (
              <>
                <option value="">Choose</option>
                <option value="Indian Cuisines">Indian Cuisines</option>
                <option value="Japanese Cuisines">Japanese Cuisines</option>
                <option value="Korean Cuisines">Korean Cuisines</option>
                <option value="Chinese Cuisines">Chinese Cuisines</option>
              </>
            )}
            {selectCategoriesOption === "Fast Food" && (
              <>
                <option value="">Choose</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger and Sandwich">Burger and Sandwich</option>
                <option value="Fry Basket">Fry Basket</option>
                <option value="Pasta">Pasta</option>
              </>
            )}

            {selectCategoriesOption === "Drinks" && (
              <>
                <option value="">Choose</option>
                <option value="Peyala Tea">Peyala Tea</option>
                <option value="Hot Drinks">Hot Drinks</option>
                <option value="Cold Drinks">Cold Drinks</option>
              </>
            )}
          </select>
        </div>
        {/* child categories */}
        <div className="mb-4">
          <div>
            <label htmlFor="child_categories" className="form-label">
              Child_Categories
            </label>
          </div>
          <select
            id="child_categories"
            name="child_categories"
            className="input-group form-select"
            ref={childCategoriesRef}
          >
            {selectSubCategoriesOption === "Chinese Cuisines" && (
              <>
                <option value="">Choose</option>
                <option value="Soup">Soup</option>
              </>
            )}
          </select>
        </div>

        {/* addons */}
        {addons.map((size, index) => (
          <div key={index}>
            <label>
              Addons Name:
              <input
                type="text"
                name="addonName"
                value={size.addonName}
                onChange={(e) => handleAddonsChange(e, index)}
              />
            </label>
            <label>
              Addons Price:
              <input
                type="number"
                name="addonPrice"
                value={size.addonPrice}
                onChange={(e) => handleAddonsChange(e, index)}
              />
            </label>
            <button type="button" onClick={() => handleRemoveAddons(index)}>
              Remove Addons
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
        <br />
        <br />

        {/* size and price */}
        {sizePrice.map((size, index) => (
          <div key={index}>
            <label>
              Size:
              <input
                type="text"
                name="size"
                value={size.size}
                onChange={(e) => handleSizePriceChange(e, index)}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={size.price}
                onChange={(e) => handleSizePriceChange(e, index)}
              />
            </label>
            <button type="button" onClick={() => handleRemoveSizePrice(index)}>
              Remove Size & Price
            </button>
            <br />
          </div>
        ))}
        <button
          type="button"
          className="btn btn-success mt-2"
          onClick={handleAddSizePrice}
        >
          Add
        </button>
        <br />
        <br />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
