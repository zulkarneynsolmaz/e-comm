import { useContext } from "react";
import "./ProductItem.css";
import PropTypes from "prop-types";
import { CardContext } from "../../context/CardProvider";
import { Link } from "react-router-dom";
const ProductItem = ({ ProductItem }) => {
    const { cartItems, addToCart} = useContext( CardContext);
    const filteredCart = cartItems.find(
      (cartItem) => cartItem.id === ProductItem.id
    );
  return (
    <div className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <a href="#">
          <img src={ProductItem.img.singleImage} alt="" className="img1" />
          <img src={ProductItem.img.thumbs[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">

          <br />
          {ProductItem.name}
        </a>
        <ul className="product-star">
          <li className="bi bi-star-fill"></li>
          <li className="bi bi-star-fill"></li>
          <li className="bi bi-star-fill"></li>
          <li className="bi bi-star-fill"></li>
          <li className="bi bi-star-fill"></li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">
          ₺{ProductItem.price.newPrice.toFixed(2)}
          </strong>
          <span className="old-price">
          ₺{ProductItem.price.oldPrice.toFixed(2)}
          </span>
        </div>
        <span className="product-discount">-{ProductItem.discount}%</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() => addToCart(ProductItem)}
            disabled={filteredCart}
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <Link to={'product/${productItem.id}'}  className="product-link"  >
            <i className="bi bi-eye-fill"></i>
          </Link>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  ProductItem: PropTypes.object,
  setCartItems: PropTypes.func
};
