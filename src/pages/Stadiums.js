import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Infostade from "../components/Infostade";
import Countries from "../components/Countries";



function Stadiums(){
    return(
        <div>
            <Header/>
            <Infostade/>
            <Countries/>
            <Contact/>
            <Footer/>
        </div>
    );
}



export default Stadiums;