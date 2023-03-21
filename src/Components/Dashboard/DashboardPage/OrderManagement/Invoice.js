import React, { useContext } from "react";
import { useLocation } from "react-router";
import { CartProvider } from "../../../AllContext/CartContext";

const Invoice = () => {
  const location = useLocation();
  const data = location.state.orderDetailsForInvoice;

  //all context
  const [cartData, setCartData, finaltotalAddonPrice, subTotalPrice] =
    useContext(CartProvider);

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

          <div className="total">
            <span>Total: {data.total_amount - 80} TK.</span> <br />
            <span>Delivery Charge: 80 TK.</span> <br />
            <span>Grand Total: {data.total_amount} TK.</span>
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
