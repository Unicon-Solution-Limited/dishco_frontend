import React from "react";

const Invoice = () => {
  return (
    <>
      <div class="invoice">
        <div class="header">
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
        <div class="details">
          <div class="info">
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

          <div class="items">
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
                  <td class="qty">2</td>
                  <td>TK. 25.00</td>
                  <td class="total">TK. 50.</td>
                </tr>
                <tr>
                  <td>Salmon</td>
                  <td class="qty">1</td>
                  <td>TK. 30.00</td>
                  <td class="total">TK. 30.00</td>
                </tr>
                <tr>
                  <td>Cheesecake</td>
                  <td class="qty">2</td>
                  <td>TK. 10.00</td>
                  <td class="total">TK. 20.00</td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Subtotal</strong>
                  </td>
                  <td class="total">TK. 100.00</td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Discount</strong> (-)
                  </td>
                  <td class="total">TK. 9.00</td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Delivery Charge (+)</strong>
                  </td>
                  <td class="total">TK. 9.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="total">
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
