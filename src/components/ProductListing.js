import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts, setProducts } from "../redux/actions/productActions";

function ProductListing(props) {
  const data = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

//   const loadProduct = async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     dispatch(setProducts(response.data));
//   };

  useEffect(() => {
    // loadProduct();
    dispatch(fetchProducts())
  }, []);

  console.log(data);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
