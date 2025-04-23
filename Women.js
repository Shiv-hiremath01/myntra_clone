import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';

const Women = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const womenProducts = [
    {
      id: 1,
      title: 'Party wear',
      image: 'https://silvermerc.com/cdn/shop/files/SWF2UR_10_4.jpg?v=1704876628',
      price: 1799,
      subcategory: 'Dresses',
      keywords: ['dress', 'party wear', 'women', 'one piece']
    },
    {
      id: 2,
      title: 'Casual Top',
      image: 'https://stylequotient.co.in/cdn/shop/products/22391504_1.jpg?v=1679458962',
      price: 899,
      subcategory: 'Tops',
      keywords: ['top', 'casual', 'women', 'summer']
    },
    {
      id: 3,
      title: 'skirt',
      image: 'https://www.alamodelabel.in/cdn/shop/products/image_396ce912-1b00-4edd-a96a-5221744326d3.jpg?v=1735465671',
      price: 1599,
      subcategory: 'Pants',
      keywords: ['jeans', 'pants', 'denim', 'women']
    },
    {
      id: 4,
      title: 'Pullover',
      image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/19798116/2022/9/9/bf5314fa-1208-4c4c-9945-9af4452ddc431662728283802-Computerised-Cable-Knit-Pattern-Sweater-291662728283275-1.jpg',
      price: 2499,
      subcategory: 'Jackets',
      keywords: ['pullover', 'winter', 'women', 'sweat t-shirt']
    }
  ];

  const filteredProducts = womenProducts.filter(product =>
    product.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container py-4">
      <Navbar/>
      <h2 className="mb-4">Women's Collection</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by keyword (e.g., dress, top)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row">
        {(searchTerm ? filteredProducts : womenProducts).map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Women;