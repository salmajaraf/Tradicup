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
                <strong>Spain, Portugal and Morocco to host FIFA World Cup 2030</strong>
                <br />
                <small>4/10/2023 AT 16:21</small>
              </p>
            </div>
            <div className="news-item">
              <img src={news3} alt="News 3" />
              <p>
                <strong>CAF: Morocco’s Hosting of FIFA World Cup 2030 Will Contribute to Development of Football in Africa</strong>
                <br />
                <small>5/12/2023 AT 10:16</small>
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