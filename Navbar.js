import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {logoutUser} from '../actions/authAction'

function Navbar() {
    const cartCounter = useSelector(state => state.cart.cartCounter);
    const user = useSelector((state) => state.user?.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
      
        const raw = searchTerm.trim().toLowerCase();
        if (!raw) return;
      
        // full list of category routes you support
        const categories = ['men', 'women', 'kids', 'beauty', 'living'];
      
        // split user input, first word might be category
        const [firstWord, ...rest] = raw.split(/\s+/);
      
        let category = 'men';          // default route if none detected
        let keyword  = raw;            // default keyword = full string
      
        if (categories.includes(firstWord)) {
          category = firstWord;        // route = that category
          keyword  = rest.join(' ');   // keyword = everything after it
        }
      
        // build url:  /men?search=hoodie   or /women?search=dress
        navigate(`/${category}?search=${encodeURIComponent(keyword)}`);
      };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img src="https://img-cdn.thepublive.com/filters:format(webp)/afaqs/media/post_attachments/b846276869df8372f476a9c0c9a4599aa272fe5ec8d7d2880f64ff301fe5d425.png" alt="" width="70" />
                    </Link>

                    <button className="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="myNav">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" aria-current="page" to="/men">Men</Link>
                            <Link className="nav-link" aria-current="page" to="/women">Women</Link>
                            <Link className="nav-link" aria-current="page" to="/kids">Kids</Link>
                            <Link className="nav-link" aria-current="page" to="/beauty">Beauty</Link>
                            <Link className="nav-link" aria-current="page" to="/living">Living</Link>
                            <Link className="icon mt-2 px-3" to='/cart'><span className="fas fa-shopping-bag"></span> {cartCounter}</Link>
                            <Link className="icon mx-3" to='/wishlist'><span className="far fa-heart"></span></Link>
                            {!user ? (
                                <>
                                    <Link className="nav-link" to="/login">Login</Link>
                                    <Link className="nav-link" to="/register">Register</Link>
                                </>
                            ) : (
                                <>
                                    <span className="nav-link">Hi, {user.name}</span>
                                    <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => dispatch(logoutUser())}>Logout</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                

                
                <div>
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <Outlet></Outlet>
        </div>
    );
}

export default Navbar;


