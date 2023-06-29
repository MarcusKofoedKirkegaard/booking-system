import React from "react";
import Button from '@mui/material/Button';
import Input from '@mui/joy/Input';
import { Link } from 'react-router-dom'
import './stylesheets/login.css';
import App from "../App";
import Header from '../components/header';

async function validateUser(username, password) {
  const response = await fetch("http://localhost:9000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "ngar", 
        password: "admin"
      })
  });
}

function LoginPage() {


  return (

  
  
    <div className="Login">
      <Header/>

      <h1 id="welcome">Velkommen til BookIT</h1>

      <form id="login-form" action="/login" method="post" >

        <Input type="text" name="username" placeholder='E-mail' />
        <Input type="password" name="password" placeholder='Password'/>
        <Button type="submit" value="Login" variant="contained" >
          Login
        </Button>
        
      </form>

      <div id="help">
        <Link to="../help" relative="path">
          <Button variant="contained" fullwidth>Brug for hjælp?</Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;