import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./../../../../Authentication/AuthContext/AuthContext";
import TopbarNav from "./../../../Layouts/TopbarNav";
import SidebarNav from "./../../../Layouts/SidebarNav";
import load from "../../../../../Media/loading.gif";
import PopupCustomerCateringOrder from "./PopupCustomerCateringOrder";

const CustomerOrders = () => {
  const { currentUser } = useAuth();
  const [allCustomerOders, setallCustomerOrders] = useState([]);
  const [customerOrderDetails, setCustomerOrderDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  //getting the customer order according the email
  useEffect(() => {
    const fetchCustomerOrders = async () => {
      if (currentUser) {
        try {
          setLoading(true);
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/getCustomerCateringOrders?email=${currentUser?.email}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
              },
            }
          );
          setallCustomerOrders(response?.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchCustomerOrders();
  }, [currentUser]);

  //customer order data details according to the train id
  const handleCustomerTranId = async (tran_id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getCustomerCateringOrdersDetails?tran_id=${tran_id}`
      );
      setCustomerOrderDetails(response?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="customer_order">
            <div className="mb-5">
              <h3>আপনার ক্যাটারিং অর্ডারের তালিকা।</h3>
              <p>(বিস্তারিত দেখতে ভিউ(View) বাটনে ক্লিক করুন)</p>
            </div>
            {loading && (
              <img src={load} className="loading_spinner" alt="Loading....." />
            )}
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">তারিখ এবং সময়</th>
                    <th scope="col">অর্ডারের অবস্থা</th>
                    <th scope="col">বিস্তারিত</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider customer_order_table">
                  {allCustomerOders.map((allCustomerOrder, index) => (
                    <tr key={allCustomerOrder?._id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {new Date(allCustomerOrder?.orderTime).toLocaleString(
                          "en-GB",
                          {
                            dateStyle: "long",
                            timeStyle: "short",
                            hour12: true,
                          }
                        )}
                      </td>
                      <td>
                        <strong>
                          {" "}
                          {allCustomerOrder?.product_status !== "Pending" &&
                            allCustomerOrder?.product_status}
                        </strong>{" "}
                        {allCustomerOrder?.product_status === "Pending" && (
                          <p>
                            <strong>
                              Order Pending, Call to confirm at +880 1810-098389
                            </strong>
                          </p>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn MyBtn"
                          data-bs-toggle="modal"
                          data-bs-target="#singleOrderModal"
                          onClick={() =>
                            handleCustomerTranId(allCustomerOrder?.tran_id)
                          }
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PopupCustomerCateringOrder
              customerOrderDetails={customerOrderDetails}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default CustomerOrders;
