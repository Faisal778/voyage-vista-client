import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
           <div className='text-4xl h-screen text-center flex flex-col items-center justify-center border'>
           <h1>ERROR 404</h1>
            <h1>Page Not Found</h1>
            <button className='btn btn-primary mt-4'><NavLink to = '/'>GO TO HOMEPAGE</NavLink></button>
           </div>
        </div>
    );
};

export default ErrorPage;