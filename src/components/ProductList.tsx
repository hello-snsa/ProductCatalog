import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ProductList.css';
import { AppDispatch } from "../store/store";
import { addToCart } from "../store/cartReducer";
import { Product } from "../types/Product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleAddToCart = (productId: number) => {
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      dispatch(addToCart(productToAdd));
      notify();
    }
  };

  const notify = () => toast("Item added to cart");

  return (
    <div className="product-list">
      <ToastContainer />
      <div className={`flex wrap`}>
        {products?.length <= 0 ?
          <p>0 Results Found</p> :
          products?.map((product, i) => (
            <ProductCard product={product} onClick={handleAddToCart} key={i} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
