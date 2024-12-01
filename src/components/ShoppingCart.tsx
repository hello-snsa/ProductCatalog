import React from 'react';
import { useDispatch } from 'react-redux';

import './ShoppingCart.css';
import { removeFromCart } from "../store/cartReducer";
import { AppDispatch } from '../store/store';
import { Product } from '../types/Product';

interface ShoppingCartProps {
  cartItems: Product[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
  const dispatch: AppDispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => (total + item?.price * (item?.quantity ?? 1)), 0)
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className='shopping-cart'>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='cart-items-list'>
          {cartItems.map((item) => (
            <li key={item?.id} className='cart-item'>
              <div>
                <strong>{item?.title}</strong>
                <p>Price: ₹{item?.price?.toFixed(2)}</p>
                <p>Quantity: {item?.quantity}</p>
              </div>
              <div className='cart-item-right'>
                <img src={item?.image} alt={item?.title} className='product-img' />
                <button
                  onClick={() => handleRemoveFromCart(item?.id)}
                  className='cart-button'
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{Number(calculateTotal())?.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;