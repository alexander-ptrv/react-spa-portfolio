import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import ColoredDot from "../../components/ColoredDot/ColoredDot";
import useScrollToTop from "../../hooks/useScrollToTop";
import "./ProjectsPage.scss";
import TabbedNav from "../../components/TabbedNav/TabbedNav";
import FooterNav from "../../components/FooterNav/FooterNav";

// Tabbed nav items
const data = [
    {name: "All", link: "/projects", key: 0},
    {name: "HTML5/CSS3", link: "/projects/technology/html5-css3", key: 1},
    {name: "PHP", link: "/projects/technology/php", key: 2},
    {name: "WordPress", link: "/projects/technology/wordpress", key: 3},
    {name: "React", link: "/projects/technology/react", key: 4}
]

const ProjectsPage = () => {

    useScrollToTop();

    return (  
        <>
            <Helmet>
                <title>Alexander Petrov | Projects</title>
                <meta 
                    name="description" 
                    content="Here's some of my latest web design and development works."
                />
            </Helmet>
            <section className="projects-wrapper">
                <div className="projects container">
                    <div className="projects__headline">
                        <h1 className="projects__heading">Projects<ColoredDot /></h1>
                        <TabbedNav data={data} />
                        <div className="projects__divider"></div>
                    </div>
                    {/* Content of the outlet is in the "tabs" folder */}
                    <Outlet />
                </div>
            </section>
            <FooterNav />
        </>
    );
}
 
export default ProjectsPage;