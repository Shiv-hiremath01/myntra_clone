import axios from 'axios';
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST } from './types';

export const fetchProductsByCategoryAndKeyword = (category, keyword) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    const filteredProducts = response.data.filter(product => 
      product.title.toLowerCase().includes(keyword.toLowerCase()) || 
      product.description.toLowerCase().includes(keyword.toLowerCase())
    );
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: filteredProducts,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};