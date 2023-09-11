import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { handleLogoClick } from "../../utils/utils";
import logo from "../../assets/images/ptrv-logo.svg";
import Hamburger from "./Hamburger/Hamburger";
import "./Header.scss";

const Header = () => {
    return (  
        <header className="header-wrapper">
            <div className="header">
                {/* Logo holder */}
                <Link to="/">
                    <img 
                        className="header__logo" 
                        src={logo} 
                        alt="ptrv logo" 
                        onClick={handleLogoClick}
                    />
                </Link>
                {/* Header actions */}
                <div className="header__actions">
                    <a 
                        className="header__email-btn" 
                        href="mailto:ptrv.dev@gmail.com"
                        rel="nofollow"
                    >
                        ptrv.dev@gmail.com
                    </a>
                    <a 
                        className="header__email-icon" 
                        href="mailto:ptrv.dev@gmail.com"
                        rel="nofollow"
                    >
                        <AiOutlineMail />
                    </a>
                    <Hamburger />
                </div>
            </div>
        </header>
    );
}
 
export default Header;