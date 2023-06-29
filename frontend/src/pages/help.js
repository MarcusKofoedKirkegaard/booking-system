import React from "react";
import Header from "../components/header";
import ControlledAccordions from "../components/Accordian";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
  
function Help() {
  return (
    <div className="Help">
    
    <Header/>
    
    <HelpOutlineIcon fontSize="large"/>
      
    <h1>Har du brug for hjælp?</h1>
  
    <ControlledAccordions/>  
    
    </div>
  );
}
  
export default Help;