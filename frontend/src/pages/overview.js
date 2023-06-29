import React from "react";
import './stylesheets/overview.css';
import Header from "../components/header";
import { useState } from "react";
import AllRooms from "./AllRooms";

function Overview() {
  const [user, setUser] = useState();  
  
  return (
    <div className="overview">
      <Header/>
        <h1>Lokaler</h1>
 
        <AllRooms />       
    </div>
  );
};
  
export default Overview;