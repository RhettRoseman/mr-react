import { Link } from 'react-router-dom';
import "../../assets/css/style.css"
import '../css/header.css'
export default function Header() {
  return (
    <div>
           <nav className="rose-nav ml-auto">
     <div className='titleimage'></div>

     <div>
     <ul>
             <li><a href="/home">Home</a></li>
             <li><a href="/About">About</a></li>
             <li><a href="/Portfolio">Portfolio</a></li>
             <li><a href="/Team">Team</a></li>
             <li><a href="/Services">Services</a></li>
         </ul>
     </div>
   </nav>
    <header className="header">
        <Link className="text-light" to="/">
        </Link>
    </header>
   </div>
)};


