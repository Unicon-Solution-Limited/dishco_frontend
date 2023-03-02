import React from "react";
import "./ProductManagement.css";

const ViewProductDetails = () => {
  const demo =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
  return (
    <div
      className="modal fade"
      id="view"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
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
            <p>
              <strong>SKU:</strong> DSF-001
            </p>
            <img
              src={demo}
              alt="product_Image"
              className="single_product_modal_image my-2"
            />
            <h6>DishCo Special Platter</h6>
            <p className="my-2">Price: 500 Tk.</p>
            <p>Size: 8' 10 ' 12'</p>
            <p className="my-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              officia dolores, quidem quasi qui nemo beatae iusto illo eaque
              commodi, debitis consequatur quas fugit harum delectus facere est
              animi ipsa!
            </p>
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
