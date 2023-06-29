import React from "react";
import Checkbox from '@mui/joy/Checkbox';
import './stylesheets/booking.css';  
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from "../components/header";
import { useState, useEffect } from "react";

function Booking() {
  const [user, setUser] = useState();
  const [room, setRoom] = useState();
  const {time} = useParams();
  let {userdata} = useParams();
  const {roomdata} = useParams();
  const url = '/' + userdata + '/start';
  const navigate = useNavigate();

  async function fetchUser(userid){
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
        userID: userid 
      })
    })
    return await response.json();
  }

  useEffect(() => {
    fetchUser(userdata).then((user) => setUser(user));
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

  
  async function setBooking(time, roomId, room){
    if(time === '08:00 - 09:00'){
      room._8_9 = true;
    } else if(time === '09:00 - 10:00'){
      room._9_10 = true;
    } else if(time === '10:00 - 11:00'){
      room._10_11 = true;
    } else if(time === '11:00 - 12:00'){
      room._11_12 = true;
    } else if(time === '12:00 - 13:00'){
      room._12_13 = true;
    } else if(time === '13:00 - 14:00'){
      room._13_14 = true;
    } else if(time === '14:00 - 15:00'){
      room._14_15 = true;
    } else if(time === '15:00 - 16:00'){
      room._15_16 = true;
    } else if(time === '16:00 - 17:00'){
      room._16_17 = true;
    } else if(time === '17:00 - 18:00'){
      room._17_18 = true;
    } else if(time === '18:00 - 19:00'){
      room._18_19 = true;
    } 

    bookRoom(roomId, room)
    var newUser = await fetchUser(userdata)
    const shitexample = {
      "id": room.id,
      "roomName": room.roomName,
      "time": time
    }
    newUser.booked.push(shitexample)
    addBookingToUser(userdata, newUser)
    navigate(url);
  }

  async function bookRoom(roomId, room){
      const response = await fetch('http://localhost:9000/booking', {
        method: "PUT",  
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomID: roomId, 
          room: room
        })
      })
      return await response.json();
  }

  
  async function addBookingToUser(userId, user){
    const response = await fetch('http://localhost:9000/user', {
      method: "PUT",  
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userId, 
        user: user
      })
    })
    return await response.json();
  }
  
  async function deleteBooking(time, roomId, room){
    if(time === '08:00 - 09:00'){
      room._8_9 = false;
    } else if(time === '09:00 - 10:00'){
      room._9_10 = false;
    } else if(time === '10:00 - 11:00'){
      room._10_11 = false;
    } else if(time === '11:00 - 12:00'){
      room._11_12 = false;
    } else if(time === '12:00 - 13:00'){
      room._12_13 = false;
    } else if(time === '13:00 - 14:00'){
      room._13_14 = false;
    } else if(time === '14:00 - 15:00'){
      room._14_15 = false;
    } else if(time === '15:00 - 16:00'){
      room._15_16 = false;
    } else if(time === '16:00 - 17:00'){
      room._16_17 = false;
    } else if(time === '17:00 - 18:00'){
      room._17_18 = false;
    } else if(time === '18:00 - 19:00'){
      room._18_19 = false;
    } 

    bookRoom(roomId, room)
    var newUser = await fetchUser(userdata)
    const shitexample = {
      "roomName": room.roomName,
      "time": time
    }
    
    let indexOfBooking = 0;
    let bookedByUser = false;
    user.booked.forEach(element => {
      if(!bookedByUser) {
        if(JSON.parse(JSON.stringify(element))['roomName'] === room['roomName'] && JSON.parse(JSON.stringify(element))['time'] === time) {
          bookedByUser = true;
        }
        else indexOfBooking++;
      }
    });
    newUser.booked.splice(indexOfBooking, 1);
    addBookingToUser(userdata, newUser)
    navigate(url);
  }
  
if(user === undefined || room === undefined) return (
  <div className="Booking">
    <Header/>
    <h1>Loading ...</h1>
  </div>
);

  let bookedByUser = false;
  user.booked.forEach(element => {
    if(JSON.parse(JSON.stringify(element))['roomName'] === room['roomName'] && JSON.parse(JSON.stringify(element))['time'] === time) {
      bookedByUser = true;
    }
  });

  if(bookedByUser) 
    return (
      <div className="Booking">
        <Header/>
        <h1 id="heading1">
        Booking detaljer
        </h1>
        
        <h2>
          <b>Lokale: {room.roomName}</b> 
        </h2>

        <h2>
          <b>Information: {room.capacity} personer, {room.floor}. sal, {room.equipment.map(equip =>  (
              equip + ', '
            ))} </b>
        </h2>

        <h2>
          <b>Tidspunkt: {time}</b>
        </h2>
        
        <div id="confirm-booking">
          <Button variant="contained" className="cancellable" onClick={() => {deleteBooking(time, room.id, room)}}>
            Annullér Booking
          </Button>
        </div>
      </div>
    );
  return (
    <div className="Booking">
      <Header/>
      <h1 id="heading1">
        Bekræft Booking
      </h1>
      
      <h2>
        <b>Lokale: {room.roomName}</b> 
      </h2>

      <h2>
        <b>Information: {room.capacity} personer, {room.floor}. sal, {room.equipment.map(equip =>  (
            equip + ', '
          ))} </b>
      </h2>

      <h2>
        <b>Tidspunkt: {time}</b>
      </h2>

      <Checkbox label="Jeg bekræfter betingelserne" size="sm" />
      <Checkbox label="Modtag email med bekræftelse" size="sm"/> 
      
      <div id="confirm-booking">
        <Button variant="contained" onClick={() => {setBooking(time, room.id, room)}}>
          Bekræft Booking
        </Button>
      </div>
    </div>
  );
};

export default Booking;