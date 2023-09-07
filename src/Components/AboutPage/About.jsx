/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import aboutHero from '../../assets/about-img1.jpg';
import aboutMen from '../../assets/about-img2.jpg';
import aboutWomen from '../../assets/about-img3.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='about'>
            <div className="about-header d-block pt-5">
                <h1 className='py-5 mb-0 mt-5 text-center'>About</h1>
            </div>
            <div className="about-hero p-0 m-0 d-block text-center">
                <img className='w-100 p-0 m-0' src={aboutHero} alt="About Us" />
            </div>
            <div className="container">
                <h1 className='text-center py-4 line' data-aos='fade-up' data-aos-duration='2000'>Our Story is Your Story</h1>
                <p className="py-3 text-center color-text2" data-aos='fade-down' data-aos-duration='2000'>Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Sed cursus turpis vitae tortor. Nullam cursus lacinia erat. Nullam accumsan lorem in dui.Praesent metus semper a, adipiscing nec, purus. Ut a nisl id ante tempus hendrerit. Sed fringilla mauris sit amet nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Quisque id odio.</p>

                <div className="row py-4 align-items-center">
                    <div className="col-12 col-lg-6 text-center py-3">
                        <img data-aos='fade-up' data-aos-duration='3000' className='w-100' src={aboutMen} alt="About Brand" />
                    </div>
                    <div className="col-12 col-lg-6 text-center px-5">
                        <h4 data-aos='fade-down' data-aos-duration='3000' className='line pb-4'>WE ARE A LIFESTYLE BRAND</h4>
                        <p data-aos='fade-up' data-aos-duration='3000' className='color-text2 py-3'>Nullam cursus lacinia erat. Nullam accumsan lorem in dui.Praesent metus semper a, adipiscing nec, purus. Ut a nisl id ante tempus hendrerit. Sed fringilla mauris sit amet nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.</p>

                        <Link data-aos='fade-down' data-aos-duration='3000' to='/products'><button className='btn btn-black-white rounded-0 btn-200px'>Shop For Men</button></Link>
                    </div>
                </div>
                <div className="row py-4 align-items-center flex-wrap-reverse">
                    <div className="col-12 col-lg-6 text-center px-5">
                        <h4 data-aos='fade-up' data-aos-duration='3000' className='line pb-4'>WE ARE A LIFESTYLE BRAND</h4>
                        <p data-aos='fade-down' data-aos-duration='3000' className='color-text2 py-3'>Nullam cursus lacinia erat. Nullam accumsan lorem in dui.Praesent metus semper a, adipiscing nec, purus. Ut a nisl id ante tempus hendrerit. Sed fringilla mauris sit amet nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.</p>

                        <Link data-aos='fade-up' data-aos-duration='3000' to='/products'><button className='btn btn-black-white rounded-0 btn-200px'>Shop For Women</button></Link>
                    </div>
                    <div className="col-12 col-lg-6 text-center py-3">
                        <img data-aos='fade-down' data-aos-duration='3000' className='w-100' src={aboutWomen} alt="About Brand" />
                    </div>
                </div>

            </div>
            <div className="shipping">
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div data-aos='zoom-in' data-aos-duration='3000' className="col-12 col-md-4 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" /></svg>
                            <h4>Shipping Worldwide</h4>
                            <p>Special financing and earn rewards.</p>
                        </div>
                        <div data-aos='zoom-in' data-aos-duration='3000' className="col-12 col-md-4 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" /></svg>
                            <h4>14 Days Return</h4>
                            <p>14-days free return policy.</p>
                        </div>
                        <div data-aos='zoom-in' data-aos-duration='3000' className="col-12 col-md-4 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM144 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z" /></svg>
                            <h4>Security Payment</h4>
                            <p>We accept all major credit cards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;