import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useEffect, useRef } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ExpandProject({ open, onClose, scroll, project }) {
    // console.log("project", project);
    const descriptionElementRef = useRef(null);

    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <Dialog open={open} onClose={onClose} scroll={scroll} maxWidth="md" sx={{ '& .MuiPaper-root': { backgroundColor: '#1E1E1F', } }}>
            <DialogTitle className='projectTitle'>
                {project?.title || "Project Details"}
                {project.url !== "" &&
                    <button className="form-btn" type="submit" data-form-btn onClick={() => window.open(project.url, "_blank")}>
                        <ion-icon name="logo-github"></ion-icon>
                        <span>Github</span>
                    </button>}
            </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1} component="div">
                    <div className='mainContainer'>
                        <div className='imageContainer'>
                            {project?.screenshots.length > 0 &&
                                project?.screenshots.map((image, index) => (
                                    <img src={image} alt='Image' loading="lazy" key={index} />
                                ))
                            }
                            {project?.screenshots.length == 0 &&
                                <span className='imageNotFound'>Images Not Available</span>
                            }
                        </div>
                        <div className='contentContainer'>
                            <li className="testimonials-item">
                                <div className="content-card" data-testimonials-item>
                                    <h4 className="h4 projectHeader" data-testimonials-title>Description</h4>
                                    <div className='projectDescription' data-testimonials-text>
                                        <p>{project?.desc}</p>
                                    </div>
                                </div>
                            </li>
                            <li className="testimonials-item">
                                <div className="content-card list" data-testimonials-item>
                                    <h4 className="h4 projectHeader" data-testimonials-title>Tech Stack</h4>
                                    <div className='projectDescription skillImages' data-testimonials-text>
                                        {project?.techStack.map((techImg, index) => (
                                            <img src={techImg.url} alt={techImg.name} key={index} title={techImg.name}></img>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            {project?.responsibilities?.length > 0 && (
                                <li className="testimonials-item">
                                    <div className="content-card list" data-testimonials-item>
                                        <h4 className="h4 projectHeader" data-testimonials-title>Responsibilities</h4>
                                        <div className="projectDescription skillImages" data-testimonials-text>
                                            <ul>
                                                {project.responsibilities.map((res, index) => (
                                                    <li key={index}>{res}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            )}
                            <li className="testimonials-item">
                                <div className="content-card list" data-testimonials-item>
                                    <h4 className="h4 projectHeader" data-testimonials-title>Key Features</h4>
                                    <div className='projectDescription listStyle' data-testimonials-text>
                                        {project?.keyFeatures.map((feature, index) => (
                                            <ul key={index}>
                                                <li>{feature}</li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            {project?.architectureHighlights?.length > 0 && (
                                <li className="testimonials-item">
                                    <div className="content-card list" data-testimonials-item>
                                        <h4 className="h4 projectHeader" data-testimonials-title>Highlights</h4>
                                        <div className="projectDescription skillImages" data-testimonials-text>
                                            <ul>
                                                {project.architectureHighlights.map((highlight, index) => (
                                                    <li key={index}>{highlight}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            )}
                            {project?.businessOutcomes?.length > 0 && (
                                <li className="testimonials-item">
                                    <div className="content-card list" data-testimonials-item>
                                        <h4 className="h4 projectHeader" data-testimonials-title>Business Outcomes</h4>
                                        <div className="projectDescription skillImages" data-testimonials-text>
                                            <ul>
                                                {project.businessOutcomes.map((outcome, index) => (
                                                    <li key={index}>{outcome}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ExpandProject;
