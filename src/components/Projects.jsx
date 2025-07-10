import projects from "../../public/projectslist.json";
import { useState } from 'react';
import ExpandProject from "./ExpandProject";

function Projects() {
    let projectType = [
        { lable: "All", type: 'all' },
        { lable: "Personal Project", type: 'Personal' },
        { lable: "Professional Project", type: 'Professional' }
    ];
    let [filteredProjects, setFilteredProjects] = useState(projects);
    const [selectedType, setSelectedType] = useState("all");

    const handleFilter2 = (type) => {
        setSelectedType(type);
    };

    const handleFilter = (event) => {
        if (event !== 'all') {
            const filtered = projects.filter(user => user.type == event);
            setFilteredProjects(filtered);
        } else {
            setFilteredProjects(projects);
        }
    };

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClickOpen = (scrollType, project) => () => {
        setSelectedProject(project);
        setScroll(scrollType);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <article className="portfolio active" data-page="portfolio">
                <header>
                    <h2 className="h2 article-title">Projects</h2>
                </header>
                <section className="projects">
                    <ul className="filter-list">
                        {projectType.map((perProject, index) => (
                            <li className="filter-item" onClick={() => handleFilter(perProject.type)} key={index}>
                                <button className={selectedType === perProject.type ? "active-filter" : ""}
                                    onClick={() => handleFilter2(perProject.type)}
                                    data-filter-btn>{perProject.lable}</button>
                            </li>
                        ))}
                    </ul>
                    <ul className="blog-posts-list">
                        {filteredProjects.map((project, index) => (
                            <li className="blog-post-item" key={index} onClick={handleClickOpen('paper', project)}>
                                <a href="#">
                                    <figure className="blog-banner-box">
                                        <img src={project.img} alt={project.title} loading="lazy" />
                                    </figure>
                                    <div className="blog-content">
                                        <h3 className="h3 blog-item-title">{project.title}</h3>
                                        <h4 className="projectRole">{project.role}</h4>
                                        <p className="blog-text">
                                            {project.subDesc}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
            {open && (<ExpandProject open={open} onClose={handleClose} scroll={scroll} project={selectedProject} />)}
        </>
    )
}

export default Projects;