import {Link} from "react-router-dom";
import iconeheader from "../assets/images/logowhite.png";
import "../assets/css/header.css";
import { FaBars } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Header(){
    const [showLinks,setShowLinks]=useState(false);
    const handleShowLinks = ()=>{
        setShowLinks(!showLinks);
    }
    return(
        <div className="container">
            <div className="icone">
                <Link to="/"><img src={iconeheader} alt="iconetradicup.png"/></Link>
            </div>
            <div className={`links ${showLinks ? "show-links" : "hide-links"}`}>
                <ul>
                    <li><Link to="/" className="link">HOME</Link></li>
                    <li><Link to="/matches" className="link">MATCHES</Link></li>
                    <li><Link to="/stadiums" className="link">STADIUMS</Link></li>
                    <li><Link to="/explorespots" className="link">EXPLORE SPOTS</Link></li>
                    <li><Link to="/talksshares" className="link">TALKS & SHARES</Link></li>
                    <li><Link to="/favorites" className="link btn">FAVORITES</Link></li>
                </ul>
            </div>
            <div className={`burgermenu ${showLinks ? "show-links" : "hide-links"}`}>
                <FaBars className="burgermenu1" onClick={handleShowLinks}/>
                <IoClose className="closemenu" onClick={handleShowLinks}/>

            </div>
        </div>
    );
}


export default Header;