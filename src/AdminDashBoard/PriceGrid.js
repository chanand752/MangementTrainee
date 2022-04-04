import React from "react";
import { Container, Row, Col, Dropdown, Button, ButtonGroup, InputGroup, FormControl, DropdownButton } from "react-bootstrap";
import './PriceGrid.css';

export default function PriceGrid() {
    return (
        <div className='Price-Grid-component-body'>
            <h3 >Price Grid</h3>
            <Container className="priceGrid-input">
                <Row >
                    <Col md={4}>
                        <label className="mb-3">Select a Brand</label>
                        <InputGroup className="mb-3" placeholder="Select a Brand" >
                            <FormControl aria-label="Text input with dropdown button "
                                placeholder="Select a Brand" />

                            <DropdownButton
                                variant="outline-secondary"
                                id="input-group-dropdown-2"
                                align="end"
                            >
                                <Dropdown.Item href="#">Sherwin Williams</Dropdown.Item>
                                <Dropdown.Item href="#">Benjamin Moore</Dropdown.Item>
                                <Dropdown.Item href="#">Farrow & Ball</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </Col>

                    <Col md={4} >
                        <label className="mb-3">Select a Quality</label>
                        <InputGroup className="mb-3">
                            <FormControl aria-label="Text input with dropdown button" />

                            <DropdownButton
                                variant="outline-secondary"
                                id="input-group-dropdown-2"
                                align="end"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>


                    </Col>
                    <Col>
                        <Button className="Grid-Button" variant="primary" >Search</Button>
                    </Col>
                </Row>
                <Row>
                </Row>

            </Container>
        </div>
    )
}