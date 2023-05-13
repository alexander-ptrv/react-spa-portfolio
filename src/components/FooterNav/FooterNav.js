import { NavLink } from "react-router-dom";
import "./FooterNav.scss";


// Footer menu items
const data = [
    {name: "Home", link: "/", key: 0},
    {name: "Projects", link: "/projects", key: 1}
]

const FooterNav = () => {
    return (  
        <section className="footer-nav-wrapper">
            <nav className="footer-nav container">
                {data.map((item) => (
                    <NavLink 
                    className="footer-nav__menu-item" 
                    to={item.link} 
                    key={item.key}
                    end={true}
                    >
                        
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </section>
    );
}
 
export default FooterNav;