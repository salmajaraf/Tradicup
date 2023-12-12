import Header from "../components/Header";
import Accueil from "../components/Accueil";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



function Home(){
    return(
        <div>
            <Header/>
            <Accueil/>
            
            <Contact/>
            <Footer/>
        </div>
    );
}



export default Home;