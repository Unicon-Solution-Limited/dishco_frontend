import React from "react";
import { useLocation } from "react-router";
import "../OrderManagement.css";

const CateringInvoice = () => {
  const location = useLocation();
  const data = location.state.orderDetailsForCateringInvoice;

  //total tk
  const totalTk = data?.food.reduce(
    (accumulator, item) => accumulator + item.tk,
    0
  );

  return (
    <>
      <main className="invoice">
        <section className="header">
          <h1 onClick={() => window.print()} className="invoice_btn_admin">
            Invoice
          </h1>
          <img
            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1674363983/Frontend_images/logo/logo_o4uryk.webp"
            alt="DishCo"
            onClick={() => window.print()}
            className="invoice_btn_admin"
            loading="lazy"
          />
        </section>
        <section className="details">
          <div className="info">
            <h2>Billing Information</h2>
            <p>
              {data?.cus_name}
              <br />
              {data?.cus_add1}
              <br />
              {data?.cus_city}
              <br />
              {data?.cus_phone}
              <br />
              {data?.cus_email}
            </p>
          </div>

          <div className="items">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Packages</th>
                  <th>Price</th>
                </tr>
              </thead>
              {data?.food?.map((orderDt, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{orderDt?.day}</td>
                    <td className="qty">{orderDt?.package}</td>
                    <td>
                      {new Intl.NumberFormat("bn-BD").format(orderDt?.tk)} টাকা
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div className="total_calculation">
            <span>
              মোট- {new Intl.NumberFormat("bn-BD").format(totalTk)} টাকা
            </span>{" "}
            <br />
            <span>পেমেন্ট পদ্ধতি- {data?.payment_method}</span> <br />
            <span>
              অর্ডার সময়-{" "}
              {new Date(data?.orderTime).toLocaleString("en-GB", {
                dateStyle: "short",
                timeStyle: "short",
                hour12: true,
              })}
            </span>
            <br />
          </div>
        </section>
        <section className="invoice_footer">
          <span>+88 018100 98389</span>
          <span>dishco.bd@gmail.com</span>
        </section>
      </main>
    </>
  );
};

export default CateringInvoice;
