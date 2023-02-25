import React, { useContext, useState } from "react";
import { CartProvider } from "../../AllContext/CartContext";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./Cart.css";

const Cart = () => {
  //all context
  const [cartData, setCartData, finaltotalAddonPrice, subTotalPrice] =
    useContext(CartProvider);
  const [quantity, setQuantity] = useState(0);
  console.log(quantity);

  //handleDecrese
  const handleDecrease = (selectedId) => {
    let newQuantity;
    cartData.map((cartDataId) => {
      if (selectedId === cartDataId.id) {
      }
    });
  };

  //handleIncrease
  const handleIncrease = (selectedId) => {
    // setQuantity(setQuantity(quantity + 1));
  };

  return (
    <>
      <Header />
      <section className="container-fluid cart_page_main my-5">
        <aside className="cart_page_top">
          <h4>Cart Item's</h4>
          <div className="cart_product_table table-responsive">
            <table className="w-100 table table-striped align-middle">
              <thead>
                <tr>
                  <th scope="col" className="cart_cancel_row">
                    #
                  </th>
                  <th scope="col">Images</th>
                  <th scope="col">Product</th>
                  <th scope="col">Addon Price</th>
                  <th scope="col">+</th>
                  <th scope="col">Price</th>
                  <th>
                    <i className="bi bi-x"></i>
                  </th>
                  <th scope="col" className="cart_quantity_row">
                    Quantity
                  </th>
                  <th>=</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>

              <tbody className="table-group-divider">
                {cartData.map((cartDt) => (
                  <tr className="cart_single_product" key={cartDt?.id}>
                    <td className="cart_cancel_row">
                      <button className="cart_product_cancel_button">
                        <i className="bi bi-x-circle"></i>
                      </button>
                    </td>
                    <td>
                      <img
                        src={cartDt.image}
                        alt=""
                        className="cart_page_product_img"
                      />
                    </td>
                    <td>{cartDt.name}</td>
                    <td>
                      {cartDt?.extras.reduce(
                        (acc, addon) => acc + addon.priceOfAddon,
                        0
                      )}
                    </td>
                    <td>+</td>
                    <td>{cartDt?.price}</td>
                    <td>
                      <i className="bi bi-x"></i>
                    </td>
                    <td className="cart_quantity_row">
                      <span className="quantity_cart_input">
                        <button
                          className="value-button"
                          id="decrease"
                          onClick={() => handleDecrease(cartDt?.id)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          id="number"
                          value={cartDt.quantity + quantity}
                          readOnly
                        />
                        <button
                          className="value-button"
                          id="increase"
                          onClick={() => handleIncrease(cartDt?.id)}
                        >
                          +
                        </button>
                      </span>
                    </td>
                    <td>=</td>
                    <td>1200 tk</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-end update_cart_button_section">
              <button className="btn MyBtn">Update Cart</button>
            </div>
          </div>
        </aside>
        <div className="cart_page_bottom_main">
          <aside className="cart_page_bottom">
            <h4>Cart Total</h4>
            <p>
              <b>Subtotal:</b> 1000 tk.
            </p>
            <p>
              <b> Shipping Flat rate:</b> 80.00৳ Shipping to Dhaka.
            </p>
            <p>
              <b> Total:</b> 2000 tk.
            </p>
            <button className="btn MyBtn">Process to checkout</button>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
