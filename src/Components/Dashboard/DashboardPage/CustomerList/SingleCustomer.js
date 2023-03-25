import React from "react";

const SingleCustomer = () => {
  return (
    <>
      <div
        className="modal fade"
        id="singleCustomer"
        tabIndex="-1"
        aria-labelledby="singleCustomerLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="singleCustomerLabel">
                Date: 25.03.2023
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body single_customer_body">
              <aside>
                <h4>Address:</h4>
                <p>19/1-B, Tikkapara</p>
                <p>Mohammadpur, Dhaka</p>
                <p>mmoinulh100@gmail.com</p>
              </aside>
              <aside>
                <h4>Total purchased Amount</h4>
                <p>6000 tk.</p>
                <h4>Total Points</h4>
                <p>600</p>
              </aside>
            </div>
            <div className="single_customer_footer">
              <p>
                <strong>Number of Orders:</strong> 30
              </p>
              <aside className="d-flex justify-content-between mt-2">
                <p className="text-success">
                  <strong>Completed Orders:</strong> 26
                </p>
                <p className="text-danger">
                  <strong>Cancelled orders:</strong> 4
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCustomer;
