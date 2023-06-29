import * as React from 'react';
import './stylesheets/start.css';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/header';
import { useState, useEffect } from "react";


function StartPage() {
  const [user, setUser] = useState();
  let {userdata} = useParams();
  
  async function fetchUser(){
    const response = await fetch('http://localhost:9000/user', {
      method: 'POST',
      mode: 'cors',
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        userID: userdata 
      })
    })
    
    return await response.json();
  }

  useEffect(() => {
    fetchUser().then((user) => setUser(user));
  }, []);

  if(user === undefined)
  return(
    <div className="StartPage">
      <Header/>
      <h1>Loading ...</h1>
    </div>
  );
  return (
    <div>
  
    <Header/>
      
    <div className="StartPage">
      <div id="bookings-container">
        <h1>Mine Bookings</h1>

    {renderBookings(user)}

      </div>
      <div id="new-booking">
        <Link to="../overview" relative="path">
          <Button variant="contained">Book ny</Button>
        </Link>
      </div>
    </div>
    </div>
  );
  function generateLink(roomId, time) {
    let buttonLink = '/' + userdata + '/overview/details/' + roomId + '/booking/' + time;
  
    return buttonLink;
  }
  
  function renderBookings(currentUser) {
    const bookings = currentUser.booked.map((element) => (
      <Link to={generateLink(JSON.parse(JSON.stringify(element))['id'], JSON.parse(JSON.stringify(element))['time'])} relative="path">
        <Button variant="contained" fullWidth>{JSON.parse(JSON.stringify(element))['roomName']} ({JSON.parse(JSON.stringify(element))['time']})</Button>
      </Link>
    ))
  
    return bookings;
  }
}

export default StartPage;