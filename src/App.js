import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Matches from './pages/Matches';
import Stadiums from './pages/Stadiums';
import ExploreSpots from './pages/ExploreSpots';
import TalksShares from './pages/TalksShares';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/matches' element={<Matches/>} />
        <Route path='/stadiums' element={<Stadiums/>} />
        <Route path='/explorespots' element={<ExploreSpots/>} />
        <Route path='/talksshares' element={<TalksShares/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </div>
  );
}

export default App;
