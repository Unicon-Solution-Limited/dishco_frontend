import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./FooterPages.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="container my-5 py-3 contactMain">
        <div className="row">
          <div className="col-lg-12 text-center mb-3 contactHead">
            <h3 className="mb-3">Contact us</h3>

            <p className="mb-2">
              <i className="bi bi-geo-alt-fill"></i>
              <span className="contact-text">
                Shop-9007, 9th Floor, Shimanto Shambhar, Dhanmondi 2,
                Dhaka-1205.
              </span>
            </p>
            <p className="emailPhone">
              <span>
                <i className="bi bi-envelope-fill"></i> dishco.bd@gmail.com
              </span>
              <span>
                <i className="bi bi-telephone-fill"></i> +88 018100 98389
              </span>
            </p>
            <hr className="ContactHr"></hr>
          </div>
          <div className="col-md-6 mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.27214573517!2d90.3750758145019!3d23.73767279518037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b96d4c6873e3%3A0x374082c819c9c727!2sDishCo!5e0!3m2!1sbn!2sbd!4v1676719671831!5m2!1sbn!2sbd"
              title="map"
              loading="lazy"
              style={{ width: "100%", height: "450px" }}
            ></iframe>
          </div>
          <form className="col">
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control mt-2"
                id="inputName"
                placeholder="Your name"
                name="name"
                required
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="inputAddress">Phone Number</label>
              <input
                type="number"
                className="form-control mt-2"
                id="inputAddress"
                placeholder="Your phone"
                name="number"
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control mt-2"
                id="inputEmail"
                placeholder="Your email"
                name="email"
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="inputMessage">Message</label>
              <textarea
                type="text"
                className="form-control mt-2"
                id="inputMessage"
                placeholder="Type your message........"
                name="message"
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn mt-4 MyBtn">
                Send
              </button>
            </div>
            <div>
              <h4
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginTop: "12px",
                }}
              >
                {/* {message} */}
              </h4>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
