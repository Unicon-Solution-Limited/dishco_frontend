import React from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

export default function HowToBuy() {
  const fallback =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674641183/Frontend_images/Background_images/rh6vjlpg81xrbtrieyep.webp";
  return (
    <>
      <Header />
      <section className="how-to-buy-body">
        <div className="how-to-buy-content">
          <h3>After place your order please call to confirm at</h3>
          <h1> +88 018100 98389</h1>
          <details className="how-to-buy-details">
            <summary>See details in description:</summary>
            <ul>
              <li>Browse our Dishco website to find the desired product.</li>
              <li>Click on the product to view its details.</li>
              <li>
                On the product details page, select the desired size and adjust
                the quantity accordingly.
              </li>
              <li>To add the product to your cart, click "Add to Cart."</li>
              <li>
                Click the "Basket" button. In the Basket sidebar, you will find
                a "View Cart" and "Checkout" button to proceed to the Checkout
                page.
              </li>
              <li>
                If you have a coupon or voucher code, enter it in the designated
                field.
              </li>
              <li>
                Complete the checkout process by filling out the required form.
              </li>
              <li>
                Choose a payment option and check the box to confirm your
                selection before clicking "Confirm Order."
              </li>
              <li>Finally, click "Confirm Order" to complete your purchase.</li>
            </ul>
          </details>
        </div>
        <video
          className="w-100"
          id="how-to-buy"
          autoPlay
          loop
          muted
          playsInline
          poster={fallback}
        >
          <source
            src="https://res.cloudinary.com/dnz6zg4on/video/upload/v1689416974/Frontend_images/d1kdemn5raxwgasu2ngq.webm"
            type="video/webm"
          />
          <img
            src={fallback}
            title="Your browser does not support the <video> tag"
            alt="DishCo- Dancing Deliciousness"
            loading="lazy"
          ></img>
        </video>
      </section>
      <Footer />
    </>
  );
}
