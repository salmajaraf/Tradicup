import React from 'react';
import Slider from 'react-slick';
import Countdown from 'react-countdown';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/about.css';


import news1 from '../assets/images/news1.png';
import news2 from '../assets/images/news2.png';
import news3 from '../assets/images/news3.png';


const About = () => {
    const worldCupDate = new Date('2030-06-01T00:00:00');
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false, // Ajout de cette option pour masquer les flèches
    };
  
    return (
      <div className="about-container">
        <div className="news-section">
          <h2>Latest News</h2>
          <Slider {...sliderSettings}>
            <div className="news-item">
              <img src={news1} alt="News 1" />
              <p>
                <strong>World Cup 2026 to have four-team groups and 24 more games than previous editions</strong>
                <br />
                <small>14/03/2023 AT 18:33</small>
              </p>
            </div>
            <div className="news-item">
              <img src={news2} alt="News 2" />
              <p>
                <strong>Messi leads Men's FIFA the best shortList, Lionesses for Women's Award</strong>
                <br />
                <small>12/01/2023 AT 17:51</small>
              </p>
            </div>
            <div className="news-item">
              <img src={news3} alt="News 3" />
              <p>
                <strong>DesChamps extends contract as France Manger</strong>
                <br />
                <small>07/01/2023 AT 11:44</small>
              </p>
            </div>
          </Slider>
        </div>
        <div className="countdown-section">
          <h2>World Cup 2030 Countdown</h2>
          <Countdown date={worldCupDate} />
        </div>
      </div>
    );
  };
  
  export default About;