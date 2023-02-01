import React from "react";
import "./Cart.css";

const Cart = () => {
  const demo =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
  return (
    <section className="container-fluid cart_page_main">
      <aside className="cart_page_left">
        <h6>Cart Item's</h6>
        <div className="cart_product_table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Images</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <div className="cart_single_product">
              <tbody>
                <tr>
                  <td>
                    <i className="bi bi-x-circle"></i>
                  </td>
                  <td>
                    <img src={demo} alt="" />
                  </td>
                  <td>DishCo Special Dishes</td>
                  <td>600 tk</td>
                  <td>1</td>
                  <td>1200 tk</td>
                </tr>
              </tbody>
            </div>
            <tfoot>
              <button>Update cart</button>
            </tfoot>
          </table>
        </div>
      </aside>
      <aside className="cart_page_right">
        <table>
          <thead></thead>
          <tbody></tbody>
          <tfoot></tfoot>
        </table>
      </aside>
    </section>
  );
};

export default Cart;
