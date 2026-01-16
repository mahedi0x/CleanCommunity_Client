import React, { use, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOff, IoEyeOutline } from 'react-icons/io5';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Bounce, toast, ToastContainer } from 'react-toastify';
  
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const {signInUser, createUserByGoogle, loginToast, email, setEmail} = use(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginWithEmailPassword = (e) =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;



      signInUser(email,password)
      .then(result =>{
          console.log(result.user);
          form.reset();
          loginToast();
          navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(error =>{
          const errorCode = error.message;
          setError(errorCode); 
          toast.error(`${error}`);

      })
  }
  
    // Handle Google Sign-In
    const handleGoogleSignIn = () => {
      createUserByGoogle()
      .then(result =>{
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(error =>{
        console.log(error.message);
      })
    };



    const handleForgetPass = () =>{
      navigate("/forgotPassword")


  }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
        <title>CleanBD Login</title>
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg w-full max-w-xl mx-3 border border-black-100">
          
          {/* Header */}
          <div className="text-center mb-8 ">
            <h2 className="text-3xl font-bold text-[#2e4a33]">
              Welcome Back
            </h2>
            <p className="text-gray-600 mt-2">
              Log in to your CleanBD account.
            </p>
          </div>
  
          {/* Login Form */}
          <form onSubmit={handleLoginWithEmailPassword}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                name='email'
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4a33] focus:border-transparent"
              />
            </div>

            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />

  
            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name='password'
                  
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4a33] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"
                >
                  {showPassword ?  <IoEyeOutline className=''/>: <IoEyeOff />  }
                </button>
              </div>
            </div>
  
            {/* Forgot Password Link */}
            <div className="text-right mb-6">
            <div onClick={handleForgetPass}><a className="text-sm text-[#3b5533] hover:underline cursor-pointer">Forgot password?</a></div>
              {/* <a  href="#" className="text-sm text-[#3b5533] hover:underline">
                Forgot Password?
              </a> */}
            </div>
  
            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#2e4a33] text-white py-3 rounded-lg font-semibold hover:bg-[#243c29] transition-all"
            >
              Login
            </button>

            {/* Error message showing */}
            {/* <div className="text-center mt-6">
              <p className="text-sm text-red-600 font-semibold">{error && <p>{error}</p>}</p>
            </div> */}
          </form>
  
          {/* "OR" Divider */}
          <div className="flex items-center justify-center my-4">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="mx-4 text-xs font-medium text-gray-500">OR</span>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>
  
          {/* Google Sign-in Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-200 transition-all"
          >
            <FcGoogle className='mx-2'/>
            Sign in with Google
          </button>
  
          {/* Sign up Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Allready have an account? Please{' '}
            <Link to='/register' href="#" className="text-[#2e4a33] font-semibold hover:underline">
              Register
            </Link>
          </p>
  
        </div>
      </div>
    );
};

export default Login;