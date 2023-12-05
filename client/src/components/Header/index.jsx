import { Link } from 'react-router-dom';
import "../../assets/css/style.css"
const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">

        </Link>



          <div className="flex-column justify-flex-start min-100-vh">
              <nav className="rose-nav ml-auto">
                  <div><p>ROSE Technologies</p></div>

                  <div>
                      <ul>
                          <li>
                          <a href="/home">Home</a></li>
                          <li><a href="/home">Blog</a>
                          </li>
                          <li><a href="/home">Portfolio</a></li>
                          <li><a href="/home">About</a></li>
                          <li><a href="/home">Contact</a></li>
                      </ul>

                  </div>
                </nav>
              <div className="container"><main><div className="flex-row justify-center"></div></main></div>
              <footer className="w-100 mt-auto bg-secondary p-4"><div className="container text-center mb-5"><p>  ROSE Technologies™ 2023 </p></div>
              </footer></div>
       </div>
    </header>
  );
};

export default Header;
