import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "../Button/Button.scss"
import next from "./next.svg"

import './NavigationBar.scss';

function NavigationBar({ handleNoScroll }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const checkWindowSize = () => {
        if (window.innerWidth >= 768) {
            setIsNavOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', checkWindowSize);
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    useEffect(() => {
        handleNoScroll(isNavOpen);
    }, [isNavOpen, handleNoScroll]);

    const products = document.querySelector('.all-products')
    const hideNavOnClickOutside = (event) => {
        const navbar = document.querySelector('.navigation-bar');
        const btn = document.getElementById('menu-btn')
        const nav = document.getElementById('menu')

        if (
            !navbar.contains(event.target) &&
            !nav.contains(event.target) &&
            !btn.contains(event.target) &&
            !products.contains(event.target)
        ) {
            setIsNavOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', hideNavOnClickOutside);
        return () => {
            document.removeEventListener('click', hideNavOnClickOutside);
        };
    }, []);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const returnToMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (isNavOpen) {
            setIsMenuOpen(!isNavOpen)
        }
        else {
            setIsMenuOpen(isNavOpen)
        }

    }, [isNavOpen])

    return (
        <>
            <nav className="navigation-bar">
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src="./images/logo.svg"></img>
                        </Link>
                    </div>
                    <ul className="navbar-nav-left">
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/rewards">Rewards</Link>
                        </li>
                        <li>
                            <a href="#">Gift Cards</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav-right">
                        <li>
                            <a href="#">
                                <svg
                                    fill="#000000"
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 395.71 395.71"
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <path
                                            d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
            c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
            C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
            c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                                        />
                                    </g>
                                </svg>
                                <span>Find a store</span>
                            </a>
                        </li>
                        <li>
                            <button className="button button-dark-outline">Sign In</button>
                        </li>
                        <li>
                            <button className="button button-dark">Join Now</button>
                        </li>
                    </ul>
                    {/*
              Hamburger Menu
          */}
                    <button onClick={toggleNav} type="button" className={isNavOpen ? 'hamburger open' : 'hamburger'} id="menu-btn">
                        <span className="hamburger--top" />
                        <span className="hamburger--middle" />
                        <span className="hamburger--bottom" />
                    </button>
                </div>
            </nav>
            {/* Mobile menu */}
            <div className={isNavOpen ? 'mobile-menu' : 'mobile-menu hidden'} id="menu">
                <ul className="navbar-head">
                    <li>
                        <p onClick={handleMenuClick}>Menu</p>
                    </li>
                    <li>
                        <Link to="/rewards">Rewards</Link>
                    </li>
                    <li>
                        <Link to="">Gift Cards</Link>
                    </li>
                </ul>
                <div className="mobile-menu-bottom">
                    <botton className="button button-dark-outline">Sign In</botton>
                    <botton className="button button-dark">Join Now</botton>
                    <div>
                        <a href="#">
                            <svg
                                fill="#000000"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="800px"
                                height="800px"
                                viewBox="0 0 395.71 395.71"
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path
                                        d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
            c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
            C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
            c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                                    />
                                </g>
                            </svg>
                            Find a Store
                        </a>
                    </div>
                </div>
            </div>
            <div className={isMenuOpen ? "all-products" : "all-products hidden"}>
                <ul className="items-container">
                    <li>
                        <button onClick={returnToMenu}>
                            <span>Back to Menu</span>
                            <img src={next} />
                        </button>

                    </li>
                    <li>
                        <Link to="/rewards">All products</Link>
                    </li>
                    <li>
                        <Link to="">Feature</Link>
                    </li>
                    <li>
                        <Link to="">Previous Orders</Link>
                    </li>
                    <li>
                        <Link to="">Favorite Products</Link>
                    </li>
                </ul>

            </div>
        </>
    )
}



export default NavigationBar