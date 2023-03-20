import React from "react";
import { useLocation } from "react-router";

const Invoice = () => {
  const location = useLocation();
  const order = location.state.orderDetailsForInvoice;

  console.log(order);

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
              John Doe
              <br />
              123 Main Street
              <br />
              Anytown, USA 12345
              <br />
              +88 01681894386
              <br />
              john.doe@example.com
            </p>
          </div>

          <div className="items">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Steak</td>
                  <td className="qty">2</td>
                  <td>TK. 25.00</td>
                  <td className="total">TK. 50.</td>
                </tr>
                <tr>
                  <td>Salmon</td>
                  <td className="qty">1</td>
                  <td>TK. 30.00</td>
                  <td className="total">TK. 30.00</td>
                </tr>
                <tr>
                  <td>Cheesecake</td>
                  <td className="qty">2</td>
                  <td>TK. 10.00</td>
                  <td className="total">TK. 20.00</td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <strong>Subtotal</strong>
                  </td>
                  <td className="total">TK. 100.00</td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <strong>Discount</strong> (-)
                  </td>
                  <td className="total">TK. 9.00</td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <strong>Delivery Charge (+)</strong>
                  </td>
                  <td className="total">TK. 9.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="total">
            <span>Total: 109.00 TK.</span>
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
