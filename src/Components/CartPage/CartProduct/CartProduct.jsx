/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartProduct = ({ product }) => {
    const [value, setValue] = useState(1);
    const { img, name, seller, price, ratings, shipping } = product;

    const plus = () => {
        setValue(value + 1)
    }
    const minus = () => {
        if(value > 0){
            setValue(value - 1)
        }
    }
    return (
        <div className='row align-items-center justify-content-center py-3'>
            <div className="col-12 col-lg-6">
                <div className="cart-img"><img className='w-75' src={img} alt={name} /></div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="details">
                    <h4><span className='text-secondary'>Ratings:</span> {ratings}</h4>
                    <h1>{name}</h1>
                    <div className="d-flex align-items-center"><h3 className='pe-5'>Price: $ {price}</h3>
                        <h5 className='text-secondary'>Shipping: $ {shipping}</h5></div>
                    <p>Brand: {seller}</p>
                    <p className='color-text'>In order to sit comfortably for long periods, people need freedom of movement. The Form rocking chair has a molded plastic shell with a wide, curved seat…</p>
                    <p className='color-text'>* Certified engineered hardwood frame.</p>
                    <p className='color-text'>* Durable mortise-and-tenon construction.</p>
                    <h3 className='color-text pb-3'>Total: $ {(price + shipping) * value}</h3>
                    <div className="counter">
                        <div className="btn-group pe-0 pe-md-3 shadow-sm" role="group" aria-label="Basic example">
                            <button type="button" onClick={minus} className="btn minus">-</button>
                            <input type="number" className='text-center' disabled value={value} />
                            <button type="button" onClick={plus} className="btn plus">+</button>
                        </div>
                        <Link to='/complete'><button className='btn btn-dark rounded-0 btn-200px orderBtn'>Order Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;