import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoad/DashBoard.jsx';
import "@fontsource/playfair-display"; 
import BookDetails from './Components/BookDetails/BookDetails.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children: [
       {
        path : '/',
        element: <Home/> 
       },
       {
         path: 'book/:bookId',
         element: <BookDetails/>
       },
       {
        path : '/dashboard',
        element: <DashBoard/>
       }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
