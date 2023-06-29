import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Link, Navigate } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StartPage from './pages/start';
import Help from './pages/help';
import Booking from './pages/booking'
import Login from './pages/login'
import Overview from './pages/overview'
import Details from './pages/details'

let currentUser;
let currentRoom;

export default function index(){
return (
    function setCurrentUser(user){
    currentUser = user;
    },

    function setCurrentRoom(room){
    currentRoom = room;
    }
)}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="login"/>,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/:userdata/start",
    element: <StartPage currentUser={currentUser}/> 
  },
  {
    path: "/:userdata/overview",
    element: <Overview currentUser={currentUser} />
  },
  {
    path: "/:userdata/overview/details/:roomdata",
    element: <Details currentUser={currentUser} currentRoom={currentRoom} />
  },
  {
    path: "/:userdata/overview/details/:roomdata/booking/:time",
    element: <Booking currentUser={currentUser} currentRoom={currentRoom} />
  },
  {
    path: "/:userdata/help",
    element: <Help />
  },
  {
    path: "/help",
    element: <Help />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
