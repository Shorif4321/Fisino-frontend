/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className='bg-light w-100 pb-0 pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <Link to='/' className='logo'><img src={logo} alt="fisino" /></Link>
                        <br />
                        <p className='f-t pt-4'>Telephone : +1-202-555-0184</p>
                        <p className='f-e'>Email : hello@fisinostore.co.uk</p>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h4>Our Service</h4>
                        <ul className='ps-1 color-text2'>
                            <li>Track My Order</li>
                            <li>Returns</li>
                            <li>Shipping Terms</li>
                            <li>Payment Policy</li>
                            <li>After pay</li>
                            <li>FAQ</li>
                            <li>Warranty & Repair</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h4>My Account</h4>
                        <ul className="ps-1">
                            <li><Link to='/register' className='color-text2'>Create Account</Link></li>
                            <li><Link to='/login' className='color-text2'>Account</Link></li>
                            <li><Link to='/contact' className='color-text2'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h4>About Us</h4>
                        <ul className="ps-1">
                            <li><Link to='/about' className='color-text2'>About Us</Link></li>
                            <li className='color-text2'>Careers</li>
                            <li className='color-text2'>Investor Relations</li>
                            <li className='color-text2'>Supply Chain Disclosure</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="short-footer bg-white">
                <div className="container d-flex justify-content-center align-items-center">
                    <p className='py-3 m-0'>©2021 Fisino Store</p>
                    <p className='py-3 m-0 px-3 color-text2'>Privacy Policy</p>
                    <p className='py-3 m-0 color-text2'>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;