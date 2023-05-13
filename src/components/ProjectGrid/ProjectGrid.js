import { Link } from "react-router-dom";

import "./ProjectGrid.scss";


const ProjectGrid = ({data}) => {

    return (
        <div className="project-grid">
            {data.map((project) => (
                <Link className="project-card" to={`/projects/${project.slug}`} key={project.id}>
                    <div className="project-card__overlay">
                        <div className="project-card__info">
                            <h3 className="project-card__title">{project.title.rendered}</h3>
                            <p className="project-card__description" dangerouslySetInnerHTML={{__html: project.excerpt.rendered}} />
                        </div>
                        <div className="project-card__tags">
                            {project._embedded["wp:term"]["1"].map((tech) => (
                                <span className="project-card__tag" key={tech.id}>{tech.name}</span>
                            ))}
                        </div>
                    </div>
                    <img 
                        className="project-card__thumbnail" 
                        src={project._embedded["wp:featuredmedia"]["0"].source_url}  
                    />
                    <div className="project-card__mobile-content">
                        <div className="project-card__info">
                            <h3 className="project-card__title">{project.title.rendered}</h3>
                            <p className="project-card__description">{project.excerpt.rendered}</p>
                        </div>
                        <div className="project-card__tags">
                            {project._embedded["wp:term"]["1"].map((tech) => (
                                <span className="project-card__tag" key={tech.id}>{tech.name}</span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default ProjectGrid;