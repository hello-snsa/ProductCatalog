import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import './Home.css';
import ProductList from "../components/ProductList";
import { AppDispatch } from "../store/store";
import { fetchData } from "../services/api";
import FilterPanel from "../components/FilterPanel";
import Loader from "../components/Loader";
import { Product } from "../types/Product";

const Home: React.FC = () => {

  const [searchText, setSearchText] = useState('');
  const [productListData, setProductListData] = useState([]);
  const [filteredList, setFilteredList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const getData = async () => {
    try {
      const data = await fetchData();
      setProductListData(data);
      setFilteredList(data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching data', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const getSearchData = () => {
    const searchData: Product[] = productListData?.filter((item: Product) => ((item?.title)?.toLowerCase()?.includes(searchText?.toLowerCase())))
    setFilteredList(searchData);
  }
  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [dispatch]);

  useEffect(() => {
    getSearchData()
  }, [searchText]);

  return (
    <div className="home">
      <Loader isLoading={isLoading} />
      <div className="flex home-header">
        <h1>Product Catalog</h1>
        <input type="text" className="search-box" value={searchText} onChange={handleChange} placeholder="search product" />
        <FilterPanel products={productListData} setProducts={setFilteredList} />
      </div>
      <div>
        <ProductList products={filteredList} />
      </div>
    </div>
  );
};

export default Home;
