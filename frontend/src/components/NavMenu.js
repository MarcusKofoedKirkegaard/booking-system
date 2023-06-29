import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import MoreVert from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate, useParams } from 'react-router-dom';

export default function PositionedMenu() {
  const {userdata} = useParams();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };

  const navigate = useNavigate();

  if(userdata === undefined)
  return (
    <div>
      <MenuIcon
        id="positioned-demo-button"
        aria-controls={open ? 'positioned-demo-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        fontSize='large'
      >
        <MoreVert />
      </MenuIcon>
      <Menu
        id="positioned-demo-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="positioned-demo-button"
        placement="bottom-end"
      >
        <MenuItem onClick={() => {goto('/help')}}>
          Hjælp
        </MenuItem>
        <ListDivider />
        <MenuItem onClick={() => {goto('/login')}} variant="soft" color="success">
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <LoginIcon />
          </ListItemDecorator>{' '}
          Log ind
        </MenuItem>
      </Menu>
    </div>
  );
  
  return (
    <div>
      <MenuIcon
        id="positioned-demo-button"
        aria-controls={open ? 'positioned-demo-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        fontSize='large'
      >
        <MoreVert />
      </MenuIcon>
      <Menu
        id="positioned-demo-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="positioned-demo-button"
        placement="bottom-end"
      >
        <MenuItem onClick={() => {goto('/' + userdata + '/start')}}>
          Mine bookings
        </MenuItem>
        <MenuItem onClick={() => {goto('/' + userdata + '/overview')}}>
          Ny booking
        </MenuItem>
        <MenuItem onClick={() => {goto('/' + userdata + '/help')}}>
          Hjælp
        </MenuItem>
        <ListDivider />
        <MenuItem onClick={() => {goto('/login')}} variant="soft" color="danger">
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <LogoutIcon />
          </ListItemDecorator>{' '}
          Log ud
        </MenuItem>
      </Menu>
    </div>
  );

  function goto(path) {
    navigate(path);
  }
}