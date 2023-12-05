import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/style.css"
const Header = () => {
  return (
    <header>
        <nav className="rose-nav ml-auto">
            <div><h1>ROSE Technologies</h1></div>

            <div>
                <ul>
                    <li>
                        {/*<a href="/home">Home</a>*/}
                    <Link to="/home">Home</Link>
                    </li>
                    <li><a href="/blog">Blog</a>
                    </li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

            </div>
        </nav>
      <div className="container flex-row justify-space-between-lg justify-center align-center ">
        <Link className="text-light" to="/">

        </Link>



          <div className="flex-column justify-flex-start min-100-vh">

              <div className="container"><main><div className="flex-row justify-center"></div></main></div>
              <footer className="w-100 mt-auto bg-secondary p-4"><div className="container text-center mb-5"><p>  ROSE Technologies™ 2023 </p></div>
              </footer></div>
       </div>
    </header>
  );
};

export default Header;
