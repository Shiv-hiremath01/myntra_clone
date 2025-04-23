import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductSection = () => {
    const [product, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
    },[]);
      

  return (
    <div className='container bg-white'>
        <div className='row mt-5'>
         { product.map(product =>(
         <ProductItem key={product.id} product={product}/>)) }
          
        </div>
    </div>
  );
};

export default ProductSection;
