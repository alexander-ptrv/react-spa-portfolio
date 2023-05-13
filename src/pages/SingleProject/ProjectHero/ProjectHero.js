import { FiGithub, FiExternalLink } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./ProjectHero.scss";
import Button from "../../../components/Button/Button";
import ColoredDot from "../../../components/ColoredDot/ColoredDot";


const ProjectHero = ({data}) => {

    console.log(data);

    return (  
        <section className="project-hero-wrapper">
            <div className="project-hero container">
                <Link className="project-hero__back-btn" to="/projects">
                    <AiOutlineArrowLeft />All Projects
                </Link>
                <div className="project-hero__headline">
                    <h1 className="project-hero__heading">
                        {data["0"].title.rendered}<ColoredDot />
                    </h1>
                    {/* Project links */}
                    <div className="project-hero__actions">
                        {data["0"].acf.github_link && (
                            <Button 
                                variant="outlined" 
                                to={data["0"].acf.github_link} 
                                rightIcon={<FiGithub />} 
                                isExternal
                            >
                                GitHub
                            </Button>
                        )}
                        {data["0"].acf.website_link && (
                            <Button 
                                variant="cta" 
                                to={data["0"].acf.website_link} 
                                rightIcon={<FiExternalLink />} 
                                isExternal
                            >
                                Website
                            </Button>
                        )}
                    </div>
                </div>
                {/* Project scrollable screen */}
                <div className="project-hero__screen-holder">
                    <a 
                        href={data["0"].acf.full_screen_image}
                        target="_blank"
                    >
                        <img 
                            src={data["0"].acf.full_screen_image} 
                        /> 
                    </a>
                </div>
            </div>
        </section>
    );
}
 
export default ProjectHero;