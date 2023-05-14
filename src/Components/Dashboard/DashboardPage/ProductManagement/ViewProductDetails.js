import React, { useEffect, useState } from "react";
import "./ProductManagement.css";

const ViewProductDetails = ({ viewProductId }) => {
  const [selectedFood, setSelectedFood] = useState([]);

  //get selected food for update the addons name, price and food price with size
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          `https://server.dishcofood.com/getFoodForEdit?foodEditId=${viewProductId}`
        );
        const data = await response.json();
        setSelectedFood(data);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchFood();
  }, [viewProductId]);

  return (
    <div
      className="modal fade"
      id="view"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="viewLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="viewLabel">
              Product Details
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            {selectedFood.map((slFood) => (
              <div key={slFood._id}>
                <p>
                  <strong>SKU:</strong> {slFood?.foodCode}
                </p>
                <img
                  src={slFood?.image}
                  alt="product_Image"
                  className="single_product_modal_image my-2"
                  loading="lazy"
                />
                <h6>{slFood?.name}</h6>{" "}
                {slFood?.sizePriceItem?.map((sizePrice, k) => (
                  <span key={k}>
                    {/* <span>{sizePrice.price} </span> */}
                    <p className="my-2">Price: {sizePrice.price} Tk.</p>
                    <p>Size: {sizePrice.size}</p>
                  </span>
                ))}{" "}
                <p className="my-3 text-justify">{slFood.foodDescription}</p>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn MyBtn" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductDetails;
