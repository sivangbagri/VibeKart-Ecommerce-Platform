import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, setProducts, products } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };
  return (
    <>
      <div className="home">
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category categories={categories} />
            <Products products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
