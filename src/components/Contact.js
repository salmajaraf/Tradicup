import "../assets/css/contact.css";
import imgcontact from "../assets/images/imgcont.png"
import { FaCircleArrowUp } from "react-icons/fa6";


function Contact(){
    return(
        <div className="contact" id="contact">
            <h1 className="ticlair chlen">CONTACT US</h1>
            <div className="information">
                <div className="imgcontact">
                    <img src={imgcontact} alt="pers.png"/>
                </div>
                <div className="formu">
                    <form id="form" action="#">
                        <p>Feel free to ask any question</p>
                        <input type="email" placeholder="Email Adress"/><br/>
                        <input type="text" placeholder="First Name"/><br/>
                        <input type="text" placeholder="Last Name"/><br/>
                        <textarea placeholder="Message"></textarea><br/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            </div>
            <div className="retour">
                <div className="mon"><a href="#home"><FaCircleArrowUp className="fleche"/></a></div>
            </div>
        </div>
    
    );
}


export default Contact;