import { Outlet } from "react-router-dom";

import "./HomeAbout.scss";
import photo from "../../../assets/images/home-photo.png";
import ColoredDot from "../../../components/ColoredDot/ColoredDot";
import TabbedNav from "../../../components/TabbedNav/TabbedNav";


// Tabbed menu items
const data = [
    {name: "About", link: "/", key: 0},
    {name: "Skills", link: "/skills", key: 1},
    {name: "Experience", link: "/experience", key: 2}
]

const HomeAbout = () => {
    return (  
        <section className="home-about-wrapper section-padding">
            <div className="home-about container container--md">
                <div className="home-about__columns">
                    <div className="home-about__left">
                        <div className="home-about__headline">
                            <h2>Experience and skills<ColoredDot /></h2>
                        </div>
                        <TabbedNav data={data} />
                        <div className="home-about__divider"></div>
                        <div className="home-about__tab">
                            {/* Content of the outlet is in the "tabs" folder */}
                            <Outlet />
                        </div>
                    </div>
                    <div className="home-about__right">
                        <img 
                            className="home-about__image" 
                            src={photo} 
                            alt="Alexander Petrov photo" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default HomeAbout;