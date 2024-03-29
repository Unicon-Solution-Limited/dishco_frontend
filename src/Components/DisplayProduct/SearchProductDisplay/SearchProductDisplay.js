import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import loading from "../../../Media/loading.gif";

const SearchProductDisplay = () => {
  const { searchProductName } = useParams();
  const [searchProduct, setSearchProduct] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //search
  // this is for searching product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoadingSearch(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/allProductForSearch?searchProductName=` +
            searchProductName
        );
        const data = await response.json();
        setSearchProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.log("err", error);
      }
      setLoadingSearch(false);
    };
    fetchProduct();
  }, [searchProductName]);

  return (
    <>
      <Header />
      <section className="displayProduct_main">
        <div className="container my-5">
          <div className="product_card_row">
            {searchProduct.length === 0 && (
              <div className="loading_spinner">
                <img src={loading} alt="Loading..." />
              </div>
            )}
            {searchProduct.map((data, index) => (
              <div key={index}>
                <div className="product_card_body">
                  <img src={data.image} alt="" className="product_img" />
                  <h6 className="product_name">{data.name.slice(0, 30)}</h6>
                  <p className="product_price">
                    {data.sizePriceItem.map((sizePrice, index2) => (
                      <span key={index2}>
                        <span className="price_span">{sizePrice?.price}</span>
                      </span>
                    ))}
                  </p>

                  <span>
                    <Link
                      to={`/singleProduct/${data?._id}`}
                      className="btn MyBtn product_button"
                    >
                      View Details <i className="bi bi-eye"></i>
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchProductDisplay;
