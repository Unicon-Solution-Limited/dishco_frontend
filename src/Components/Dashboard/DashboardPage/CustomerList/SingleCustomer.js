import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCustomer = () => {
  const { singleCustomerEmail } = useParams();

  // getting the customer order according to the email
  const [singleOrder, setSingleOrder] = useState([]);
  console.log(singleOrder);

  useEffect(() => {
    const fetchCustomerOrders = async () => {
      if (singleCustomerEmail) {
        try {
          const response = await axios.get(
            `http://localhost:8000/getSingleCustomerOrderRank?email=${singleCustomerEmail}`
          );
          setSingleOrder(response?.data ?? []);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchCustomerOrders();
  }, [singleCustomerEmail]);

  // calculate the total product cost (all)
  const totalAmount = useMemo(() => {
    return singleOrder.reduce(
      (accumulator, currentValue) =>
        accumulator + (currentValue?.total_amount ?? 0),
      0
    );
  }, [singleOrder]);

  // calculate successful product status
  const successfulPayments = useMemo(() => {
    return singleOrder.filter((item) => item?.product_status === "Shipped");
  }, [singleOrder]);
  const successfulPaymentsCount = successfulPayments.length;

  // calculate canceled orders
  const cancelData = useMemo(() => {
    return singleOrder.filter((item) => item?.product_status === "canceled");
  }, [singleOrder]);
  const cancelDataLength = cancelData.length;
  return (
    <>
      {singleOrder.map((data) => (
        <div key={data?._id}>
          <div>
            <p>Date: {data?.orderTime}</p>
          </div>
          <div className="modal-body single_customer_body">
            <aside>
              {data?.orderedData.map((orderDt) => (
                <div key={orderDt.id}>
                  <p>
                    <img
                      src={orderDt.image}
                      alt="loading"
                      className="single_product_modal_image"
                    />{" "}
                  </p>
                  <p>Food Name: {orderDt?.name}</p>
                  <p>Food Code: {orderDt.foodCode}</p>
                </div>
              ))}
            </aside>
          </div>
        </div>
      ))}
      <div className="single_customer_footer">
        <aside>
          <h4>Total purchased Amount</h4>
          <p>{totalAmount} tk.</p>
          <h4>Total Points</h4>
          <p>{Math.round(totalAmount / 10)}</p>
        </aside>
        <p>
          <strong>Number of Orders:</strong> {singleOrder?.length}
        </p>
        <aside className="d-flex justify-content-between mt-2">
          <p className="text-success">
            <strong>Completed Orders:</strong> {successfulPaymentsCount}
          </p>
          <p className="text-danger">
            <strong>Cancelled orders:</strong> {cancelDataLength}
          </p>
        </aside>
      </div>
    </>
  );
};

export default SingleCustomer;
