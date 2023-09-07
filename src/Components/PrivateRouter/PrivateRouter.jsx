/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { WebController } from '../../ParentContext/Context';
import LottieLoader from '../Loader/LottieLoader';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {userInfo, loader} = useContext(WebController);
    if(loader){
        return <LottieLoader></LottieLoader>
    }
   if(userInfo && userInfo.uid) {
    return children;
   }
   return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;