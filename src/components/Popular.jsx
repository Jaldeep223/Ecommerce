import React from 'react';
import Item from "../components/Item";
import data_product from '../assets/data';

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-8.5 h-[90vh] bg-gradient-to-b from-[#e1ffea22] to-[#47fdae] ">
      <h1 className="text-[#171717] text-4xl font-semibold">POPULAR</h1>
      <hr className="w-[200px] h-1.5 rounded-lg bg-[#252525] border-none" />
      <div className="mt-10 flex gap-9.5">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
