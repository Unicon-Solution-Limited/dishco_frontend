import React, { useState } from "react";

const CreateProduct = () => {
  return (
    <div>
      <form className="container">
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

        <div className="mb-4">
          <div>
            <label htmlFor="addons" className="form-label">
              Addons
            </label>
          </div>
          <div>
            <select
              id="addons"
              name="addons"
              className="input-group form-select"
            >
              <option value="">Choose</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
