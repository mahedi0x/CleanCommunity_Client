import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import AllIssues from '../pages/AllIssues/AllIssues';
import AddIssues from '../pages/AddIssues/AddIssues';
import MyIssues from '../pages/MyIssues/MyIssues';
import MyContribution from '../pages/MyContribution/MyContribution';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import IssuesDetails from '../pages/IssuesDetails/IssuesDetails';
import PrivateRoute from '../Provider/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-issues",
                element: <AllIssues></AllIssues>
                // loader: () =>  fetch("http://localhost:3000/issues")
            },
            {
                path: "/add-issues",
                element: <PrivateRoute>
                    <AddIssues></AddIssues>
                </PrivateRoute>
            },
            {
                path: "/my-issues",
                element: <PrivateRoute>
                     <MyIssues></MyIssues>
                </PrivateRoute>
            },
            {
                path: "/issues-details/:id",
                element: <PrivateRoute>
                    <IssuesDetails></IssuesDetails>,
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/issues-details/${params.id}`)
            },
            {
                path: "/my-contribution",
                element: <PrivateRoute>
                    <MyContribution></MyContribution>
                </PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
          
            {
                path: "/*",
                element: <NotFoundPage></NotFoundPage>
            },

            
        ]
    }

])

export default router;