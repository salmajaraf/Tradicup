import Header from "../components/Header";
import Timematch from "../components/Timematch";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Countries from "../components/Countries";
import Traitcolor from "../components/Traitcolor";
import Groups from "../components/Groups";


function Matches(){
    return(
        <div>
            <Header/>
            <Timematch/>
            <Traitcolor/>
            <Groups/>
            <Countries/>
            <Contact/>
            <Footer/>
        </div>
    );
}



export default Matches;