import React from 'react';
import arrow_icon from "../assets/arrow_icon.png";

const Bredcrums = (props) => {
  const { product } = props;

  return (
    <div className="flex items-center justify-center gap-2 text-gray-500 text-base font-semibold mt-8 mb-8 capitalize">
      Home 
      <img src={arrow_icon} alt="" className="h-2.5" />
      SHOP 
      <img src={arrow_icon} alt="" className="h-2.5" />
      {product.category} 
      <img src={arrow_icon} alt="" className="h-2.5" />
      {product.name}
    </div>
  );
};

export default Bredcrums;
