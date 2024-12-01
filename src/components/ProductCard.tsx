import React from 'react';

import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onClick: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {

  return (
    <div key={product?.id} className={`product-card`}>
      <figure>
        <img src={product?.image} alt={product?.title} className="product-img" />
      </figure>
      <h4>{product?.title}</h4>
      <p>Category: {product?.category}</p>
      <p>Price: ₹{product?.price}</p>
      <button onClick={() => onClick(product?.id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
