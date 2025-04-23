import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../actions/wishlistActions";


const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card mb-3">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">${item.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;