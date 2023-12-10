import "../assets/css/footer.css";


import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

function Footer(){
    return(
        <div className="footer">
            <div className="iconcon">
                <a href="mailto:info.contact@tradicup.com" className="divico" target="_blank" rel="noreferrer"><MdOutlineMail className="iconeres"/></a>
                <a href="tel:+212622331111" className="divico" target="_blank" rel="noreferrer"><BsTelephoneFill className="iconeres"/></a>
                <a href="https://fr.linkedin.com/" className="divico" target="_blank" rel="noreferrer"><FaLinkedinIn className="iconeres"/></a>
                <a href="https://www.instagram.com/" className="divico" target="_blank" rel="noreferrer"><BsInstagram className="iconeres"/></a>

            </div>
            <p>Copyright All Rights Reserved © 2023 YE - SJ TradiCup </p>
        </div>
    
    );
}


export default Footer;