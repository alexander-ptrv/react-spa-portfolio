import { Link } from "react-router-dom";

import "./IconButton.scss";


const IconButton = ({variant = "icon-only", children, to, isExternal}) => {
    return (  
        <>
            {isExternal ? (
                <a 
                    className={`icon-btn icon-btn--${variant}`} 
                    href={`${to}`} 
                    target="_blank" 
                    rel="nofollow"
                >
                    {children}
                </a>
            ) : (
                <Link 
                    className={`icon-btn icon-btn--${variant}`} 
                    to={`${to}`}
                >
                    {children}
                </Link>
            )}
        </>
    );
}
 
export default IconButton;