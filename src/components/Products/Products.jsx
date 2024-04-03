import { useState } from "react";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import "./Products.css";
import productsData from "../../data.json";
import PropTypes from "prop-types";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};
function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={{onClick}}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};
const Products = () => {
  const [products] = useState(productsData);
  // const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems.length);


  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Öne Çıkan Ürünler</h2>
          <p>Yaz Koleksiyonu Yeni Morden Tasarım</p>
        </div>
        <div className="product-wrapper product-carousel">
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <ProductItem ProductItem={product}  key={product.id} />
              ))}
            </Slider>
          <div className="glide__arrows"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;
