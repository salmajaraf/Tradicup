import { useState,useEffect } from "react";
import "../assets/css/stadeinfo.css";
import axios from "axios";
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Meteo from "./Meteo";




function Infostade(){
    const [stadiums,setStadiums]=useState([]);
    const [jsonData,setJsonData]=useState({"idStade":12,"city":"Zenata","capacity":46000,"image":"https://www.bladi.net/img/jpg/stade-zenata-casablanca.jpg","localisation":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14203.314620260167!2d-7.54233000185729!3d33.61838480341541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cc7a25c971b1%3A0xc97f27f3c9d5bd6d!2zU29jacOpdMOpIEfDqW7DqXJhbGUgWmVuYXRh!5e0!3m2!1sfr!2sma!4v1701775896655!5m2!1sfr!2sma"});
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
                        <Meteo ville={jsonData.city}/>
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
                            <div key={100} style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
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
                            </div>
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
                                <div className="stadegroup" key={index + 20}>
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