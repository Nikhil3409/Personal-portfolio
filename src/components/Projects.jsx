import projects from "../../public/projectslist.json";
import { useState } from 'react';
import ExpandProject from "./ExpandProject";

function Projects() {
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
                    <h2 className="h2 article-title"></h2>
                </header>
                <section className="projects">
                    {/* <ul className="filter-list">
                        <li className="filter-item">
                            <button className="active" data-filter-btn>All</button>
                        </li>
                        <li className="filter-item">
                            <button data-filter-btn>Professional Projects</button>
                        </li>
                        <li className="filter-item">
                            <button data-filter-btn>Personal Projects</button>
                        </li>
                    </ul> */}
                    <ul className="blog-posts-list">
                        {projects.map((project, index) => (
                            <li className="blog-post-item" key={index} onClick={handleClickOpen('paper', project)}>
                                <a href="#">
                                    <figure className="blog-banner-box">
                                        <img src={project.img} alt={project.title} loading="lazy" />
                                    </figure>
                                    <div className="blog-content">
                                        <h3 className="h3 blog-item-title">{project.title}</h3>
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