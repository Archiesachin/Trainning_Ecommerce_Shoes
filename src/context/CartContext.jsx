import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem('cartItems');
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore parse errors
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (e) {
      // ignore storage errors (quota, private mode)
    }
  }, [cartItems]);

  // Example functions
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  const addToCart = (item) => setCartItems((prev) => [...prev, item]);
  const removeFromCart = (id) => setCartItems((prev) => prev.filter(item => item.id !== id));
  
  const increaseQty = (id) => {
    setCartItems((prev) => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  }

  const decreaseQty = (id) => {
    setCartItems((prev) => prev.map(item => {
      if (item.id !== id) return item;
      const newQty = Math.max(1, item.quantity - 1);
      return { ...item, quantity: newQty };
    }));
  }

  return (
    <CartContext.Provider value={{
      cartOpen, cartItems, openCart, closeCart, addToCart, removeFromCart,
      increaseQty, decreaseQty,
      setCartItems, setCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}
