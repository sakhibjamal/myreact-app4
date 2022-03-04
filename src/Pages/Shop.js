import React, {Component} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {MdShoppingCart} from "react-icons/md";
import {RiCreativeCommonsZeroFill} from "react-icons/ri";
class Shop extends Component {
    render() {
        return (
            <div>
                    <header>
                        <Navbar bg="light" expand="lg">
                            <Container>
                                <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto ps-4">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                   <button className="btn btn-outline-dark d-flex py-2 gap-1 align-items-center justify-content-center"><MdShoppingCart/>Cart<RiCreativeCommonsZeroFill/></button>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <div className="shop-tag d-flex flex-column align-items-center justify-content-center">
                            <h1>Shop in style</h1>
                            <p>With this shop hompeage template</p>
                        </div>
                    </header>
                <div className="section-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="card-header p-0">
                                        <img className="img-fluid" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h2>Fancy Product</h2>
                                        <p>$40.00 - $80.00</p>
                                        <button className="btn btn-outline-dark">View options</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="card-header p-0">
                                        <img className="img-fluid" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h2>Fancy Product</h2>
                                        <p>$40.00 - $80.00</p>
                                        <button className="btn btn-outline-dark">View options</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="card-header p-0">
                                        <img className="img-fluid" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h2>Fancy Product</h2>
                                        <p>$40.00 - $80.00</p>
                                        <button className="btn btn-outline-dark">View options</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="card-header p-0">
                                        <img className="img-fluid" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h2>Fancy Product</h2>
                                        <p>$40.00 - $80.00</p>
                                        <button className="btn btn-outline-dark">View options</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="card-header p-0">
                                        <img className="img-fluid" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h2>Fancy Product</h2>
                                        <p>$40.00 - $80.00</p>
                                        <button className="btn btn-outline-dark">View options</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="card-header p-0">
                                        <img className="img-fluid" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h2>Fancy Product</h2>
                                        <p>$40.00 - $80.00</p>
                                        <button className="btn btn-outline-dark">View options</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="card-header p-0">
                                        <img className="img-fluid" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h2>Fancy Product</h2>
                                        <p>$40.00 - $80.00</p>
                                        <button className="btn btn-outline-dark">View options</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="card-header p-0">
                                        <img className="img-fluid" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h2>Fancy Product</h2>
                                        <p>$40.00 - $80.00</p>
                                        <button className="btn btn-outline-dark">View options</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Shop;