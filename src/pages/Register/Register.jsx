import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOff, IoEyeOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

  
const Register = () => {
    const {createUser, setUser, updateUser, createUserByGoogle, registerToast} = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const [password, setPassword] = useState("");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const navigate = useNavigate();

  

    const handleRegisterWithEmailPassword = (e) => {
      e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!passwordRegex.test(password)) {
          Swal.fire({
            icon: "error",
            title: "Weak Password",
            text: "Password must have at least one uppercase, one lowercase, and be 6+ characters long.",
          });
          return;
        }

        createUser(email, password)
        .then((result) =>{
            const user = result.user;
            form.reset();
            registerToast();
            navigate("/");
            updateUser({ displayName: name, photoURL: photo })
            .then(() =>{
                setUser({...user, displayName: name, photoURL:photo});
                // navigate("/");
            })
            .catch((error) =>{
                console.log(error);
                setUser(user);
            });
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

    };

  
    // const handleGoogleSignIn = () => {
    //   createUserByGoogle()
    //   .then(result =>{
    //     console.log(result.user);
    //     navigate("/");
    //   })
    //   .catch(error =>{
    //     console.log(error.message);
    //   })
    // };

    const handleGoogleSignIn = () => {
      createUserByGoogle()
          .then(result => {
              console.log(result.user);
              navigate("/");
              const newUser = {
                  name: result.user.displayName,
                  email: result.user.email,
                  image: result.user.photoURL
              }

              // create user in the database
              fetch('https://clean-community-bd.vercel.app/users',{
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(newUser)
              })
                  .then(res => res.json())
                  .then(data => {
                      console.log('data after user save', data)
                  })

          })
          .catch(error => {
              console.log(error)
          })
  }
  

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans py-20">
        <div className="bg-white p-4 sm:p-10 rounded-xl shadow-lg w-full max-w-xl mx-3 border border-black-50">
          
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-[#2e4a33]">
              Welcome CleanBD.
              
            </h2>
            <p className="text-gray-600 my-2">
            Create Your CleanBD Account.
            </p>
          </div>
  
          {/* Login Form */}
          <form onSubmit={handleRegisterWithEmailPassword}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name='name'
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4a33] focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                Photo
              </label>
              <input
                type="url"
                id="photo"
                name='photo'
                placeholder="URL of your profile picture"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4a33] focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name='email'
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4a33] focus:border-transparent"
              />
            </div>
  
            {/* Password Input */}
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
  
  
            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#2e4a33] text-white py-3 rounded-lg font-semibold hover:bg-[#243c29] transition-all mt-3"
            >
              Register
            </button>
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
            Don't have an account? Please{' '}
            <Link to="/login" href="#" className="text-[#2e4a33] font-semibold hover:underline">
              Log In
            </Link>
          </p>
  
        </div>
      </div>
    );
};

export default Register;