import React from "react";
import { Link } from "react-router-dom";
import "./ProductManagement.css";

const EditProduct = () => {
  return (
    <section className="container py-5">
      <Link to="/allProduct" className="btn MyBtn">
        <i className="bi bi-chevron-double-left"></i> Back
      </Link>

      <form className="edit_form my-5 row">
        <div className="col-6 mb-3">
          <label for="exampleInputImage" className="form-label">
            <strong>Product Image: </strong>
          </label>
          <div className="d-flex">
            <input
              type="file"
              className="form-control editInput"
              id="exampleInputImage"
            />
            <button type="submit" className="btn MyBtn">
              <i className="bi bi-check2-square"></i>
            </button>
          </div>
        </div>

        <div className="col-6 mb-3">
          <label for="exampleInputText" className="form-label">
            <strong>Product Name: </strong>
          </label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control editInput"
              id="exampleInputText"
              placeholder="DishCo Special Pizza"
            />
            <button type="submit" className="btn MyBtn">
              <i className="bi bi-check2-square"></i>
            </button>
          </div>
        </div>

        <div className="mb-3 col-6">
          <label for="exampleInputText" className="form-label">
            <strong>Product Code: </strong>
          </label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control editInput"
              id="exampleInputText"
              placeholder="DSP-20P"
            />
            <button type="submit" className="btn MyBtn">
              <i className="bi bi-check2-square"></i>
            </button>
          </div>
        </div>

        <div className="col-6 mb-3">
          <label htmlFor="name" className="form-label">
            <strong>Product Stock</strong>
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            // ref={stockRef}
          >
            <option value="Stock_In">Stock In</option>
            <option value="Stock_Out">Stock Out</option>
          </select>
        </div>

        <div className="col-12 mb-4">
          <label htmlFor="description" className="form-label">
            <strong>Food Description</strong>
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            // ref={foodDescriptionRef}
          />
          <button className="btn MyBtn">Update</button>
        </div>

        <div className="col-4 mb-4">
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
              // ref={categoriesRef}
              // onClick={handleSelectCategoriesOption}
            >
              <option value="">Choose Categories</option>
              <option value="AppetizerRice">Appetizer & Rice </option>
              <option value="Platter">Platter</option>
              <option value="CheapoBox">Cheapo Box</option>
              <option value="Cuisines">Cuisines</option>
              <option value="Steak">Steak</option>
              <option value="FastFood">Fast Food</option>
              <option value="Dessert">Dessert</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
        </div>
        {/* sub categories */}
        <div className="col-4 mb-4">
          <div>
            <label htmlFor="sub_categories" className="form-label">
              Sub-Categories
            </label>
          </div>
          <select
            id="sub_categories"
            name="sub_categories"
            className="input-group form-select"
            // ref={subCategoriesRef}
            // onClick={handleSubCategoriesOption}
          >
            <>
              <option value="">Choose</option>
              <option value="Appetizer">Appetizer</option>
              <option value="riceCuisine">rice Cuisine</option>
            </>

            <>
              <option value="">Choose</option>
              <option value="DishCoPlatter">DishCo Platter</option>
            </>

            <>
              <option value="">Choose</option>
              <option value="MeatBox">Meat Box</option>
              <option value="RiceBowl">Rice Bowl</option>
              <option value="PlatterCuisine"></option>
            </>

            <>
              <option value="">Choose</option>
              <option value="IndianCuisines">Indian Cuisines</option>
              <option value="JapaneseCuisines">Japanese Cuisines</option>
              <option value="KoreanCuisines">Korean Cuisines</option>
              <option value="ChineseCuisines">Chinese Cuisines</option>
            </>

            <>
              <option value="">Choose</option>
              <option value="Pizza">Pizza</option>
              <option value="BurgerSandwich">Burger and Sandwich</option>
              <option value="FryBasket">Fry Basket</option>
              <option value="Pasta">Pasta</option>
            </>

            <>
              <option value="">Choose</option>
              <option value="PeyalaTea">Peyala Tea</option>
              <option value="HotDrinks">Hot Drinks</option>
              <option value="ColdDrinks">Cold Drinks</option>
            </>
          </select>
        </div>
        {/* child categories */}
        <div className="mb-4 col-4">
          <div>
            <label htmlFor="child_categories" className="form-label">
              Child_Categories
            </label>
          </div>
          <select
            id="child_categories"
            name="child_categories"
            className="input-group form-select"
            // ref={childCategoriesRef}
          >
            <>
              <option value="">Choose</option>
              <option value="Soup">Soup</option>
            </>
          </select>
        </div>

        <div className="mb-3 col-6">
          <label for="exampleInputPrice" className="form-label">
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

        {/* addons */}
        <div className="mb-3 col-6">
          <label for="exampleInputPrice" className="form-label">
            <strong>Extra Items Name and Price: </strong>
          </label>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="addonName"
                // value={size.addonName}
                // onChange={(e) => handleAddonsChange(e, index)}
                className="form-control"
                placeholder="Ex. Extra Cheese"
              />
            </label>
            ---
            <label>
              Price:
              <input
                type="number"
                name="addonPrice"
                // value={size.addonPrice}
                // onChange={(e) => handleAddonsChange(e, index)}
                className="form-control"
                placeholder="30 tk."
              />
            </label>
            <button
              type="button"
              // onClick={() => handleRemoveAddons(index)}
              className="btn btn-danger"
            >
              <i className="bi bi-trash"></i>
            </button>
            <br />
          </div>
          <button
            type="button"
            className="btn btn-success mt-2"
            // onClick={handleAddaddons}
          >
            Add
          </button>
        </div>
        {/* addons */}
      </form>
    </section>
  );
};

export default EditProduct;
