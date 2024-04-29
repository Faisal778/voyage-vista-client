import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider from './pages/AuthProvider';
import Navbar from './components/Navbar';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AuthProvider></AuthProvider>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;