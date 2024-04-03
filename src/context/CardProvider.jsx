import { createContext, useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cartItem) => {
    setCartItems((prevCart) => [...prevCart, {...cartItem,
    quantity: cartItem.quantity ? cartItem.quantity: 1,
    },
    ]);
  };

  const removeFromCart = (itemId) => {
    const filteredCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== itemId;
    });
    setCartItems(filteredCartItems); // Doğru değeri setCartItems'e geçiriyoruz
  };

  return (
    <CardContext.Provider value={{ addToCart, cartItems, removeFromCart }}>
      {children}
    </CardContext.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.node,
};

export default CardProvider;
