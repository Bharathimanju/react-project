import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './layout.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper.js
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo2 from './images/logo2.png'
import jolli from './images/jolli.jpg'


const Layout = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid ">
                    <Link className="navbar-brand hii" to="/" style={{ marginLeft: '20px' }} > <img src={jolli} class="d-block " alt="..." style={{ width: "90px", height: "60px", }} /> My Website</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav" >
                        <ul className="navbar-nav custom-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Menu">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Nopage">NoPages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;




