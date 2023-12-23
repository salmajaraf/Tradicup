import Header from "../components/Header";
import Timematch from "../components/Timematch";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Countries from "../components/Countries";



function Matches(){
    return(
        <div>
            <Header/>
            <Timematch/>
            <Countries/>
            <Contact/>
            <Footer/>
        </div>
    );
}



export default Matches;