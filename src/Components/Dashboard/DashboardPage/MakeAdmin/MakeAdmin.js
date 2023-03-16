import React, { useRef, useState } from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const adminRef = useRef();
  const [isAdminAdd, setIsAdminAdd] = useState(false);

  const handleAdminSubmit = () => {
    const mailEmail = {
      adminEmail: adminRef?.current?.value,
    };
    // INSERT A ADMIN AT THE DATABASE
    fetch("http://localhost:8000/admin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(mailEmail),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setIsAdminAdd(true);
        }
      });
  };
  return (
    <div>
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

          <button type="submit" className="makeAdminButton btn MyBtn mb-3">
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
  );
};

export default MakeAdmin;
