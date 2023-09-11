import { Helmet } from "react-helmet";
import ColoredDot from "../../components/ColoredDot/ColoredDot";
import useScrollToTop from "../../hooks/useScrollToTop";
import useFetch from "../../hooks/useFetch";
import "./ProjectsPage.scss";
import FooterNav from "../../components/FooterNav/FooterNav";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import LoadingProjectGrid from "../../components/LoadingProjectGrid/LoadingProjectGrid";
import ErrorBadge from "../../components/ErrorBadge/ErrorBadge";

const ProjectsPage = () => {

    const {data, loading, error} = useFetch("https://wordpress.ptrv.dev/wp-json/wp/v2/project?acf_format=standard&_embed&per_page=50");
    
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
            <div className="projects-wrapper">
                <div className="projects container">
                    <h1 className="projects__heading">Projects<ColoredDot /></h1>
                    {loading && <LoadingProjectGrid />}
                    {error && <ErrorBadge />}
                    <ProjectGrid data={data} />
                </div>
            </div>
            <FooterNav />
        </>
    );
}
 
export default ProjectsPage;