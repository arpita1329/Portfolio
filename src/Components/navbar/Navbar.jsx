import "./navbar.scss";
import { Person, Mail, LinkedIn} from "@material-ui/icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Developer.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span onClick={() => window.open("tel:+8306628715","_blank")}>+91 830 662 8715</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=arpitadubey1329@gmail.com","_blank")}>arpita1329@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon" />
                        <span onClick={() => window.open("https://www.linkedin.com/in/arpita-dubey1329/","_blank")}>Arpita Dubey</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
