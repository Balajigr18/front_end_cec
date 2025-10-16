import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
 const [showMenu, setShowMenu] = useState(false);


 return (
   <nav>
     <div className="container">
       <Link to="/" className="logo">SouthSpice</Link>
       <ul className={`nav-links ${showMenu ? "show" : ""}`}>
         {["Home", "Products", "Services", "About", "Contact"].map(item => (
           <li key={item}>
             <Link to={`/${item === "Home" ? "" : item.toLowerCase()}`} onClick={() => setShowMenu(false)}>
               {item}
             </Link>
           </li>
         ))}
       </ul>
       <span className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
         {showMenu ? "✖" : "☰"}
       </span>
     </div>
   </nav>
 );
};


export default Navbar;