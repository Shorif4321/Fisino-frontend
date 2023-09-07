/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from "lottie-react";
import loader from '../../../public/loader.json';

const LottieLoader = () => {
    
    return (
        <div className='d-flex justify-content-center align-items-center height-700px w-100'>
            <Lottie className='width-200px' animationData={loader} loop={true} />
        </div>
    );
};

export default LottieLoader;