import React, { useRef, useState } from "react";
import TopbarNav from "../../Layouts/TopbarNav";
import "./MakeAdmin.css";
import SidebarNav from "./../../Layouts/SidebarNav";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";

const MakeAdmin = () => {
  const adminRef = useRef();
  const [isAdminAdd, setIsAdminAdd] = useState(false);
  const { currentUser } = useAuth();

  const handleAdminSubmit = () => {
    const mailEmail = {
      adminEmail: adminRef?.current?.value,
    };

    // INSERT A ADMIN AT THE DATABASE
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/admin?email=${currentUser?.email}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
        },
        body: JSON.stringify(mailEmail),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setIsAdminAdd(true);
        }
      });
  };
  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid p-4">
              <div className="makeAdminMainDiv">
                <form className="makeAdminFrom" onSubmit={handleAdminSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      ref={adminRef}
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="makeAdminButton btn MyBtn mb-3"
                  >
                    Submit
                  </button>
                  <br />
                  {isAdminAdd && (
                    <span className="text-success">
                      <i className="bi bi-check-circle"></i>
                      Admin added Succuessfully
                    </span>
                  )}
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
