import "./ProjectGallery.scss";

const ProjectGallery = ({data}) => {

    // Project gallery images from strapi API. Can only show 3 images.
    const image1 = data["0"].acf.project_image_1;
    const image2 = data["0"].acf.project_image_2;
    const image3 = data["0"].acf.project_image_3;

    return (  
        <div className="project-gallery-wrapper">
            <div className="project-gallery container container--2-xl">
                <div className="project-gallery__grid">
                    {/* Checking if images exist */}
                    {image1 && (
                        <a 
                            href={data["0"].acf.project_image_1}
                            target="_blank"
                        >
                            <img 
                                className="project-gallery__image"
                                src={data["0"].acf.project_image_1} 
                            /> 
                        </a>
                    )}
                    {image2 && (
                        <a 
                            href={data["0"].acf.project_image_2}
                            target="_blank"
                        >
                            <img 
                                className="project-gallery__image"
                                src={data["0"].acf.project_image_2} 
                            /> 
                        </a>
                    )}
                    {image3 && (
                        <a 
                            href={data["0"].acf.project_image_3}
                            target="_blank"
                        >
                            <img 
                                className="project-gallery__image"
                                src={data["0"].acf.project_image_3} 
                            /> 
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default ProjectGallery;