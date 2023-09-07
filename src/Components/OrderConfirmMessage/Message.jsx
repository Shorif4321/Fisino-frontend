/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Message = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className='d-flex w-100 height-700px align-items-center justify-content-center bg-warning-subtle flex-column'>
            <h1 className='text-success'>Your Order Received</h1>
            <h4 className='text-dark fw-light py-4'>Thank You For Choosing Us</h4>
            <Link to='/products'><button className='btn btn-pink btn-200px text-white'>Continue Shop</button></Link>
        </div>
    );
};

export default Message;