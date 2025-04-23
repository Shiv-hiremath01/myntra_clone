// pages/Kids.js
import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';

const Kids = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const kidsProducts = [
    {
      id: 1,
      title: 'Cartoon Print T-Shirt',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlY4ttzp74y3-W5DGgQnrxtqXmkKGNhDC6bA&s',
      price: 499,
      subcategory: 'T-Shirts',
      keywords: ['tshirt', 'cartoon', 'kids', 'summer']
    },
    {
      id: 2,
      title: 'Playful Shorts',
      image: 'https://img.tatacliq.com/images/i20//437Wx649H/MP000000023831518_437Wx649H_202409251250051.jpeg',
      price: 399,
      subcategory: 'Shorts',
      keywords: ['shorts', 'play', 'kids', 'activewear']
    },
    {
      id: 3,
      title: 'Warm Hoodie Jacket',
      image: 'https://m.media-amazon.com/images/I/81xNYSWdicL.jpg',
      price: 999,
      subcategory: 'Jackets',
      keywords: ['hoodie', 'jacket', 'winter', 'kids']
    },
    {
      id: 4,
      title: 'Cute Sneakers',
      image: 'https://s.alicdn.com/@sc04/kf/H6479f60f0ddf44e898c4a435779e1658u.jpg_720x720q50.jpg',
      price: 1199,
      subcategory: 'Shoes',
      keywords: ['shoes', 'sneakers', 'kids', 'footwear']
    }
  ];

  const filteredProducts = kidsProducts.filter(product =>
    product.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container py-4">
      <Navbar/>
      <h2 className="mb-4">Kids' Collection</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by keyword (e.g., shoes, t-shirt)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row">
        {(searchTerm ? filteredProducts : kidsProducts).map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Kids;