import React from 'react'
import {useSelector} from "react-redux"
import Productdetails from '../components/Productdetails'
import Navbar from '../components/Navbar'


let Details = () => {
    let product = useSelector((state)=> state.currentProduct.product)


  return (
    <>
        <div className='container-fluid'>
            <Navbar/>
        </div>

        <div className='container'>
            <Productdetails product={product}/>
        </div>
    </>
  )
}

export default Details