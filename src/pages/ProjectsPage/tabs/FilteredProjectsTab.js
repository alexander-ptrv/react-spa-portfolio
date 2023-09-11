import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import ProjectGrid from "../../../components/ProjectGrid/ProjectGrid";
import LoadingProjectGrid from "../../../components/LoadingProjectGrid/LoadingProjectGrid";
import ErrorBadge from "../../../components/ErrorBadge/ErrorBadge";

const FilteredProjectsTab = () => {

    const {slug} = useParams();

    // Filters do not work without "WP REST API Filter Parameter" plugin installed in the backend
    // https://github.com/WP-API/rest-filter
    const {data, loading, error} = useFetch(`https://wordpress.ptrv.dev/wp-json/wp/v2/project?filter[technology]=${slug}&_embed&acf-format=standard&per_page=50`);

    return (  
        <>
            {loading && <LoadingProjectGrid />}
            {error && <ErrorBadge />}
            <ProjectGrid data={data} />
        </>
    );
}
 
export default FilteredProjectsTab;