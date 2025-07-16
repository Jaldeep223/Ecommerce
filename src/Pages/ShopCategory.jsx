import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../components/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category flex flex-col items-center gap-10 mt-10 mb-20">
      <img
        className="block mx-auto my-8 w-[82%]"
        src={props.banner}
        alt=""
      />
      <div className="flex justify-space-between items-center mx-[170px]">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="px-5 py-2.5 rounded-full border border-gray-500 flex items-center gap-2 cursor-pointer">
          Sort by <img src={dropdown_icon} alt="" className="h-5" />
        </div>
      </div>

      <div className="  grid grid-cols-4 gap-y-[80px] mx-[170px] mt-5">
        {all_product.map((item, i) =>
          props.category === item.category ? (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        )}
      </div>

      <div className="flex justify-center items-center mx-auto my-16 w-[200px] h-[60px] rounded-[75px] bg-gray-200 text-[#272424] text-lg font-medium cursor-pointer">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;
