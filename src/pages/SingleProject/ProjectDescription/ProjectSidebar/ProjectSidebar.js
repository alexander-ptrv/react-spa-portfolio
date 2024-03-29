import "./ProjectSidebar.scss";

const ProjectSidebar = ({data}) => {
    return (  
        <aside className="project-sidebar">
            {/* Role widget */}
            <section className="project-sidebar__widget">
                <h4 className="project-sidebar__widget-title">
                    My role
                </h4>
                <p className="project-sidebar__widget-text">
                    {data["0"].acf.role}
                </p>
            </section>
            {/* Project technologies widget */}
            <section className="project-sidebar__widget">
                <h4 className="project-sidebar__widget-title">
                    Technologies
                </h4>
                <div className="project-sidebar__widget-tags">
                    {data["0"]._embedded["wp:term"]["1"].map((tech) => (
                        <p className="project-sidebar__widget-tag" key={tech.id}>
                            {tech.name}
                        </p>
                    ))}
                </div>
            </section>
            {/* Tools widget */}
            <section className="project-sidebar__widget">
                <h4 className="project-sidebar__widget-title">
                    Tools
                </h4>
                <div className="project-sidebar__widget-tags">
                    {data["0"]._embedded["wp:term"]["2"].map((tool) => (
                        <p className="project-sidebar__widget-tag" key={tool.id}>
                            {tool.name}
                        </p>
                    ))}
                </div>
            </section>
            {/* Project features */}
            <section className="project-sidebar__widget">
                <h4 className="project-sidebar__widget-title">
                    Main features
                </h4>
                <div className="project-sidebar__widget-tags">
                    {data["0"]._embedded["wp:term"]["0"].map((feature) => (
                        <p className="project-sidebar__widget-tag" key={feature.id}>
                            {feature.name}
                        </p>
                    ))}
                </div>
            </section>
        </aside>
    );
}
 
export default ProjectSidebar;