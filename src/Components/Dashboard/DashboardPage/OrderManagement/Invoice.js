import React, { useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Invoice = () => {
  const location = useLocation();
  const data = location.state.orderDetailsForInvoice;

  //all context
  console.log(data);

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
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Food Price</th>
                  <th>Extra Item Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              {data?.orderedData.map((dt, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{dt?.name}</td>
                    <td className="qty">{dt?.quantity}</td>

                    <td>TK. {dt?.price}</td>
                    <td>
                      TK.{" "}
                      {dt?.extras.reduce(
                        (acc, addon) => acc + addon.priceOfAddon,
                        0
                      )}
                    </td>
                    <td className="total">
                      TK.{" "}
                      {dt?.quantity * dt?.price +
                        dt?.extras.reduce(
                          (acc, addon) => acc + addon.priceOfAddon,
                          0
                        )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div className="total_calculation">
            <span>
              <strong>Total:</strong> {data.total_amount - 80} TK.
            </span>{" "}
            <br />
            <span>
              <strong>Delivery Charge:</strong> +80 TK.
            </span>{" "}
            <br />
            <span>
              <strong>Discount:</strong> -{data?.discountPrice} TK.
            </span>
            <br />
            <span>
              <strong>Grand Total:</strong> {data.total_amount} TK.
            </span>
          </div>
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
