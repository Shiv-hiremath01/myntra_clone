import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';

const Living = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const livingProducts = [
    {
      id: 1,
      title: 'PC Table',
      image: 'https://images.woodenstreet.de/image/cache/data/study-tables-mdf/calisto-engineered-wood-study-table-flowery-wenge-frosty-white/exotic-teak-frosty-white-finish/1-750x650.jpg',
      price: 3999,
      subcategory: 'Furniture',
      keywords: ['table', 'PC', 'furniture', 'PC table', 'living']
    },
    {
      id: 2,
      title: 'reading table',
      image: 'https://top10wood.com/wp-content/uploads/2024/05/data_study-table_adolph-study-table_resize_honey-finish_new-logo_1-810x702-1.webp',
      price: 1499,
      subcategory: 'Decor',
      keywords: ['art', 'canvas', 'decor', 'wall', 'living']
    },
    {
      id: 3,
      title: 'LED Floor Lamp',
      image: 'https://smartwaylighting.com/cdn/shop/files/Hdfe853e5709f4ebcbffae810f3970885E.jpg_960x960_496e63da-d638-46b7-af28-b40c83152c22.webp?v=1741627087',
      price: 2499,
      subcategory: 'Lighting',
      keywords: ['lamp', 'light', 'floor', 'lighting', 'living']
    },
    {
      id: 4,
      title: 'storage compartment',
      image: 'https://www.ikea.com/in/en/images/products/uppsnofsad-storage-box-with-lid-black__0956857_pe804848_s5.jpg?f=s',
      price: 2799,
      subcategory: 'Storage',
      keywords: ['storage', 'ottoman', 'furniture', 'living']
    }
  ];

  const filteredProducts = livingProducts.filter(product =>
    product.keywords.some(keyword =>
      keyword.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container py-4">
      <Navbar/>
      <h2 className="mb-4">Living Essentials</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by keyword (e.g., lamp, decor, storage)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row">
        {(searchTerm ? filteredProducts : livingProducts).map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Living;