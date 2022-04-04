// import ManageBrandFormalua from './AdminDashBoard/ManageBrandFormalNames';
import React from 'react';
import PriceList from './AdminDashBoard/PriceList';
import AdminPage from './AdminDashBoard/BrandQualityGroup/BrandQuality';
import PriceGrid from './AdminDashBoard/PriceGrid';
import './App.css';
import SwSideBar from './AdminDashBoard/sideBar';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
      {/* <PriceGrid /> */}
      {/* <AdminPage /> */}
      <Router>
        <SwSideBar />
      </Router>

      {/* <ManageBrandFormalua /> */}
      {/* <PriceList />   */}
    </>
  );
}

export default App;
