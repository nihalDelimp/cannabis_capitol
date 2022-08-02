import React from 'react'
import logo from '../../assets/logo.png'
import {
    Link
} from "react-router-dom";
import SingupForm from './SingupForm';
import LoginForm from './LoginForm';
const Header = () => {
    return (
        <header className="main_nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">

                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    Entertainment
                                </a>
                                <div class="dropdown-menu">
                                    <Link className="dropdown-item" to="/shows">SHOWS <span className="sr-only">(current)</span></Link>
                                    <Link className="dropdown-item" to="/recaps">RECAPS</Link>
                                </div>
                            </li>

                            <li className="nav-item">

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/production">Productions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/network">Network</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/creative">Creative Compound</Link>
                            </li>


                            {/* <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" href="#" data-target="#loginForm">Login</a>
                            </li>
                            <li className="nav-item sign_upNav">
                                <a className="nav-link" data-toggle="modal" href="#" data-target="#signupForm">Sign Up</a>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="#">Lorem Ipsum</Link>                    
                    <Link className="dropdown-item" to="#">Lorem Ipsum</Link>                    
                    <Link className="dropdown-item" to="#">Lorem Ipsum</Link>                    
                  </div>
                </li> */}
                        </ul>
                    </div>

                </nav>
            </div>

            <SingupForm />
            <LoginForm />



        </header>
    )
}

export default Header
