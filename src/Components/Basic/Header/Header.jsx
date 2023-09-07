/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { WebController } from '../../../ParentContext/Context';

const Header = () => {
    const { userInfo, logOut, verify } = useContext(WebController);
    // console.log(userInfo);
    const verifyAccount = () => {
        verify();
    }
    const signOut = () => {
        logOut()
    }
    const showDetails = () => {
        const details = document.getElementById('details');
        if (details.style.display == 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    }

    window.onscroll = () => {
        const header = document.querySelector('header');
        if (window.pageYOffset > 100) {
            header.style.backgroundColor = '#ffffffe9';
            header.style.boxShadow = '0 0 4px #00000090';
        } else {
            header.style.backgroundColor = 'transparent'
            header.style.boxShadow = 'none';
        }
    }

    return (
        <header>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand><Link to='/' className='logo'><img src={logo} alt="fisino" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to='/' className='color-text fw-semibold px-3 py-3 nav-link'>Home</Link>

                            {
                                userInfo?.uid ? <Link to='/orders' className='color-text fw-semibold px-3 py-3 nav-link'>Orders</Link> : undefined
                            }

                            <Link to='/cart' className='color-text fw-semibold px-3 py-3 nav-link'>Cart</Link>
                            <Link to='/products' className='color-text fw-semibold px-3 py-3 nav-link'>Products</Link>
                            <Link to='/about' className='color-text fw-semibold px-3 py-3 nav-link'>About Us</Link>

                            {
                                userInfo?.uid ?
                                    <>
                                        <div onClick={showDetails} className='user'><p className='m-0'>{userInfo.displayName}</p>
                                            <div className="user-icon">{userInfo.photoURL ?
                                                <>
                                                    <img src={userInfo.photoURL} alt={userInfo.name} />
                                                </>
                                                : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>}
                                            </div>

                                            <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>

                                            <div id='details' className="user-details pb-3">
                                                {userInfo.email ? <small><span className='capitalize'>Email</span> : {userInfo.email}</small> : <small className='capitalize'>GitHub Logged</small>}
                                                <small>{userInfo.emailVerified ? <p className='text-success fw-semibold capitalize'>Verified</p> : userInfo.email ? <p className='text-danger fw-semibold capitalize'>Not Verified <button className='btn btn-dark btn-sm mt-1' onClick={verifyAccount}>Verify Email</button></p> : <p className='text-success fw-semibold'>Verified By GitHub</p>}</small>

                                                <button onClick={signOut} className='btn btn-danger btn-sm'>Sign Out</button>
                                            </div>
                                        </div>
                                    </>
                                    : <>
                                        <Link to='/account' className='ps-4 color-text fw-semibold nav-link pb-2 pt-3'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg></Link></>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );

};

export default Header;