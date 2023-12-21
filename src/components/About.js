
import React from 'react';
import Slider from 'react-slick';
import Countdown from 'react-countdown';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/about.css';
import Traitcolor from "./Traitcolor";

import news1 from '../assets/images/news1.png';
import news2 from '../assets/images/news2.png';
import news3 from '../assets/images/news3.png';
import logo from  '../assets/images/logositevrai.png';


const About = () => {
    const worldCupDate = new Date('2030-06-01T00:00:00');
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false, // Ajout de cette option pour masquer les flèches
      autoplay:true,
      autoplaySpeed: 2000
    };
  
    return (
      <div className="about-container">
        <div className='part1'>
          <div className="news-section">
            <div><h2>Latest News</h2></div>
            <div>
              
              <Slider {...sliderSettings} className="slidecont">
                <div className="news-item">
                  <img src={news1} alt="News 1" />
                  <p>
                    World Cup 2026 to have four-team groups and 24 more games than previous editions
                    
                  </p>
                  <h5>14/03/2023 AT 18:33</h5>
                </div>
                <div className="news-item">
                  <img src={news2} alt="News 2" />
                  <p>
                    Messi leads Men's FIFA the best shortList, Lionesses for Women's Award
                  </p>
                  <h5>12/01/2023 AT 17:51</h5>
                </div>
                <div className="news-item">
                  <img src={news3} alt="News 3" />
                  <p>
                    DesChamps extends contract as France Manger
                    
                  </p>
                  <h5>07/01/2023 AT 11:44</h5>
                </div>
              </Slider>
            </div>
          </div>
          <div className="countdown-section">
            <div className='changer'>
              <div className='titrechanger'>
                <h2>World Cup 2030</h2>
              </div> 
              <div className="countdown">
                <p>Countdown Till Start</p>
                <div className='count'>
                  <Countdown  date={worldCupDate} />
                </div> 
              </div>
            </div>
          </div>
        </div>
        
        <Traitcolor/>
        <div className='part2' id='about'>
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <div className="description">
                <h2>About</h2>
                <p>Welcome to TradiCup – Where Football Meets Morocco's Rich Heritage!
                    Discover historic sites, iconic stadiums, and the latest in football excitement at TradiCup's 2030 World Cup experience. Immerse yourself in Morocco's captivating stories, from ancient wonders to the vibrant present.
                    More than matches, TradiCup is a journey through time and tradition. Uncover stories, savor traditional cuisine, and reveal the secrets of enchanting places.
                    Dive into group stage drama, witness match intensity, and be part of our fan community sharing experiences, opinions, and love for football. TradiCup is your passport to tradition, history, and the beautiful game.</p>
              </div>
        </div>
    </div>
  );
};
  
  export default About;