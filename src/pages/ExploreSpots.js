import Foods from "../components/Foods";
import Header from "../components/Header";
import Places from "../components/Places";
import Traitcolor from "../components/Traitcolor";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Countries from "../components/Countries";

function ExploreSpots(){
    return(
        <div>
            <Header/>
            <Places/>
            <Traitcolor/>
            <Foods/>
            <Countries/>
            <Contact/>
            <Footer/>
        </div>
    );
}



export default ExploreSpots;