import { useState,useEffect } from "react";
import "../assets/css/stadeinfo.css";
import axios from "axios";
import { IoIosInformationCircle } from "react-icons/io";



function Stadeinfo(){
    const [stadiums,setStadiums]=useState([]);
    useEffect(()=>{
        axios.get("https://world-cup2030-api.onrender.com/stadiums").then(
            (res)=>{
                setStadiums(res.data);
            }
        ).catch(error => {
            console.error('Une erreur s\'est produite lors de la requête', error);
          });
    },[]);
    return(
        <div  className="stadecontainer">
            <div className="titrecont">
                <h1 className="ticlair1">DISCOVER THE MOROCCAN <br/>STADIUMS</h1>
            </div>
            <div className='containerstadiums'>

            {stadiums.map((stadium, index) => {
                if ([1, 4, 7, 10, 13].includes(stadium.idStade)) {
                    return (
                        <div className='card' key={stadium.idStade}>
                            <div className='imgcard'>
                                <img src={stadium.image} alt="imgstadium.jpg" />
                            </div>
                            <div className='cont'>
                                <h3>{stadium.city}</h3>
                                <IoIosInformationCircle className="infobtn"/>
                            </div>
                        </div>
                    );
                } else {
                    // Si l'élément est dans les indices pairs (2, 4, 6, ...), créez le groupe de deux cartes
                    if ([2, 5, 8, 11].includes(stadium.idStade)) {
                        return (
                            <div className="stadegroup" key={stadium.idStade}>
                                <div className='card1'>
                                    <div className='imgcard'>
                                        <img src={stadium.image} alt="imgstadium.jpg" />
                                    </div>
                                    <div className='cont'>
                                        <h3>{stadium.city}</h3>
                                        <IoIosInformationCircle className="infobtn"/>
                                    </div>
                                </div>
                                {index + 1 < stadiums.length && (
                                    <div className='card1'>
                                        <div className='imgcard'>
                                            <img src={stadiums[index + 1].image} alt="imgstadium.jpg" />
                                        </div>
                                        <div className='cont'>
                                            <h3>{stadiums[index + 1].city}</h3>
                                            <IoIosInformationCircle className="infobtn"/>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    } else {
                        return null; // Pour les éléments impairs, ne rien rendre
                    }
                }
             })}
            </div>
        </div>
    );
}


export default Stadeinfo;