import React, { useState } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { useAuth } from '../config/Context'; 
import './Styles/Navbar.css';
import { carticon } from '../assets';
import { useRecoilValue } from 'recoil';
import { CartState } from './Shop';
import Cart from './Cart';
import { FaTimes } from 'react-icons/fa';
import { getAuth, signOut } from "firebase/auth"; 

const Navbar = () => {
    const { user } = useAuth(); 
    const navigate = useNavigate();
    const matchHome = useMatch("/");
    const matchShop = useMatch("/shop/*");
    const matchBlogs = useMatch("/blogs/*");
    const cart = useRecoilValue(CartState);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const auth = getAuth(); 

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
                navigate('/login'); 
            })
            .catch((error) => {
                console.error("Sign-out error:", error);
                alert("Sign out failed: " + error.message);
            });
    };

    return (
        <header>
            <div className="nav-container">
                <h2 className="logo">
                    <Link to="/">Kahani Khane Ki</Link>
                </h2>
                <nav className={`site-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" className={matchHome ? "active" : ""}>Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className={matchShop ? "active" : ""}>Shop</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className={matchBlogs ? "active" : ""}>Blogs</Link>
                        </li>
                        {user ? (
                            <>
                                <li>
                                    <span className="user-greeting">
                                        {user.displayName ? `Hi, ${user.displayName}` : `Hi, ${user.email?.split("@")[0] || 'User'}`} 
                                    </span>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className="signout-button">Sign Out</button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/signup" className="account-link">Account</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={toggleMobileMenu}>
                    <div className="hamburger"></div>
                </div>
                <div className="cart-container">
                    <button onClick={toggleSidebar} className='cart-btn'>
                        <div className='cart'>
                            <img src={carticon} alt="Cart" width="30px" />
                            <p className='cart-value'>{Object.keys(cart).length}</p>
                        </div>
                    </button>
                    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar hide-sidebar'}`}>
                        <div className='sidebar-header'>
                            <h1>Cart</h1>
                            <button className='close-btn' onClick={toggleSidebar}>
                                <FaTimes />
                            </button>
                        </div>
                        <Cart />
                    </aside>
                </div>
            </div>
        </header>
    );
};

export default Navbar;