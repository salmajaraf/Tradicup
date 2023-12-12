import { useState,useEffect } from "react";
import "../assets/css/stadeinfo.css";
import axios from "axios";
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Meteo from "./Meteo";




function Infostade(){
    const [stadiums,setStadiums]=useState([]);
    const [jsonData,setJsonData]=useState({});
    useEffect(()=>{
        axios.get("https://world-cup2030-api.onrender.com/stadiums").then(
            (res)=>{
                setStadiums(res.data);
            }
        ).catch(error => {
            console.error('Une erreur s\'est produite lors de la requête', error);
          });
    },[]);
    const extand = ()=>{
        let content = document.getElementById("voir");
        let arrow = document.getElementById("arrow");
        if(content.style.display==="flex"){
            content.style.display="none";
            arrow.style.transform="rotate(0deg)";
        }
        else{
            content.style.display="flex";
            arrow.style.transform="rotate(180deg)";
        }
    };
    const popup = (idStade)=>{
        const filtre = document.getElementById("filtre");
        const stade = document.getElementById("stade");
        stade.style.display="block";
        filtre.style.display="block";
        fetch(`https://world-cup2030-api.onrender.com/stadiums/${idStade}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setJsonData(data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
    };
    const close = ()=>{
        const filtre = document.getElementById("filtre");
        const stade = document.getElementById("stade");
        stade.style.display="none";
        filtre.style.display="none";
    };
    return(
        <div  className="stadecontainer" id="home">
            <div className="titrecont">
                <h1 className="ticlair1">DISCOVER THE MOROCCAN <br/>STADIUMS</h1>
            </div>
            {/*pop up */}
            {}
            <div className="overlay" id="filtre"></div>
            <div id="stade">
                <div className="imgstade">
                    <img src={jsonData.image} alt="stade.jpg"/>
                </div>
                <div className="content">
                    <div className="cont1">
                        <h3>{jsonData.city}</h3>
                        <IoClose className="iconeclosestade" onClick={close}/>
                    </div>
                    <div className="cont2">
                        <p>Capacity : {jsonData.capacity}</p>
                    </div>
                    <div className="cont3">
                        <Meteo/>
                    </div>
                    <div className="cont4">
                        <iframe src={`${jsonData.localisation}`} width="95%" height="200" style={{border:"0px",margin:"5px",borderRadius:"10px"}} loading="lazy" title={jsonData.idStade}></iframe>
                    </div>
                </div>
            
            </div>
            {/*pop up */}
            <div className='containerstadiums'>

            {stadiums.map((stadium, index) => {
                if([1,2,3].includes(stadium.idStade)){
                    if(stadium.idStade === 1){
                        return(
                            <>
                            <div className='card' key={stadium.idStade}>
                                <div className='imgcard'>
                                    <img src={stadium.image} alt="imgstadium.jpg" />
                                </div>
                                <div className='cont'>
                                    <h3>{stadium.city}</h3>
                                    <IoIosInformationCircle className="infobtn" onClick={()=>{popup(stadium.idStade)}}/>
                                </div>
                            </div>
                            <div className="stadegroup" >
                                <div className='card1' key={stadiums[index + 1].idStade}>
                                    <div className='imgcard'>
                                        <img src={stadiums[index + 1].image} alt="imgstadium.jpg" />
                                    </div>
                                    <div className='cont'>
                                        <h3>{stadiums[index + 1].city}</h3>
                                        <IoIosInformationCircle className="infobtn" onClick={()=>{popup(stadiums[index + 1].idStade)}}/>
                                    </div>
                                </div>
                                <div className='card1' key={stadiums[index + 2].idStade}>
                                    <div className='imgcard'>
                                        <img src={stadiums[index + 2].image} alt="imgstadium.jpg" />
                                    </div>
                                    <div className='cont'>
                                        <h3>{stadiums[index + 2].city}</h3>
                                        <IoIosInformationCircle className="infobtn" onClick={()=>{popup(stadiums[index + 2].idStade)}}/>
                                    </div>
                                </div>
                            </div>
                            </>
                        );
                    }
                    else{
                        return null;
                    }
                }
                else{
                    return null;
                }
            })}
            <div id="voir">
            {stadiums.map((stadium, index) => {
                if([1,2,3].includes(stadium.idStade)){
                    return null;
                }
                else{
                    if ([4, 7, 10, 13].includes(stadium.idStade)) {
                        return (
                            <div className='card' key={stadium.idStade}>
                                <div className='imgcard'>
                                    <img src={stadium.image} alt="imgstadium.jpg" />
                                </div>
                                <div className='cont'>
                                    <h3>{stadium.city}</h3>
                                    <IoIosInformationCircle className="infobtn" onClick={()=>{popup(stadium.idStade)}}/>
                                </div>
                            </div>
                        );
                    } else {
                        if ([5, 8, 11].includes(stadium.idStade)) {
                            return (
                                <div className="stadegroup" >
                                    <div className='card1' key={stadium.idStade}>
                                        <div className='imgcard'>
                                            <img src={stadium.image} alt="imgstadium.jpg" />
                                        </div>
                                        <div className='cont'>
                                            <h3>{stadium.city}</h3>
                                            <IoIosInformationCircle className="infobtn" onClick={()=>{popup(stadium.idStade)}}/>
                                        </div>
                                    </div>
                                    {index + 1 < stadiums.length && (
                                        <div className='card1' key={stadiums[index + 1].idStade}>
                                            <div className='imgcard'>
                                                <img src={stadiums[index + 1].image} alt="imgstadium.jpg" />
                                            </div>
                                            <div className='cont'>
                                                <h3>{stadiums[index + 1].city}</h3>
                                                <IoIosInformationCircle className="infobtn" onClick={()=>{popup(stadiums[index + 1].idStade)}}/>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        } else {
                            return null; 
                        }
                    }
                }
             })}
             </div>
            </div>
            <div className="btnsec">
                <button className="btnvoir" onClick={extand}>See More<IoIosArrowDown className="voiricone" id="arrow"/></button>
            </div>
        </div>
    );
}


export default Infostade;