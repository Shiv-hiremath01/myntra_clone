// pages/Beauty.js
import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';

const Beauty = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const beautyProducts = [
    {
      id: 1,
      title: 'Herbal Face Wash',
      image: 'https://www.khadinatural.com/cdn/shop/files/Artboard_1_edccedfd-a94f-453a-b095-c1f63ba1e90a.jpg?v=1720685954',
      price: 299,
      subcategory: 'Skincare',
      keywords: ['face wash', 'skincare', 'cleanser', 'beauty']
    },
    {
      id: 2,
      title: 'Mascara',
      image: 'https://images-cdn.ubuy.co.in/633ac187b6c47f2f14738695-essence-lash-princess-sculpted-volume.jpg',
      price: 499,
      subcategory: 'Makeup',
      keywords: ['mascara', 'makeup', 'cosmetics', 'beauty']
    },
    {
      id: 3,
      title: 'Nail paint',
      image: 'https://verymiss.in/cdn/shop/files/306_fcaf562b-2d97-4b6a-b884-fa2439657822.jpg?v=1723919143',
      price: 899,
      subcategory: 'Fragrances',
      keywords: ['nail', 'nail paint', 'nail polish', 'beauty']
    },
    {
      id: 4,
      title: 'Shampoo',
      image: 'https://images-static.nykaa.com/media/catalog/product/1/d/1df16528901526004171_1.jpg?tr=w-500',
      price: 349,
      subcategory: 'Hair Care',
      keywords: ['shampoo', 'haircare', 'conditioner', 'beauty']
    }
  ];

  const filteredProducts = beautyProducts.filter(product =>
    product.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container py-4">
      <Navbar/>
      <h2 className="mb-4">Beauty Products</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by keyword (e.g., lipstick, skincare)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row">
        {(searchTerm ? filteredProducts : beautyProducts).map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Beauty;