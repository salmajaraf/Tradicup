import "../assets/css/stadeinfo.css";
import { FaCloud } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { BsCloudSunFill } from "react-icons/bs";
import { useState,useEffect } from "react";
import { BsFillCloudsFill } from "react-icons/bs";
import { FaCloudSunRain } from "react-icons/fa";
import axios from "axios";
import { FaCloudShowersHeavy } from "react-icons/fa6";
import { IoThunderstorm } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { RiMistFill } from "react-icons/ri";
function Meteo(props) {
    const { ville } = props;
    /*const villeAsString = String(ville);*/
    const apikey = "99fe5aaa88d1cdeccd365d48f5ec488d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=Metric&appid=${apikey}`;
    const [meteo, setMeteo] = useState({});
    const [icone, setIcone] = useState(<FaCloud className="metico" />);
  
    useEffect(() => {
      axios
        .get(url)
        .then(response => {
          setMeteo(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
        if(meteo.weather && (meteo.weather[0].icon==="01d" || meteo.weather[0].icon==="01n")){
            setIcone(<HiSun className="metico" />)
        }
        else{
            if(meteo.weather && (meteo.weather[0].icon==="02d" || meteo.weather[0].icon==="02n")){
                setIcone(<BsCloudSunFill className="metico" />)
            }
            else{
                if(meteo.weather && (meteo.weather[0].icon==="03d" || meteo.weather[0].icon==="03n")){
                    setIcone(<FaCloud className="metico" />)
                }
                else{
                    if(meteo.weather && (meteo.weather[0].icon==="04d" || meteo.weather[0].icon==="04n")){
                        setIcone(<BsFillCloudsFill  className="metico" />)
                    }
                    else{
                        if(meteo.weather && (meteo.weather[0].icon==="09d" || meteo.weather[0].icon==="09n")){
                            setIcone(<FaCloudShowersHeavy className="metico" />)
                        }
                        else{
                            if(meteo.weather && (meteo.weather[0].icon==="10d" || meteo.weather[0].icon==="10n")){
                                setIcone(<FaCloudSunRain  className="metico" />)
                            }
                            else{
                                if(meteo.weather && (meteo.weather[0].icon==="11d" || meteo.weather[0].icon==="11n")){
                                    setIcone(<IoThunderstorm className="metico" />)
                                }
                                else{
                                    if(meteo.weather && (meteo.weather[0].icon==="13d" || meteo.weather[0].icon==="13n")){
                                        setIcone(<FaRegSnowflake  className="metico" />)
                                    }
                                    else{
                                        if(meteo.weather && (meteo.weather[0].icon==="50d" || meteo.weather[0].icon==="50n")){
                                            setIcone(<RiMistFill className="metico" />)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, [url,meteo.weather]);
  
    return (
      <>
        <div className="metimg">{icone}</div>
        <div className="metcont">
          <h4>{meteo.main && meteo.main.temp} °C</h4>
          <p>{meteo.weather && meteo.weather[0].description}</p>
        </div>
      </>
    );
  }
  
  export default Meteo;