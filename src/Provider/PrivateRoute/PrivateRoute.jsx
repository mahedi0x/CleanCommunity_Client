import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }
  
    if (!user) {
      // Redirect to login and remember where user tried to go
      return <Navigate to="/login" state={location?.pathname}  />;
    }
  
    return children;
  };
export default PrivateRoute;