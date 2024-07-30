import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <div className="component">Product Detail - {params.id} </div>
    </div>
  );
}

export default ProductDetail;
