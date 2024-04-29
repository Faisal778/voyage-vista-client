import React from 'react';
import UseAuth from '../hooks/UseAuth';

const SocialLogin = () => {

    const {googleLogin, facebookLogin} = UseAuth();
    return (
        <>
        
        <div className='text-center pb-2'>Login With</div>
        
      <div  className='flex justify-around'>
      <div>
            <button
            onClick={() => googleLogin()} className='btn btn-secondary m-2 ml-4'>Google</button>
        </div>
        
        <div>
            <button
            onClick={() => facebookLogin()} className='btn btn-secondary m-2 ml-4'>Facebook</button>
        </div>

      </div>

        </>
    
    );
};

export default SocialLogin;