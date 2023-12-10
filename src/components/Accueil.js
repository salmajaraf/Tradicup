import "../assets/css/accueil.css";
import { IoIosArrowDown } from "react-icons/io";


function Accueil(){
    return(
        <div  className="banner" id="home">
            <h1 className="hometitre">TradiCup</h1>
            <a href="#about">DISCOVER MORE &nbsp;&nbsp;<IoIosArrowDown className="arrow"/></a>
        </div>
    );
}


export default Accueil;