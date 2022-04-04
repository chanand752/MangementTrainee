import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
  import { Container, Col, Row } from 'react-bootstrap';
  import BrandQualityNavbar from './BrandQualityGroup/BrandQualitynavbar';
  import AdminPage from './BrandQualityGroup/BrandQuality';
  import PriceList from './PriceList';
  import PriceGrid from './PriceGrid';
  import { Route, Switch } from "react-router-dom";

  import { Navbar, Nav, Offcanvas } from "react-bootstrap";


export default function SwSideBar() {
  return (
    <div>
      <BrandQualityNavbar />
   
   <div style={{
                  padding: '0px ',
                }}>
    <Container fluid>
      <Row >
        <Col lg="auto" className='col-side' style={{
                  padding: '0px',
                  height:'91vh',
                }}>
          <CDBSidebar textColor="#fff" backgroundColor="#778899">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                className="text-decoration-none"
                style={{ color: 'inherit' }}
              >
                Menu
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/Home/brandqualitygroup" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="sign">Brand Quality Group</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Home/pricelist" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="list">Price List</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Home/pricegrid" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table"> Price Grid</CDBSidebarMenuItem>
                </NavLink>
                
              </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                style={{
                  padding: '20px 5px',
                }}
              >
                {/* Miracle Software Systems */}
                @Sherwin Williams
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </Col>


        <Col >

          <Switch>
            <Route path="/Home/brandqualitygroup" ><AdminPage /></Route>
            <Route path="/Home/pricelist" ><PriceList /></Route>
            <Route path="/Home/pricegrid" ><PriceGrid /></Route>
           
          </Switch>

        </Col>

      </Row>
    </Container>
    </div>
    </div>
  )
}