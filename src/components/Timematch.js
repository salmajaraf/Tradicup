import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ball from '../assets/images/ball.png';
import "../assets/css/timematch.css";

function Timematch() {
  const [matches, setMatches] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://world-cup2030-api-pkq6.onrender.com/matches'
        );
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredMatches = matches.filter(
    (match) =>
      new Date(match.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="Match_section" id="home">
      <div className="head">
        <div className="Balle">
          <img src={ball} alt="ball.png" />
        </div>
        <div className="Title">
          <div className="Title_para">
            <h1>MATCHES OF THE DAY</h1>
          </div>
          <div className="select">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                minDate={new Date('2024-01-01')}
                maxDate={new Date('2024-09-01')}
              />
          </div>
        </div>
      </div>
      <div className="Matches">
        {filteredMatches.length === 0 ? (
          <div className="NoMatches">No Matches For Today</div>
        ) : (
          filteredMatches.map((match) => (
            <div className="SingleMatche" key={match.id}>
              <div className="team1">
                <div className="flag">
                  <img src={match.team1.flag} alt="Flag" />
                </div>
                <div className="pays1">{match.team1.name}</div>
              </div>
              <div className="place">
                <div className="stadium">{match.stadium}</div>
                <div className="time">{match.time}</div>
              </div>
              <div className="team2">
                <div className="pays2">{match.team2.name}</div>
                <div className="flag">
                  <img src={match.team2.flag} alt="Flag" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Timematch;
