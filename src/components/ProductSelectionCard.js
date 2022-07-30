import React from "react";

function ProductSelectionCard({ img }) {
  return (
    <div className="aspect-square cursor-pointer">
      <img src={img} className="w-full h-full object-cover" alt="" />
    </div>
  );
}

export default ProductSelectionCard;
