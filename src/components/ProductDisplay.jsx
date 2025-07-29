import React, { useContext, useState } from 'react';
import star_icon from "../assets/star_icon.webp";
import star_dull_icon from "../assets/dull_star.png";
import { ShopContext } from '../ShopContext';

const ProductDisplay = ({ product }) => {
  const { addTocart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 sm:p-6 md:px-10 lg:mx-12">
      {/* Image Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Thumbnails */}

        {/* Main Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-auto sm:h-[400px] md:h-[500px] object-cover rounded"
            loading="lazy"
          />
        </div>

        <div className="flex sm:flex-col gap-2.5">
          {[1, 2, 3].map((_, index) => (
            <img
              key={index}
              src={product.image}
              alt={`Thumbnail ${index + 1} of ${product.name}`}
              className="h-28 sm:h-36 md:h-40 object-cover rounded"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col gap-4 lg:ml-8">
        <h1 className="text-gray-800 text-2xl sm:text-3xl font-extrabold">
          {product.name}
        </h1>

        {/* Ratings */}
        <div className="flex items-center gap-2 text-sm text-gray-800">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={i < 4 ? star_icon : star_dull_icon}
              alt={`Rating star ${i + 1}`}
              className="h-5"
            />
          ))}
          <p className="ml-1 text-gray-600">(130)</p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 text-lg font-semibold">
          <span className="text-gray-400 line-through">
            £{product.old_price}
          </span>
          <span className="text-red-600 text-xl">£{product.new_price}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 max-w-xl text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti
          quibusdam? Quam omnis saepe et expedita ratione, quasi unde
          repudiandae.
        </p>

        {/* Size Selection */}
        <div>
          <p className="text-gray-700 text-sm font-semibold mb-2">
            Select Size
          </p>
          <div className="flex gap-3 flex-wrap">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md text-sm font-medium ${
                  selectedSize === size
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-gray-50 text-gray-700 border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addTocart(product.id)}
          aria-label="Add product to cart"
          className="mt-4 w-full max-w-xs sm:max-w-md bg-red-600 text-white text-base font-semibold py-3 rounded hover:bg-red-700 transition"
        >
          ADD TO CART
        </button>

        {/* Category & Tags */}
        <div className="text-sm text-gray-700 mt-2">
          <p>
            <span className="font-semibold">Category:</span>
            <span className="ml-1 font-normal">Women, T-Shirt, Crop Top</span>
          </p>
          <p className="mt-1">
            <span className="font-semibold">Tags:</span>
            <span className="ml-1 font-normal">
              Modern, Latest, Trend Shorts
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
