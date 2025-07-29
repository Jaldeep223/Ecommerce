import React from 'react';
import Item from "../components/Item";
import data_product from '../assets/data';

const Popular = () => {
  return (
    <div className="flex flex-col items-center  gap-8 py-10 px-4 bg-gradient-to-b from-[#e1ffea22] to-[#47fdae] ">
      <h1 className="text-[#171717] text-3xl md:text-4xl font-semibold">POPULAR</h1>
      <hr className="w-40 h-1.5 rounded-lg bg-[#252525] border-none" />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

