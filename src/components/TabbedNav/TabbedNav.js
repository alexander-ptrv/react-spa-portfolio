import { NavLink } from "react-router-dom";

import "./TabbedNav.scss";


// Menu items are storred in parent component and passed through props

const TabbedNav = ({data}) => {
    return (  
        <nav className="tabbed-nav">
            {data.map((item) => (
                <NavLink 
                    className="tabbed-nav__menu-item" 
                    to={item.link}
                    key={item.key}
                    end={true}
                >
                    
                    {item.name}
                </NavLink>
            ))}
        </nav>
    );
}
 
export default TabbedNav;