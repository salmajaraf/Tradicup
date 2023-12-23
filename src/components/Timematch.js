import "../assets/css/timematch.css";
//import { useEffect } from 'react';
//import axios from "axios";
import ball from '../assets/images/ball.png';
function Timematch(){
    /*useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              'http://api.football-data.org/v4/competitions/WC/matches',
              {
                headers: {
                  'X-Unfold-Goals': 'true',
                  'X-Auth-Token': '0111caf596514551869474310d546cb6', 
                },
              }
            );
            console.log(response.data); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);*/






    return(
       <div className="Match_section">
        <div className="Title_section">
            <div className="Balle">
            <img src={ball} alt="ball.png"/>
            </div>
            <div className="Title">
                <div className="Title_para">
                    <h1>MATHCHES OF THE DAY</h1>
                </div>
                <div className="select" >
                    <select></select>
                </div>  
            </div>
            
        </div>
        <div className="Matches">

        </div>
       </div>
    );
}
export default Timematch;