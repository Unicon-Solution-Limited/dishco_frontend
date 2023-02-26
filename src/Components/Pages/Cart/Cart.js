import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../AllContext/CartContext";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./Cart.css";

const Cart = () => {
  //all context
  const [cartData, setCartData, finaltotalAddonPrice, subTotalPrice] =
    useContext(CartProvider);
  // const [quantity, setQuantity] = useState(0);

  //handleDecrese
  const handleDecrease = (item) => {
    const itemToUpdate = cartData.find(
      (cartDataItem) => cartDataItem.id === item.id
    );

    if (itemToUpdate && itemToUpdate.quantity > 1) {
      const updatedCartData = [...cartData];
      const itemIndex = updatedCartData.indexOf(itemToUpdate);
      updatedCartData[itemIndex] = {
        ...itemToUpdate,
        quantity: itemToUpdate.quantity - 1,
      };
      setCartData(updatedCartData);
    }
  };

  //handleIncrease
  const handleIncrease = (item) => {
    const itemToUpdateIndex = cartData.findIndex(
      (cartDataItem) => cartDataItem.id === item.id
    );

    if (itemToUpdateIndex !== -1) {
      const updatedCartData = [...cartData];
      updatedCartData[itemToUpdateIndex].quantity += 1;
      setCartData(updatedCartData);
    }
  };

  //cartItem remove
  const handleClearCart = (id) => {
    let newData = cartData.filter((item) => item.id !== id);
    setCartData(newData);
  };

  return (
    <>
      <Header />
      {cartData.length === 0 && (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ width: "100%", textAlign: "center" }}
        >
          <h1>Cart is Empty...!!</h1>
        </div>
      )}
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
                      <button
                        className="cart_product_cancel_button"
                        onClick={() => handleClearCart(cartDt?.id)}
                      >
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
                          onClick={() => handleDecrease(cartDt)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          id="number"
                          value={cartDt.quantity}
                          readOnly
                        />
                        <button
                          className="value-button"
                          id="increase"
                          onClick={() => handleIncrease(cartDt)}
                        >
                          +
                        </button>
                      </span>
                    </td>
                    <td>=</td>
                    <td>
                      {" "}
                      {cartDt?.quantity * cartDt?.price +
                        cartDt?.extras.reduce(
                          (acc, addon) => acc + addon.priceOfAddon,
                          0
                        )}{" "}
                      tk
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </aside>
        <div className="cart_page_bottom_main">
          <aside className="cart_page_bottom">
            <h4>Cart Total</h4>
            <p>
              <b>Subtotal:</b> {subTotalPrice + finaltotalAddonPrice} tk.
            </p>
            <p>
              <b> Shipping Flat rate:</b> 80.00৳ Shipping to Dhaka.
            </p>
            {cartData.length && (
              <p>
                <b> Grand Total:</b>
                {""} {subTotalPrice + finaltotalAddonPrice} + 80 ={" "}
                {subTotalPrice + finaltotalAddonPrice + 80} tk.
              </p>
            )}
            <Link to="/checkout" className="btn MyBtn">
              <button className="btn MyBtn">Process to checkout</button>
            </Link>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
