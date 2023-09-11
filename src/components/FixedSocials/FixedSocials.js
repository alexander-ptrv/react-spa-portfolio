import { FiGithub, FiLinkedin, FiDribbble } from "react-icons/fi";
import { RiBehanceLine } from "react-icons/ri";
import "./FixedSocials.scss";
import IconButton from "../IconButton/IconButton";

const FixedSocials = () => {
    return (  
        <aside className="fixed-socials">
            <div className="fixed-socials__list">
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
            </div>
        </aside>
    );
}
 
export default FixedSocials;