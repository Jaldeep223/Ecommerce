import React from 'react';
import Item from '../components/Item';
import data_product from '../assets/data';

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4  sm:px-6 md:px-10">
      <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
        Related Products
      </h1>
      <hr className="mt-2 w-32 sm:w-40 md:w-52 h-1.5 rounded-xl bg-[#252525] border-0" />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

export default RelatedProducts;

