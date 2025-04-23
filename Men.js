import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';

const Men = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const menProducts = [
    {
      id: 1,
      title: 'Classic Hoodie',
      image: 'https://imgs.search.brave.com/9GVxRjSUK0zNLQkx86hpSGWSbaNKPZhwmQTPfpUfDN8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly85MzAt/Y2x1Yi5teXNob3Bp/ZnkuY29tL2Nkbi9z/aG9wL3Byb2R1Y3Rz/LzkzMF9jbGFzc2lj/X2hvb2RpZV9zaG9w/aWZ5XzEwMjR4MTAy/NC5qcGc_dj0xNTQy/NzUyMDY0',
      price: 1499,
      subcategory: 'Hoodies',
      keywords: ['hoodie', 'winter', 'warm', 'men']
    },
    {
      id: 2,
      title: 'Cotton T-Shirt',
      image: 'https://imgs.search.brave.com/WWX9PUYE-863kJIKE7Oos-3QPrksiMBPQc7RxfGBB7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmV4dGxldmVsYXBw/YXJlbC5jb20vY2Ru/L3Nob3AvZmlsZXMv/ODQwMjYxNjUyMDE5/XzEuanBnP3Y9MTc0/NDc1ODM0NSZ3aWR0/aD01MDAw',
      price: 699,
      subcategory: 'T-Shirts',
      keywords: ['tshirt', 'cotton', 'summer', 'men']
    },
    {
      id: 3,
      title: 'Formal Shirt',
      image: 'https://www.montecarlo.in/cdn/shop/files/2240401494FS-1-38_1.jpg?v=1729776068',
      price: 1199,
      subcategory: 'Shirts',
      keywords: ['shirt', 'formal', 'office', 'men']
    },
    {
      id: 4,
      title: 'Cargo Shorts',
      image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/AUGUST/28/YLYwPQBd_560dd00dd5da4693a378e9324c3fd4a7.jpg',
      price: 1799,
      subcategory: 'Pants',
      keywords: ['cargo', 'denim', 'shorts', 'men']
    }
  ];

  const filteredProducts = menProducts.filter(product =>
    product.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container py-4">
      <Navbar/>
      <h2 className="mb-4">Men's Collection</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by keyword (e.g., hoodie, shirt)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row">
        {(searchTerm ? filteredProducts : menProducts).map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Men;