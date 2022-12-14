import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom';
import  Root, { loader }  from "./routes/route";
import Error from "./Error";
import Contact from './routes/contact';

const router = createBrowserRouter([{
  path:'/',
  element:<Root/>,
  errorElement: <Error/>,
  loader: loader,
  children:[{
    path:'/contacts/:contactId',
  element: <Contact/>  
  }]
},
{
  path:'/contacts/:contactId',
  element: <Contact/>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
