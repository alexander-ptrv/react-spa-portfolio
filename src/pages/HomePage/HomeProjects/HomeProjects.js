import "./HomeProjects.scss";
import ColoredDot from "../../../components/ColoredDot/ColoredDot";
import Button from "../../../components/Button/Button";
import useFetch from "../../../hooks/useFetch";
import ProjectGrid from "../../../components/ProjectGrid/ProjectGrid";
import LoadingProjectGrid from "../../../components/LoadingProjectGrid/LoadingProjectGrid";
import ErrorBadge from "../../../components/ErrorBadge/ErrorBadge";

const HomeProjects = ({sectionRef}) => {

    const {data, loading, error} = useFetch("https://wordpress.ptrv.dev/wp-json/wp/v2/project?acf_format=standard&_embed&per_page=50");

    return (  
        <div className="home-projects-wrapper section-padding" ref={sectionRef}>
            <div className="home-projects container">
                <div className="home-projects__headline">
                    <h2>Featured projects<ColoredDot /></h2> 
                    <Button variant="cta" to="/projects">View All</Button>
                </div>
                {loading && <LoadingProjectGrid />}
                {error && <ErrorBadge />}
                <ProjectGrid 
                    data={data.filter(project => project.acf.featured)} 
                />
            </div>
        </div>
    );
}
 
export default HomeProjects;