import React from 'react';
import {Toolbar,AppBar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header=styled(AppBar)`
  background: #111111
`;

const Navlink=styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color:inherit;
  text-decoration:none;
`;

const Navbar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Navlink to='/'> Code for Interview </Navlink>
        <Navlink to='/all'> All Users </Navlink>
        <Navlink to='/add'> Add User </Navlink>
      </Toolbar>
    </Header>

  )
}

export default Navbar;