import React from 'react';
import new_collections from '../assets/new_collections.js';
import Item from '../components/Item';

const NewCollections = () => {
  return (
    <div className="w-full px-4 py-12 bg-gradient-to-b from-[#e1ffea22] to-[#47fdae]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h1 className="text-[#171717] text-3xl sm:text-4xl font-semibold text-center">
          NEW COLLECTIONS
        </h1>
        <hr className="w-40 h-[6px] rounded-xl bg-[#252525] my-4" />

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 w-full">
          {new_collections.map((item, i) => (
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
    </div>
  );
};

export default NewCollections;

