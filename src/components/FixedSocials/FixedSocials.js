import { FiGithub, FiLinkedin, FiDribbble } from "react-icons/fi";
import { RiBehanceLine } from "react-icons/ri";

import "./FixedSocials.scss";
import IconButton from "../IconButton/IconButton";


const FixedSocials = () => {
    return (  
        <div className="fixed-socials">
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
                <IconButton 
                    to="https://www.linkedin.com/in/alexander-petrov-1aa286218/" 
                    isExternal
                >
                    
                    <FiLinkedin />
                </IconButton>
            </div>
        </div>
    );
}
 
export default FixedSocials;