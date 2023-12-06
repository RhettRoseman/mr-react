import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';
import '../css/header.css';

const Header = () => {
    return (
        <header>
            <nav className="rose-nav ml-auto">
                <div>
                    <h1>ROSE Technologies</h1>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/team">Our Team</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <nav className="rose-nav ml-auto">
                    <div className="titleimage"></div>
                    <div>
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container flex-row justify-space-between-lg justify-center align-center">
                    <Link className="text-light" to="/"></Link>

                    <div className="flex-column justify-flex-start min-100-vh">
                        <div className="container">
                            <main>
                                <div className="flex-row justify-center"></div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
