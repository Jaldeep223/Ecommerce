import React, { useContext } from 'react';
import remove_icon from "../assets/remove.webp";
import { ShopContext } from '../ShopContext';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const total = getTotalCartAmount();

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-8">Your Cart</h2>

      {/* ---------- Desktop Layout ---------- */}
      <div className="hidden md:grid grid-cols-6 gap-6 font-semibold text-gray-700 border-b pb-2 mb-4">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qty</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* ---------- Cart Items ---------- */}
      <div className="space-y-6">
        {all_product.map((item) => {
          const quantity = cartItems[item.id];
          if (quantity > 0) {
            const totalPrice = item.new_price * quantity;
            return (
              <div key={item.id} className="border-b pb-4">
                {/* Mobile layout */}
                <div className="block md:hidden space-y-2">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">Price: £{item.new_price}</p>
                      <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                      <p className="text-sm text-gray-800 font-semibold">Total: £{totalPrice}</p>
                    </div>
                    <img
                      src={remove_icon}
                      alt="Remove"
                      className="w-4 h-4 ml-auto cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-6 gap-6 items-center text-sm font-medium">
                  <img src={item.image} alt={item.name} className="h-16 object-cover" />
                  <p>{item.name}</p>
                  <p>£{item.new_price}</p>
                  <button className="w-16 h-10 border border-gray-300 text-center">
                    {quantity}
                  </button>
                  <p>£{totalPrice}</p>
                  <img
                    src={remove_icon}
                    alt="Remove"
                    className="w-4 cursor-pointer "
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* ---------- Bottom Section ---------- */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-12">
        
        {/* Totals */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-xl font-bold">Cart Totals</h3>
          <div className="text-sm sm:text-base space-y-3">
            <div className="flex justify-between border-b py-2">
              <span>Subtotal</span>
              <span>£{total}</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between border-b py-2 font-semibold">
              <span>Total</span>
              <span>£{total}</span>
            </div>
          </div>
          <button className="w-full sm:w-60 h-12 bg-[#ff5a5a] text-white font-semibold hover:opacity-90 transition rounded">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-700 mb-2 text-sm">Have a promo code?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 py-2 px-4 border border-gray-300 rounded outline-none"
            />
            <button className="w-full sm:w-[150px] h-12 bg-black text-white rounded hover:opacity-90 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
