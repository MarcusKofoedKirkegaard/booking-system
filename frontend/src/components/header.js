import { Button } from '@mui/joy'
import React from 'react';
import './header.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavMenu from './NavMenu';

function Header()  {
    return(
    
    <div id='topbar'>
        <h3>BookIT</h3>
            
        <div id='menu'>
            <NavMenu />
        </div>    
    </div>
    )
}
export default Header; 