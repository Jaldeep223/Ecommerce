import React, { useContext } from 'react';
import remove_icon from "../assets/remove.webp";
import { ShopContext } from '../ShopContext';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className=" mx-[70px] my-[50px]">
      {/* Header row */}
      <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[30px] py-2 text-[#454545] text-lg font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-0" />

      {/* Cart items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[30px] py-2 text-base font-medium">
                <img src={e.image} alt="" className="h-[50px]" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="h-[40px] w-[100px] border border-gray-300">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="Remove"
                  className="w-[15px] mx-[30px] cursor-pointer"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr className="h-[3px] bg-[#e2e2e2] border-0" />
            </div>
          );
        }
        return null;
      })}

      {/* Bottom section */}
      <div className="flex flex-col lg:flex-row mt-[70px] mb-[70px] gap-8">
        {/* Cart totals */}
        <div className="flex-1 flex flex-col gap-[30px] lg:mr-[200px]">
          <h1 className="text-2xl font-bold">Cart Totals</h1>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-300">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-300">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-300">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button className="w-[250px] h-[50px] bg-[#ff5a5a] text-white text-base font-semibold hover:opacity-90 transition cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo code section */}
        <div className="flex-1 text-base font-medium">
          <p className="text-gray-600">If you have a promo code, enter it here</p>
          <div className="w-[300px] h-[50px] bg-[#eaeaea] mt-4 flex items-center pl-5">
            <input
              type="text"
              placeholder="Promo code"
              className="bg-transparent outline-none border-none text-base w-full h-full"
            />
            <button className="w-[150px] h-[50px] bg-black text-white text-base font-medium hover:opacity-90 transition cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

