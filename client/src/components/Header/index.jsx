import { Link } from 'react-router-dom';
import "../../assets/css/style.css"
import '../css/header.css'
const Header = () => {
  return (
    <div>
           <nav className="rose-nav ml-auto">
     
     <div className='titleimage'></div>

     <div>
     <ul>
             <li>
             <a href="/home">Home</a></li>
             <li><a href="/Blog">Blog</a>
             </li>
             <li><a href="/Portfolio">Portfolio</a></li>
             <li><a href="/About">About</a></li>
             <li><a href="/Contact">Contact</a></li>
         </ul>

     </div>
   </nav>
    <header className=" header">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">

        </Link>



          <div className="flex-column justify-flex-start min-100-vh">
             
           
              {/* <footer className="w-100 mt-auto bg-secondary p-4"><div className="container text-center mb-5"><p>  ROSE Technologies™ 2023 </p></div>
              </footer></div> */}
       </div>
       </div>
    </header>

   </div>
)}

export default Header;
