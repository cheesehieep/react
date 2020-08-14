import React, {useHistory, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Header = props => { 
    const carts = JSON.parse(localStorage.getItem('carts'));
    return (
        <div>
            <div className="site-navbar bg-white py-2">
                <div className="search-wrap">
                <div className="container">
                    <a href="#" className="search-close js-search-close"><span className="icon-close2" /></a>
                    <form action="#" method="post">
                    <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
                    </form>  
                </div>
                </div>
                <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo">
                    <div className="site-logo">
                        <Link to="/" className="js-logo-clone">ShopMax</Link>
                    </div>
                    </div>
                    <div className="main-nav d-none d-lg-block">
                    <nav className="site-navigation text-right text-md-center" role="navigation">
                        <ul className="site-menu js-clone-nav d-none d-lg-block">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    </div>
                    <div className="icons">
                    <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search" /></a>
                    <a href="#" className="icons-btn d-inline-block"><span className="icon-heart-o" /></a>
                    <Link to="/cart" className="icons-btn d-inline-block bag">
                        <span className="icon-shopping-bag" />
                        <span className="number">{carts.length}</span>
                    </Link>
                    <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu" /></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header
