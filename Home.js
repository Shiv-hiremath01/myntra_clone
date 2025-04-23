import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Ads from '../components/Ads'
import '../App.css';
import ProductSection from '../components/ProductSection'

function Home() {
  let productArray = [
      {
          name: 'Mens Collection',
          desc: 'For the Men of Class.',
          img: 'https://www.candere.com/static/version1745255094/frontend/Codilar/candere_mobile/en_US/Magento_Cms/images/mens_collection/banner.jpg'
      },
     
      {
          name: 'Womens Collection',
          desc: 'Ethnic wear',
          img: 'https://ambraee.com/cdn/shop/files/jpeg-optimizer_Banner_copy.jpg?v=1743057473&width=2160'
      },

      {
        name: 'Kids Collection',
        desc: 'Get 40% off on kids wear',
        img: 'https://www.1stkidswholesale.co.uk/pub/media/wysiwyg/home/kids-collection.jpg.pagespeed.ce.qsSXCV3izM.jpg'
      },
      {
          name: 'Beauty',
          desc: 'Find top brand Cosmetics',
          img: 'https://www.coloressence.com/cdn/shop/files/Artboard_3_1cbd472a-320f-45ea-9682-6a571f6f4675.jpg?v=1737981527'
      }
  ]

  return (
      <div className='container-fluid'>
          <Navbar />
          <Carousel />
          <div className='row flex-nowrap overflow-auto'>
              {productArray.map(el => (
                  <Ads key={el.name} name={el.name} desc={el.desc} img={el.img} />
              ))}
          </div>
          <ProductSection />
      </div>
  )
}




export default Home