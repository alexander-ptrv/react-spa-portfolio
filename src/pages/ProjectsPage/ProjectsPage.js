import { Helmet } from "react-helmet";

import ColoredDot from "../../components/ColoredDot/ColoredDot";
import useScrollToTop from "../../hooks/useScrollToTop";
import "./ProjectsPage.scss";
import FooterNav from "../../components/FooterNav/FooterNav";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import LoadingProjectGrid from "../../components/LoadingProjectGrid/LoadingProjectGrid";
import useFetch from "../../hooks/useFetch";
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
            <section className="projects-wrapper">
                <div className="projects container">
                    <div className="projects__headline">
                        <h1 className="projects__heading">Projects<ColoredDot /></h1>
                    </div>
                    {loading && <LoadingProjectGrid />}
                    {error && <ErrorBadge />}
                    <ProjectGrid data={data} />
                </div>
            </section>
            <FooterNav />
        </>
    );
}
 
export default ProjectsPage;