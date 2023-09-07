/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const Coming = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='d-flex w-100 height-700px align-items-center justify-content-center bg-warning-subtle flex-column'>
            <h1 className='text-center'>This Page Is Coming Soon <br /> Stay With Us</h1>
        </div>
    );
};

export default Coming;