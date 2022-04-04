import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import PersonIcon from '@mui/icons-material/Person';
import './BrandQuality.css';
import Swlogo from '../images/sw-logo.png';

function BrandQualityNavbar() {


  return (
    <div>


      <nav className='nav'>
        <div>
          <img src={Swlogo} className="nav-image" />
        </div>


        <Toolbar className='nav-content'>

          <Button variant="text" style={{ textTransform: 'none' }} >Dashboard</Button>
          <SpeedIcon />


          <Button variant="text" className='admin-button' style={{ textTransform: 'none' }} >swadmin</Button>
          <PersonIcon />
        </Toolbar>
      </nav>

    </div>
  );
}

export default BrandQualityNavbar;
