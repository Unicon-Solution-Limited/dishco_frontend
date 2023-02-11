import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./Cart.css";

const Cart = () => {
  const demo =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
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
                <tr className="cart_single_product">
                  <td className="cart_cancel_row">
                    <button className="cart_product_cancel_button">
                      {" "}
                      <i className="bi bi-x-circle"></i>
                    </button>
                  </td>
                  <td>
                    <img src={demo} alt="" className="cart_page_product_img" />
                  </td>
                  <td>DishCo Special Dishes</td>
                  <td>600 tk</td>
                  <td>
                    <i className="bi bi-x"></i>
                  </td>
                  <td className="cart_quantity_row">2</td>
                  <td>=</td>
                  <td>1200 tk</td>
                </tr>
                <tr className="cart_single_product">
                  <td className="cart_cancel_row">
                    <button className="cart_product_cancel_button">
                      {" "}
                      <i className="bi bi-x-circle"></i>
                    </button>
                  </td>
                  <td>
                    <img src={demo} alt="" className="cart_page_product_img" />
                  </td>
                  <td>DishCo Special Dishes DishCo Special Dishes</td>
                  <td>600 tk</td>
                  <td>
                    <i className="bi bi-x"></i>
                  </td>
                  <td className="cart_quantity_row">2</td>
                  <td>=</td>
                  <td>1200 tk</td>
                </tr>
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
