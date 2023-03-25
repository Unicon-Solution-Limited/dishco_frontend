import React from "react";
import TopbarNav from "./../../Layouts/TopbarNav";
import SidebarNav from "./../../Layouts/SidebarNav";
import SingleCustomer from "./SingleCustomer";
import "./CustomerList.css";

const CustomerList = () => {
  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="container-fluid p-4">
            <h2 className="text-center">Customers</h2>
            <div className="table-responsive">
              <table className="table align-middle table-hover">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>MD. MOINUL HOSSAIN</td>
                    <td>01681894386</td>
                    <td>Bronze</td>
                    <td>
                      <button
                        type="button"
                        className="btn MyBtn"
                        data-bs-toggle="modal"
                        data-bs-target="#singleCustomer"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <SingleCustomer />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CustomerList;
