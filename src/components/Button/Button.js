import "./Button.scss";
import { Link } from "react-router-dom";


const Button = ({variant = "text", children, to, leftIcon, rightIcon, isExternal}) => {
    return (  
        <>
            {isExternal ? (
                <a 
                    className={`btn btn--${variant}`} 
                    href={`${to}`} 
                    target="_blank" 
                    rel="nofollow"
                >

                    {leftIcon && <div className="btn__icon">{leftIcon}</div>}
                    {children}
                    {rightIcon && <div className="btn__icon">{rightIcon}</div>}
                </a>
            ) : (
                <Link 
                    className={`btn btn--${variant}`} 
                    to={`${to}`}
                >
                    
                    {leftIcon && <div className="btn__icon">{leftIcon}</div>}
                    {children}
                    {rightIcon && <div className="btn__icon">{rightIcon}</div>}
                </Link>
            )}
        </>
    );
}
 
export default Button;