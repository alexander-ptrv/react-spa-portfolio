import "./ProjectDescription.scss";
import ColoredDot from "../../../components/ColoredDot/ColoredDot";
import TextBlock from "../../../components/TextBlock/TextBlock";
import ProjectSidebar from "./ProjectSidebar/ProjectSidebar";


const ProjectDescription = ({data}) => {
    return (  
        <section className="project-description-wrapper section-padding">
            <div className="project-description container container--md">
                <div className="project-description__columns">
                    {/* Left column */}
                    <div className="project-description__left">
                        <h2 className="project-description__title">
                            About this project<ColoredDot />
                        </h2>
                        <div className="project-description__text">
                            <TextBlock content={data["0"].content.rendered} />
                        </div>
                    </div>
                    {/* Right column */}
                    <div className="project-description__right">
                        <ProjectSidebar data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default ProjectDescription;