import React from "react";
import { Link } from "react-router-dom";
import "./ProductManagement.css";

const EditProduct = () => {
  return (
    <section className="container py-5">
      <Link to="/allProduct" className="btn MyBtn">
        <i className="bi bi-chevron-double-left"></i> Back
      </Link>

      <form className="edit_form my-5">
        <div class="mb-3">
          <label for="exampleInputImage" class="form-label">
            <strong>Product Image: </strong>
          </label>
          <div className="d-flex">
            <input
              type="file"
              class="form-control editInput"
              id="exampleInputImage"
            />
            <button type="submit" class="btn MyBtn">
              <i className="bi bi-check2-square"></i>
            </button>
          </div>
        </div>

        <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            <strong>Product Name: </strong>
          </label>
          <div className="d-flex">
            <input
              type="text"
              class="form-control editInput"
              id="exampleInputText"
              placeholder="DishCo Special Pizza"
            />
            <button type="submit" class="btn MyBtn">
              <i className="bi bi-check2-square"></i>
            </button>
          </div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPrice" class="form-label">
            <strong>Product Price and Size: </strong>
          </label>
          {/* size and price */}
          <div>
            <div>
              <label>
                Size:
                <input
                  type="text"
                  name="size"
                  //   value={size.size}
                  //   onChange={(e) => handleSizePriceChange(e, index)}
                  className="form-control"
                  placeholder="8"
                />
              </label>
              ---
              <label>
                Price:
                <input
                  type="number"
                  name="price"
                  //   value={size.price}
                  //   onChange={(e) => handleSizePriceChange(e, index)}
                  className="form-control"
                  placeholder="390 tk."
                />
              </label>
              <button
                type="button"
                // onClick={() => handleRemoveSizePrice(index)}
                className="btn btn-danger"
              >
                <i className="bi bi-trash"></i>
              </button>
              <br />
            </div>

            <button
              type="button"
              className="btn btn-success mt-2"
              // onClick={handleAddSizePrice}
            >
              Add
            </button>
          </div>
          {/* size and price */}
        </div>

        <div className="mb-3"></div>
      </form>
    </section>
  );
};

export default EditProduct;
