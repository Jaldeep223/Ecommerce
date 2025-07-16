import React from 'react';
import new_collections from '../assets/new_collections.js';
import Item from '../components/Item';

const NewCollections = () => {
  return (
    <div className=" flex flex-col items-center gap-2 bg-gradient-to-b from-[#e1ffea22] to-[#47fdae]" style={{marginTop: '30px !important'}}>
      <h1 className="text-[#171717] text-4xl font-semibold">NEW COLLECTIONS</h1>
      <hr className="w-[200px] h-[6px] rounded-xl bg-[#252525]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mt-[50px]">
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
  );
};

export default NewCollections;
