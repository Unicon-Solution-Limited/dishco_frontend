import React, { useRef, useState } from "react";

const CreateProduct = () => {
  const [photo, setPhoto] = useState();
  const nameRef = useRef();
  const foodCodeRef = useRef();
  const categoriesRef = useRef();
  const subCategoriesRef = useRef();
  const childCategoriesRef = useRef();
  const [addons, setAddons] = useState([{ addonName: "", addonPrice: "" }]);
  const [sizePrice, setSizePrice] = useState([{ size: "", price: "" }]);

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

  //submit funtion
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(addons, "this is addons");
    console.log(sizePrice, "this is price and size");
    setSizePrice([{ size: "", price: "" }]);
    setAddons([{ addonName: "", addonPrice: "" }]);
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="img" className="form-label">
            Image
          </label>
          <input type="file" className="form-control" id="img" />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Food Code
          </label>
          <input type="text" className="form-control" id="name" />
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
            >
              <option value="">Choose</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <div>
            <label htmlFor="sub_categories" className="form-label">
              Sub-Categories
            </label>
          </div>
          <div>
            <select
              id="sub_categories"
              name="sub_categories"
              className="input-group form-select"
            >
              <option value="">Choose</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <div>
            <label htmlFor="child_categories" className="form-label">
              Child_Categories
            </label>
          </div>
          <div>
            <select
              id="child_categories"
              name="child_categories"
              className="input-group form-select"
            >
              <option value="">Choose</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
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
