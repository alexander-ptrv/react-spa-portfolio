import ProjectGrid from "../../../components/ProjectGrid/ProjectGrid";
import LoadingProjectGrid from "../../../components/LoadingProjectGrid/LoadingProjectGrid";
import useFetch from "../../../hooks/useFetch";
import ErrorBadge from "../../../components/ErrorBadge/ErrorBadge";

const AllProjectTab = () => {

    const {data, loading, error} = useFetch("https://wordpress.ptrv.dev/wp-json/wp/v2/project?acf_format=standard&_embed&per_page=50");

    return (  
        <>
            {loading && <LoadingProjectGrid />}
            {error && <ErrorBadge />}
            <ProjectGrid data={data} />
        </>
    );
}
 
export default AllProjectTab;