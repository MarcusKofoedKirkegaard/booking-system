// import React, { Component } from 'react';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/joy/Input';
import { Link } from 'react-router-dom'
import Header from './components/header';

class App  {
state = {
  data: null
};

  render() {
    return (
      <div>
      <header>
        <Header/>
      </header>
      
      <div className="App">
        
        <h1 id='BookIT'> BookIT </h1>

        <div className='login'>
          <Input placeholder='Email'/>
        </div>
        <div className='login'>
          <Input placeholder='Password'/>
        </div>
        <div className='login'>  
        
        <Link to="../startPage" relative="path">
          <Button variant="contained" >Login</Button>
        </Link>
          
        </div>
        
        <div className='helpbutton'>  
          <Link to="../help" relative="path">
          <Button variant="contained">Brug for hjælp?</Button>
          </Link>
        </div>

      </div>
      </div>
    );
  }
}

export default App;
