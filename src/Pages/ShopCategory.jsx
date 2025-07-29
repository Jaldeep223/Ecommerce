import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../components/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category flex flex-col items-center gap-10 mt-10 mb-20">
      {/* Banner Image */}
      <img
        className="m-1  w-full md:w-[82%]"
        src={props.banner}
        alt=""
      />
      
      {/* Sort Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full px-5 md:px-32">
        <p className="text-sm sm:text-base">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="px-5 py-2.5 rounded-full border border-gray-500 flex items-center gap-2 cursor-pointer">
          Sort by <img src={dropdown_icon} alt="dropdown" className="h-5" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[80px] mx-auto mt-5 w-full px-5 sm:px-10 md:px-32">
        {all_product.map((item, i) =>
          props.category === item.category ? (
            <Item
              key={item.id}  // Use item.id instead of index for uniqueness
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        )}
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center items-center mx-auto my-16 w-[200px] h-[60px] rounded-[75px] bg-gray-200 text-[#272424] text-lg font-medium cursor-pointer">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;

