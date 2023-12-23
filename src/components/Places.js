import "../assets/css/places.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState,useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Places(){
    let [places, setPlaces] = useState([]);
    const [selectedOption, setSelectedOption] = useState('All');

    useEffect(()=>{
        axios.get("https://world-cup2030-api.onrender.com/places").then(
            (res)=>{
                setPlaces(res.data);
            }
        ).catch(error => {
            console.error('Une erreur s\'est produite lors de la requête', error);
          });
    },[]);
    
    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
      //filtrePlaces(selectedValue);
    };
  
    /*const filtrePlaces = (valeur) => {
      if (valeur === "All") {
        axios.get("https://world-cup2030-api.onrender.com/places")
          .then((res) => {
            setPlaces(res.data);
          })
          .catch(error => {
            console.error('Une erreur s\'est produite lors de la requête', error);
          });
      } else {
        const filtered = places.filter(place => place.city === valeur);
        setPlaces([...filtered]);
      }
    };*/
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, 
        arrows: false, 
        autoplay:true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 600, 
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            }
        ]
    };
    
    
    if (selectedOption !== "All") {
        places = places.filter((i) => {
            return i.city.match(selectedOption);
        });
    }
    
    return(
        <div className="placescontainer" id="home">
            <div className="infodest">
                <h1 className="ticlair1">Discover Morocco: World Cup 2030</h1>
                <p>Immerse yourself in the enchanting essence of Morocco, a vibrant nation and host of the 2023 World Cup.</p>

                <div className="custom-select">
                    <select id="cities" onChange={handleSelectChange} value={selectedOption}>
                        <option value="All">All</option>
                        <option value="Marrakesh">Marrakesh</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Tangier">Tangier</option>
                    </select>
                    <div className="custom-arrow"><IoIosArrowDown className="arrow5"/></div>
                </div>
                <h3 className="ticlair">Top Destinations</h3>
                <div className="places">
                <Slider {...settings} className="slideplace">
                {

                    
                    places.map((place) => {
                        const stars = Array.from({ length: 5 }, (_, index) => (
                            <FaStar key={index} className={index < Math.round(place.rating) ? 'etoilePleine' : 'etoileVide'} />
                          ));
                        return(
                        <div className="placegroup" key={place.id}>
                            <div className="imgstade">
                                <img src={place.image} alt="place.jpg"/>
                            </div>
                            <div className="content">
                                <div className="cont1">
                                    
                                    <div className="etoile">
                                        <h3>{place.city}</h3>
                                        <h4>{place.rating}</h4>
                                        <div className="nbetoile">
                                            {stars}
                                        </div>
                        
                                    </div>
                                </div>
                                <div className="cont2">
                                    <p>{place.name}</p>
                                </div>
                                <div className="cont4">
                                    <iframe src={`${place.location}`} width="95%" height="200" style={{border:"0px",margin:"5px",borderRadius:"10px"}} loading="lazy" title={place.id}></iframe>
                                </div>
                            </div>
                        </div>
                        );
                        
                    })
                    
                    
                }
                </Slider>
                </div>
            </div>
        </div>
    );
}



export default Places;