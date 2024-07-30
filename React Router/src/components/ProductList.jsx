import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";

const ProductList = () => {
  // const [searchParam,setSearchParam] = useSearchParams();
  // http://localhost:5173/products?keyword=react&instock=true&rating=4
  const [searchParam] = useSearchParams();
  console.log(
    searchParam.get("keyword"),
    searchParam.get("instock"),
    searchParam.get("rating")
  );
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div className="component">List</div>
    </div>
  );
};

export default ProductList;
