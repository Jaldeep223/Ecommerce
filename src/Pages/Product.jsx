import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext';
import { useParams } from 'react-router-dom';
import Bredcrums from '../components/Bredcrums';
import ProductDisplay from '../components/ProductDisplay';
import Description from '../components/Description';
import RelatedProducts from '../components/RelatedProducts';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === parseInt(productId));
  return (
    <div>
      <Bredcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product