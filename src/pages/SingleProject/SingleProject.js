import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import useFetch from "../../hooks/useFetch";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import ProjectHero from "./ProjectHero/ProjectHero";
import useScrollToTop from "../../hooks/useScrollToTop";
import ProjectFooter from "./ProjectFooter/ProjectFooter";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const SingleProject = () => {

    const {slug} = useParams();

    const {data, loading, error} = useFetch(`https://wordpress.ptrv.dev/wp-json/wp/v2/project?slug=${slug}&_embed&acf_format=standard`);
    
    const seoTitle = data.title?.rendered;
    const seoDescription = data.content?.rendered;

    useScrollToTop();

    return (  
        <>  
            <Helmet>
                <title>Alexander Petrov | {`${seoTitle}`}</title>
                <meta 
                    name="description" 
                    content={`${seoDescription}`}
                />
            </Helmet>
            {loading || error ? (
                <LoadingScreen loading={loading} error={error} />
            ) : (
                <>
                    <ProjectHero data={data} />
                    <ProjectDescription data={data} />
                    <ProjectGallery data={data} />
                    <ProjectFooter />
                </>
            )}
        </>
    );
}
 
export default SingleProject;