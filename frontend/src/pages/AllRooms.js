import { useState, useEffect } from "react";
import './stylesheets/overview.css';
import { Link } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';

function addRoom(room) {
  let stringRoom = './details/' + JSON.parse(JSON.stringify(room))['id'];  


  var timesAvailable = 0;
  var secondClass = "room-thumbnail-capacity room-thumbnail-capacity-green";

  if(!room._8_9) timesAvailable++;
  if(!room._9_10) timesAvailable++;
  if(!room._10_11) timesAvailable++;
  if(!room._11_12) timesAvailable++;
  if(!room._12_13) timesAvailable++;
  if(!room._13_14) timesAvailable++;
  if(!room._14_15) timesAvailable++;
  if(!room._15_16) timesAvailable++;
  if(!room._16_17) timesAvailable++;
  if(!room._17_18) timesAvailable++;
  if(!room._18_19) timesAvailable++;
    
  if(timesAvailable === 0) secondClass = "room-thumbnail-capacity room-thumbnail-capacity-red";
  else if(timesAvailable < 5) secondClass = "room-thumbnail-capacity room-thumbnail-capacity-orange";
  else if(timesAvailable < 11) secondClass = "room-thumbnail-capacity room-thumbnail-capacity-yellow";
  
  if(timesAvailable === 0) timesAvailable = "Optaget";
  else if(timesAvailable === 11) timesAvailable = "Ledig";
  else timesAvailable = timesAvailable + " ledige tider";

  return (    
      <Link to={stringRoom} relative="path">
        <a class="room-thumbnail-container">
          <div class="room-thumbnail-people">
            <div class="room-thumbnail-people-icon"><GroupsIcon/></div>
            {room.capacity}
          </div>
          <div class="room-thumbnail-title">{room.roomName}</div>
          <div class={secondClass}>{timesAvailable}</div>
        </a>
        </Link>
    );
  }

export default function AllRooms() {
  const [rooms, setRooms] = useState([]);
  let floorRooms = new Array();     

  async function fetchRooms() {
        const response = await fetch("http://localhost:9000/overview", {
            method: "GET",
        });

    return await response.json();
  }

  useEffect(() => {
    fetchRooms().then((data) => setRooms(data));
  }, []);

  function iterate(floor) {

    floorRooms = new Array();
    
    rooms.forEach( function(room){
        if(room.floor === floor) {
            floorRooms.push(room);
        }
    })       
  }

  return (
      <div className="roomFloor">
        <h2>Atrium</h2>
        {iterate(0)}

        <div class="room-container">
        {floorRooms.map((room) => (
            addRoom(room)
        ))}

        </div>

        <h2>2. Sal</h2>
        {iterate(2)}
        
        <div class="room-container">
        {floorRooms.map((room) => (
            addRoom(room)
        ))}
        </div>

        <h2>3. Sal</h2>
        {iterate(3)}

        <div class="room-container">
        {floorRooms.map((room) => (
            addRoom(room)
        ))}
        </div>

        <h2>4. Sal</h2>
        {iterate(4)}
        <div class="room-container">
        {floorRooms.map((room) => (
           addRoom(room)
        ))}
        </div>

        <h2>5. Sal</h2>
        {iterate(5)}
        <div class="room-container">
        {floorRooms.map((room) => (
            addRoom(room)
        ))}
        </div>
      </div>
  );
}