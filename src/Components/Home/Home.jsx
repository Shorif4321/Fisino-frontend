/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import bannerImgOne from '../../assets/banner-fisino01.png';
import bannerImgTwo from '../../assets/banner-fisino02.png';
import bannerImgThree from '../../assets/banner-fisino03.png';
import Product from '../SignleProduct/Product';

const Home = () => {
    const products = useLoaderData();
    console.log(products);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className='home'>
            <div className="slider-section">
                <Carousel data-bs-theme="dark" className='carousel-fade'>
                    <Carousel.Item>
                        <div className="slideBgOne">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="w-50 mx-auto ps-5 res-width">
                                        <h4 data-aos='fade-left' data-aos-duration='1000' className='animate__animated animate__fadeInRight animated__slower'>New Arrivals 2023</h4>
                                        <h1 data-aos='fade-left' data-aos-duration='1000' className='slider-header pb-4 animate__animated animate__fadeInLeft animated__slower'>Spring <br /> Collection</h1>
                                        <Link data-aos='fade-left' data-aos-duration='1000' to="/products"><button className='btn btn-pink slide-btn rounded-pill animate__animated animate__bounceInDown animated__slower'>Shop Now</button></Link>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 text-center">
                                    <img className='banner-1 pt-4 animate__animated animate__bounceInUp animated__slower' src={bannerImgOne} alt="fisino" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slideBgTwo">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="w-50 mx-auto ps-5 res-width">
                                        <h4 data-aos='fade-left' data-aos-duration='1000' className='animate__animated animate__fadeInRight animated__slower'>New Arrivals 2023</h4>
                                        <h1 data-aos='fade-left' data-aos-duration='1000' className='slider-header pb-4 animate__animated animate__fadeInLeft animated__slower'>Summer <br /> Sale!</h1>
                                        <Link data-aos='fade-left' data-aos-duration='1000' to="/products"><button className='btn btn-pink slide-btn rounded-pill animate__animated animate__bounceInDown animated__slower'>Shop Now</button></Link>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 text-center">
                                    <img className='banner-2 pt-4 animate__animated animate__bounceInUp animated__slower' src={bannerImgTwo} alt="fisino" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slideBgThree">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="w-50 mx-auto ps-5 res-width">
                                        <h4 className='animate__animated animate__fadeInRight animated__slower'>New Arrivals 2023</h4>
                                        <h1 className='slider-header pb-4 animate__animated animate__fadeInLeft animated__slower'>Floral <br /> Collection</h1>
                                        <Link to="/products"><button className='btn btn-pink slide-btn rounded-pill animate__animated animate__bounceInDown animated__slower'>Shop Now</button></Link>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 text-center">
                                    <img className='banner-2 pt-4 animate__animated animate__bounceInUp animated__slower' src={bannerImgThree} alt="fisino" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="book py-3">
                <div className="container">
                    <div data-aos='zoom-in' data-aos-duration="2000" className="w-75 mx-auto hero text-center">
                        <h1 className='pt-5'>LOOK BOOK</h1>
                        <h4 className='pb-5 fw-light'>Collection</h4>
                    </div>
                </div>
            </div>
            <div className="product-top-section">
                <div className="container">
                    <h2 className='text-center py-4 line'>TOP PRODUCTS</h2>
                    <div className="row row-cols-1 row-cols-lg-3 g-4 py-5">
                        {
                            products.map(product => <Product key={product._id} product={product}></Product>
                            )
                        }
                    </div>
                    <Link to='/products' className='w-100 mx-auto text-center d-block pb-5'><button className='btn btn-pink text-white btn-200px rounded-pill'>See All Products</button></Link>

                </div>
            </div>
            <div className="container">
                <div className="add-section py-3">
                    <div className="row g-3">
                        <div className="col-12 col-lg-6">
                            <div data-aos='fade-down' data-aos-duration='2000' className="women">
                                <h1>New <br />Novelty</h1>
                                <p>--- 20% OFF FIRST ORDER</p>
                                <Link to='/products' className='text-dark fw-semibold'>Show Now</Link>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6">
                            <div data-aos='fade-up' data-aos-duration='2000' className="men">
                                <h1>Basic <br />For Men</h1>
                                <p>--- 20% OFF FIRST ORDER</p>
                                <Link to='/products' className='text-dark fw-semibold'>Show Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos='zoom-in' data-aos-duration='2000' className="newslater">
                    <h2 className='text-center'>NEWSLETTER</h2>
                    <h5 className="text-secondary text-center pb-4">Join now and get 10% off your next purchase!</h5>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn" type="button" id="button-addon2">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="sale-section">
                <div data-aos='zoom-in' data-aos-duration='2000' className="container">
                    <h1>There's a <b>sale</b>.</h1>
                    <Link to='/products'><button className='btn btn-pink rounded-pill btn-200px text-white'>Explore Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;