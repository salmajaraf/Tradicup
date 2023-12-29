import Header from "../components/Header";
import Countries from "../components/Countries";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Favo from "../components/Favo";

function Favorites(){
    return(
        <div>
            <Header/>
            <Favo/>
            <Countries/>
            <Contact/>
            <Footer/>
        </div>
    );
}



export default Favorites;