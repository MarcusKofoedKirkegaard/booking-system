
import './stylesheets/details.css';
import GroupsIcon from '@mui/icons-material/Groups';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import Header from "../components/header";
import { useState, useEffect } from "react";

function Details() {
  const [user, setUser] = useState();
  const [room, setRoom] = useState();
  const {userdata} = useParams();
  const {roomdata} = useParams();

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
  
  async function fetchRoom(){
    const response = await fetch('http://localhost:9000/room/' + roomdata, {
      method: 'GET',
      mode: 'cors',
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer"
    })
    return await response.json();
  }

  useEffect(() => {
    fetchRoom().then((room) => setRoom(room));
  }, []);

  if(user === undefined || room === undefined) return (
    <div className="details">
      <Header/>
      <h1>Loading ...</h1>
    </div>
  );
  return (
    <div className="details">
      <Header/>
      <h1>
        {room.roomName}
      </h1>
      <div className="mainContainer">
        <div class="info-block">
          <div class="info-block-icon"><GroupsIcon/></div> {room.capacity}
        </div>
        
        <div class="info-block">
          { room.floor + '. Sal'}
          
        </div>

        <div id="description">
          Udstyr: {room.equipment.map(equip =>  (
            equip + ', '
          ))}
        </div>
      
      <h2>Vælg tidspunkt:</h2>

      <div id="booking-container">
        <h3>{getDate()}</h3>
        
        {isBooked(user, room._8_9, '08:00 - 09:00', room)}
        {isBooked(user, room._9_10, '09:00 - 10:00', room)}
        {isBooked(user, room._10_11, '10:00 - 11:00', room)}
        {isBooked(user, room._11_12, '11:00 - 12:00', room)}
        {isBooked(user, room._12_13, '12:00 - 13:00', room)}
        {isBooked(user, room._13_14, '13:00 - 14:00', room)}
        {isBooked(user, room._14_15, '14:00 - 15:00', room)}
        {isBooked(user, room._15_16, '15:00 - 16:00', room)}
        {isBooked(user, room._16_17, '16:00 - 17:00', room)}
        {isBooked(user, room._17_18, '17:00 - 18:00', room)}
        {isBooked(user, room._18_19, '18:00 - 19:00', room)}
        
      </div>
      </div>
    </div>
  );
};

function isBooked(user, room, time, roomData) {
  
  if(user === undefined) return (<Button variant="contained" fullWidth disabled>{time}</Button>)

  
  let bookedByUser = false;
  user.booked.forEach(element => {
    if(JSON.parse(JSON.stringify(element))['roomName'] === roomData['roomName'] && JSON.parse(JSON.stringify(element))['time'] === time) {
      bookedByUser = true;
    }
  });

  let stringRoom = './booking/' + time;
  if(!room){  
    return(
    <Link to={stringRoom} relative="path">
       <Button variant="contained" fullWidth>{time}</Button>
    </Link>
    );     
  } else {
    if(bookedByUser) return(
      <Link to={stringRoom} relative="path">
        <Button variant="contained" className="booked" fullWidth>{time}</Button>
      </Link>
    )
      return(
        <Button variant="contained" fullWidth disabled>{time}</Button>
      );
  }
}

function getDate() {
  return new Date(Date.now()).toLocaleDateString();
}
  
export default Details;