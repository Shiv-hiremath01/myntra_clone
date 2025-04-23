import React from 'react'
import  {Link}  from 'react-router-dom'
import setCurrentProduct from '../actions/setCurrentProduct'
import {useDispatch} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {addToWishlist} from '../actions/wishlistActions'



function IconList({product}) {
    let dispatch= useDispatch()


    let handleProductClick=()=>{
        dispatch(setCurrentProduct(product))
    }


    let handleShoppingBagClick=()=>{
        dispatch(addToCart(product));
        alert('Added to Cart')
    };

    let handleHeartClick=()=>{
        dispatch(addToWishlist(product));
    }
    
    return (
    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
        
        <li className="icon">
                <Link to={{pathname:'/details/'}} onClick={ handleProductClick } >
            
                    <span className="fas fa-expand-arrows-alt"></span>
                
            </Link>
        </li>



        <li className="icon mx-3" onClick={handleHeartClick}>
                
                
                    <span className="far fa-heart"></span>
            
            
        </li>


        <li className="icon" onClick={handleShoppingBagClick}>
           
                
                    <span className="fas fa-shopping-bag"></span>
            
           
        </li>

    </ul>
  )
}

export default IconList