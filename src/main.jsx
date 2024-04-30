import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './pages/AuthProvider.jsx';
import Root from './Root.jsx';
import AllTouristSpots from './pages/AllTouristSpots.jsx';
import AddTouristSpot from './pages/AddTouristSpot.jsx';
import MyList from './pages/MyList.jsx';
import PrivateRoute from './pages/PrivateRoute.jsx';
import Update from './pages/Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'allTouristSpots',
        element: <AllTouristSpots></AllTouristSpots>
      },
      {
        path: 'addTouristSpot',
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      }, 
      {
        path : 'myList',
        element:<PrivateRoute> <MyList></MyList></PrivateRoute>
      },
      {
        path: 'update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader : ({params}) => fetch (`http://localhost:5000/myTouristSpot/${params.id}`)
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
