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
import ListedBook from './Components/ListedBooks/ListedBook.jsx';
import { ToastContainer } from 'react-toastify';


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
        path : '/listedbook',
        element: <ListedBook/> ,
        // worst way to load some data
        loader: () => fetch('/booksData.json') // do not load all data for some

       },
       {
         path: 'book/:bookId',
         element: <BookDetails/>,
         loader: () => fetch('/booksData.json')
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
     <ToastContainer className="text-center items-center" />
  </StrictMode>,
)
