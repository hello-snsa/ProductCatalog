import React, { useState } from "react";

import { Product } from "../types/Product";
import { categories } from "../utils/constants";

interface ProductListProps {
  products: Product[];
  setProducts:(product:Product[])=>void;
}

const FilterPanel: React.FC<ProductListProps> = ({ products, setProducts }) => {

  const [category, setCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);

  const handleFilter = () => {
    const filtered: Product[] = products.filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchesCategory && matchesPrice;
    });
    setProducts(filtered);
  };

  return (
    <div className="filter-body">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories?.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice === 0 ? "" : minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice === Infinity ? "" : maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value) || Infinity)}
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterPanel;
