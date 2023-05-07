import React from "react";
import "./Nav.style.css";
const Nav=()=>(
    <div className="outer-wrapper"> 
    <header className="header-wrapper">
        <div className="internal-wrapper"> 
            <div className="header-links-wrapper">
                <ul>
                    <li className="logo-link"><a href="/"><img src="../../src/assets/icons/logo.svg"/></a></li>
                    <li><a href="/store/">Store</a></li>
                    <li><a href="/mac/">Mac</a></li>
                    <li><a href="#">ipad</a></li>
                    <li><a href="#">iphone</a></li>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">Tv & Home</a></li>
                    <li><a href="#">Entertainment</a></li>
                    <li><a href="#">Support</a></li>
                    <li className="search-link"><a href="/search/"><img src="../../src/assets/icons/search-icon.png"/></a></li>
                    <li className="cart-link"><a  href="/cart/"><img src="../../src/assets/icons/cart.png"/></a></li>
                    
                </ul>					
            </div>
        </div>
    </header>
    </div>
);

export default Nav;