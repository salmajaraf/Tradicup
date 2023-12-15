import Foods from "../components/Foods";
import Header from "../components/Header";
import Places from "../components/Places";
import Traitcolor from "../components/Traitcolor";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function ExploreSpots(){
    return(
        <div>
            <Header/>
            <Places/>
            <Traitcolor/>
            <Foods/>
            <Contact/>
            <Footer/>
        </div>
    );
}



export default ExploreSpots;