import { FiGithub, FiLinkedin, FiDribbble } from "react-icons/fi";
import { RiTelegramLine, RiBehanceLine } from "react-icons/ri";

import { toggleCurtain } from "../../utils/utils";
import { NavLink } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import "./Curtain.scss";
import OpenFormButton from "../OpenFormButton/OpenFormButton";


// Curtain menu items
const data = [
    {name: "Home", link: "/", key: 0},
    {name: "Projects", link: "/projects", key: 1}
]

const Curtain = () => {
    return (  
        <aside className="curtain-wrapper">
            <div className="curtain container container--md">
                <div className="curtain__columns">
                    {/* Left column */}
                    <nav className="curtain__nav">
                        {data.map((item) => (
                            <NavLink 
                                className="curtain__menu-item"
                                to={item.link} 
                                key={item.key}
                                onClick={toggleCurtain}
                                end={true}
                            >

                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                    {/* Right column */}
                    <div className="curtain__contacts">
                        <div className="curtain__widgets">
                            {/* Email widget. */}
                            <div className="curtain__widget">
                                <p className="curtain__overline">Email</p>
                                <a 
                                    className="curtain__email" 
                                    href="mailto:ptrv.dev@gmail.com"
                                >

                                    ptrv.dev@gmail.com
                                </a>
                            </div>
                            {/* Messengers widget */}
                            <div className="curtain__widget">
                                <p className="curtain__overline">Send a message</p>
                                <div className="curtain__messengers">
                                    <a 
                                        className="curtain__messenger-btn curtain__messenger-btn--telegram" 
                                        href="https://t.me/ptrvdev"
                                        rel="nofollow"
                                        target="_blank"
                                    >

                                        <RiTelegramLine />Telegram
                                    </a>
                                    {/* <a 
                                        className="curtain__messenger-btn curtain__messenger-btn--whatsapp" 
                                        href="https://wa.me/89680272018"
                                        rel="nofollow"
                                        target="_blank"
                                    >

                                        <RiWhatsappLine />WhatsApp
                                    </a> */}
                                </div>
                            </div>
                            {/* Social media widget */}
                            <div className="curtain__widget">
                                <p className="curtain__overline">Follow</p>
                                <div className="curtain__socials">
                                    <IconButton 
                                        to="https://dribbble.com/alexander-ptrv" 
                                        isExternal
                                    >

                                        <FiDribbble />
                                    </IconButton>
                                    <IconButton 
                                        to="https://www.behance.net/alexander-ptrv" 
                                        isExternal
                                    >

                                        <RiBehanceLine />
                                    </IconButton>
                                    <IconButton 
                                        to="https://github.com/alexander-ptrv" 
                                        isExternal
                                    >

                                        <FiGithub />
                                    </IconButton>
                                    <IconButton 
                                        to="https://www.linkedin.com/in/alexander-petrov-1aa286218/" 
                                        isExternal
                                    >

                                        <FiLinkedin />
                                    </IconButton>
                                </div>
                            </div>
                            <OpenFormButton>Get in Touch</OpenFormButton>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
 
export default Curtain;