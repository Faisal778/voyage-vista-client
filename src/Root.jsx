import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider from './pages/AuthProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer'


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AuthProvider></AuthProvider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;