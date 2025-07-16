import React, { useContext } from 'react';
import star_icon from "../assets/star_icon.webp";
import star_dull_icon from "../assets/dull_star.png";
import { ShopContext } from '../ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addTocart } = useContext(ShopContext);

  return (
    <div className="flex mx-12">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2.5">
          <img src={product.image} alt="" className="h-40 object-cover" />
          <img src={product.image} alt="" className="h-40 object-cover" />
          <img src={product.image} alt="" className="h-40 object-cover" />
        </div>
        <div>
          <img src={product.image} alt="" className="h-[500px] object-cover" />
        </div>
      </div>

      <div className="ml-12 flex flex-col">
        <h1 className="text-[#3d3d3d] text-4xl font-extrabold">{product.name}</h1>

        <div className="flex items-center mt-2.5 gap-4 text-[#1c1c1c] text-base">
          <img src={star_icon} alt="star" className="h-5" />
          <img src={star_icon} alt="star" className="h-5" />
          <img src={star_icon} alt="star" className="h-5" />
          <img src={star_icon} alt="star" className="h-5" />
          <img src={star_dull_icon} alt="star dull" className="h-5" />
          <p>(130)</p>
        </div>

        <div className="flex mt-5 mb-5 gap-7.5 text-xl font-extrabold">
          <div className="text-gray-500 line-through">${product.old_price}</div>
          <div className="text-red-600">${product.new_price}</div>
        </div>

        <div className="text-gray-600 mb-5 max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti quibusdam? Quam omnis saepe et expedita ratione, quasi unde repudiandae.
        </div>

        <div>
          <h1 className="mt-2.5 text-gray-600 text-base font-semibold">Select Size</h1>
          <div className="flex mt-5 mb-5 gap-5">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <div key={size} className="px-5 py-4 bg-gray-50 border border-gray-200 rounded cursor-pointer select-none">
                {size}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => addTocart(product.id)}
          className="px-10 py-5 w-[400px] text-white text-lg font-semibold bg-red-600 mb-5 border-none outline-none cursor-pointer rounded"
        >
          ADD TO CART
        </button>

        <div className="mt-2.5 font-semibold">
          <span>
            Category:
            <span className="font-normal ml-1">Women, T-Shirt, Crop Top</span>
          </span>
        </div>
        <div className="mt-2.5 font-semibold">
          <span>
            Tags:
            <span className="font-normal ml-1">Modern, Latest, Trend Shorts</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
