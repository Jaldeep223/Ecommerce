
import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="w-[200px] border border-black rounded-2xl hover:scale-110 transition duration-500">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="w-full h-70 rounded-t-2xl object-cover"
        />
      </Link>
      <p className="mt-1 px-2 text-sm text-gray-800 object-cover">{props.name}</p>
      <div className="flex gap-4 px-2 pb-2">
        <div className="text-gray-800 text-sm font-semibold">£{props.new_price}</div>
        <div className="text-gray-500 text-sm line-through">£{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
