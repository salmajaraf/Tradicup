import Header from "../components/Header";
import Accueil from "../components/Accueil";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";



function Home(){
    return(
        <div>
            <Header/>
            <Accueil/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
}



export default Home;