import './App.css';
import ProfilPhoto from './Components/Profile/ProfilPhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <div className="App">
      <Nav />
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  );
}

const Nav = (props) => {
  return  (<AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit">
      My profile
    </Typography>
  </Toolbar>
</AppBar>
      )
}
  
export default App;
