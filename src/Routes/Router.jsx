import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import AllIssues from '../pages/AllIssues/AllIssues';
import AddIssues from '../pages/AddIssues/AddIssues';
import MyIssues from '../pages/MyIssues/MyIssues';
import MyContribution from '../pages/MyContribution/MyContribution';
import Profile from '../pages/Profile/Profile';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';

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
                path: "/add-issues",
                element: <AddIssues></AddIssues>
            },
            {
                path: "/my-issues",
                element: <MyIssues></MyIssues>
            },
            {
                path: "/my-contribution",
                element: <MyContribution></MyContribution>
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
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/*",
                element: <NotFoundPage></NotFoundPage>
            },

            
        ]
    }

])

export default router;