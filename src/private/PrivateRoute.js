import React,{useState,useEffect,useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import { Context } from '../DataCenter';
import decode from 'jwt-decode';

const PrivateRoute = ({ component: Component, ...rest}) => {
    const token = localStorage.getItem('token');
    return (
       <Route
           render = {(props) =>  !token ? (<Redirect to="/"/> ) : (<Component {...props} />)}
                    
       />
    );
}

export default PrivateRoute;
