import { createBrowserRouter } from 'react-router-dom';

// * Layout
import MainLayout from '../layouts/MainLayout';
// * Pages 
import Home from '../pages/home/home';
import Pricing from '../pages/pricing/pricing';
// * 404 Not found
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
    {
    path: '/',
    element: <MainLayout />, 
    children: [
        // * Main pages
        { index: true, element: <Home /> }, 
        { path: 'pricing', element: <Pricing /> },
        // * 404 Not found
        { path: '*', element: <NotFound /> },
    ],
    },
]);