import React from 'react';
import UseAuth from '../hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {googleLogin, facebookLogin} = UseAuth();

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    const handleSocialLogin = socialProvider => {
        socialProvider()
        .then(result => {
            if (result.user){
                navigate(from)
            }
        })
    }
    return (
        <>
        
        <div className='text-center pb-2'>Login With</div>
        
      <div  className='flex justify-around'>
      <div>
            <button
            onClick={() => handleSocialLogin(googleLogin)} className='btn btn-secondary m-2 ml-4'>Google</button>
        </div>
        
        <div>
            <button
            onClick={() => handleSocialLogin(facebookLogin)} className='btn btn-secondary m-2 ml-4'>Facebook</button>
        </div>

      </div>

        </>
    
    );
};

export default SocialLogin;