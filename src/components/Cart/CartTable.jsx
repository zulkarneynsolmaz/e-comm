import { useContext } from "react";
import CartItem from "./CartItem";
import { CardContext } from "../../context/CardProvider";

const CartTable = () => {
  const { cartItems } = useContext(CardContext); // CartItems yerine cartItems olarak değiştirildi
  return (
    <table className="shop-table">
      <thead>
        <tr>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-name">Ürün</th>
          <th className="product-price">Fiyat</th>
          <th className="product-quantity">Miktar</th>
          <th className="product-subtotal">Ara Toplam</th>
        </tr>
      </thead>
      <tbody className="cart-wrapper">
        {cartItems.map((item) => ( 
          <CartItem cartItem={item} key={item.id} /> 
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
