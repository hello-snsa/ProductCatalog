import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import './Cart.css';
import { RootState } from "../store/store";
import { Product } from "../types/Product.ts";
import ShoppingCart from "../components/ShoppingCart.tsx";

const Cart: React.FC = () => {

  const [cartItems, setCartItems] = useState<Product[]>([]);

  const cartData = useSelector((state: RootState) => state?.cart?.items);

  useEffect(() => {
    setCartItems(cartData);
  }, [cartData])

  return (
    <div>
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems?.length === 0 ? (
        <p className="cart-sub-title">Your cart is empty.</p>
      ) : (
        <ShoppingCart cartItems={cartItems} />
      )
      }
    </div>
  );
};

export default Cart;
