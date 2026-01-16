import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import AllIssues from '../pages/AllIssues/AllIssues';
import AddIssues from '../pages/AddIssues/AddIssues';
import MyIssues from '../pages/MyIssues/MyIssues';
import MyContribution from '../pages/MyContribution/MyContribution';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import IssuesDetails from '../pages/IssuesDetails/IssuesDetails';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import DashboardHome from '../pages/Dashboard/DashboardHome';
import Profile from '../pages/Dashboard/Profile';
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
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/issues-details/:id",
                element: <PrivateRoute>
                    <IssuesDetails></IssuesDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://clean-community-bd.vercel.app/issues-details/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <DashboardHome />
            },
            {
                path: "add-issues",
                element: <AddIssues></AddIssues>
            },
            {
                path: "my-issues",
                element: <MyIssues></MyIssues>
            },
            {
                path: "my-contribution",
                element: <MyContribution></MyContribution>
            },
            {
                path: "profile",
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: "/*",
        element: <NotFoundPage></NotFoundPage>
    }
]);

export default router;