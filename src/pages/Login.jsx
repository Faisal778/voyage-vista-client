import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { useForm } from 'react-hook-form';
import UseAuth from '../hooks/UseAuth';
import SocialLogin from '../components/SocialLogin';
import { getAuth } from 'firebase/auth';

const Login = () => {

    const {singInUser}  = UseAuth();



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = data => {
        const {email, password} =  data;
        singInUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error)
        })
      }
    


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name = 'email' className="input input-bordered" required 
          {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name = 'password' required
           {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        <SocialLogin></SocialLogin>
     </div>

    <p>Do not have an account? Please <Link to ='/register' className='text-blue-400'>Register</Link></p>
  </div>
</div>
    );
};

export default Login;