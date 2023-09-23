import React from "react";
import { useLocation } from "react-router";

const Invoice = () => {
  const location = useLocation();
  const data = location.state.orderDetailsForInvoice;

  return (
    <>
      <div className="invoice">
        <div className="header">
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
        </div>
        <div className="details">
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
            <table className="table catering-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Food Price</th>
                  <th>Addon Item Price</th>
                  <th>Total Food + Extra Item Price</th>
                  <th>Special Discount(10%)</th>
                  <th>Total</th>
                </tr>
              </thead>
              {data?.orderedData.map((dt, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{dt?.name}</td>
                    <td className="qty">{dt?.quantity}</td>
                    {/* food price */}
                    <td>{dt?.price}</td>
                    {/* total addon price */}
                    <td>
                      TK.{" "}
                      {dt?.extras.reduce(
                        (acc, addon) => acc + addon.priceOfAddon,
                        0
                      )}
                    </td>
                    {/* total food price + addon price */}
                    <td>
                      {dt?.price * dt.quantity +
                        dt?.extras.reduce(
                          (acc, addon) => acc + addon.priceOfAddon,
                          0
                        )}
                    </td>
                    {/* dishcount price */}
                    <td>
                      (
                      {(
                        (dt?.price * dt.quantity +
                          dt?.extras.reduce(
                            (acc, addon) => acc + addon.priceOfAddon,
                            0
                          )) *
                        0.1
                      ).toFixed(2)}
                      )
                    </td>
                    {/* grand total       */}
                    <td className="total">
                      {dt?.price * dt.quantity +
                        dt?.extras.reduce(
                          (acc, addon) => acc + addon.priceOfAddon,
                          0
                        ) -
                        (
                          (dt?.price * dt.quantity +
                            dt?.extras.reduce(
                              (acc, addon) => acc + addon.priceOfAddon,
                              0
                            )) *
                          0.1
                        ).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div className="total_calculation">
            <span>
              {/* <strong>Total:</strong> {data.total_amount - 60} TK. */}
            </span>{" "}
            <br />
            <span>
              <strong>Delivery Charge:</strong> +40 TK.
            </span>{" "}
            <br />
            <span>
              <strong>Coupon Discount:</strong> -({data?.discountPrice}) TK.
            </span>
            <br />
            <span>
              <strong>Grand Total:</strong> {data.total_amount} TK.
            </span>
          </div>
          <p className="tAndc">
            * ইনভয়েস থেকে অতিরিক্ত কোন অর্থ প্রদান থেকে বিরত থাকুন।
          </p>
        </div>
        <div className="invoice_footer">
          <span>+88 018100 98389</span>
          <span>dishco.bd@gmail.com</span>
        </div>
      </div>
    </>
  );
};

export default Invoice;
