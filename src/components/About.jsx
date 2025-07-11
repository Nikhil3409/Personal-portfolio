import certificates from "../../public/certificates.json";
import pdf from "../../public/Nikhil_Bhosale.pdf";

function About() {

    const openCredentials = (credential) => {
        window.open(credential, "_blank")
    }

    return (
        <>
            <article className="about  active" data-page="about">
                <header>
                    <h2 className="h2 article-title">About Me</h2>
                </header>
                <section className="about-text">
                    <p>
                        I’m a Software Engineer with 3+ years of experience designing and delivering scalable, responsive web applications. I specialize in Angular and React on the front end, and Node.js with Express on the backend. My work has enabled 30% faster report generation, improved UI-driven configurations by 40%, and contributed to real-time monitoring systems that reduced downtime by 25%. I build clean, modular codebases and dynamic dashboards that turn data into actionable insights, ensuring both performance and maintainability while aligning closely with business goals.
                    </p>
                </section>
                <button className="form-btn resumeButton" type="submit" data-form-btn onClick={() => window.open(pdf, "_blank")}>
                    <ion-icon name="cloud-download-outline"></ion-icon>
                    <span>Resume</span>
                </button>
                <section className="service">
                    <h3 className="h3 service-title">Educational Qualification</h3>
                    <ul className="service-list">
                        <li className="service-item">
                            <div className="service-icon-box">
                                <img src="/images/icon-design.svg" alt="design icon" width="40" />
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Bachelor’s degree in computer science</h4>
                                <p className="service-item-text">
                                    Haribhai V. Desai College
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="testimonials">
                    <h3 className="h3 testimonials-title">Certifications</h3>
                    <ul className="testimonials-list has-scrollbar">
                        {certificates.map((certificate, index) => (
                            <li className="testimonials-item" key={index} onClick={() => openCredentials(certificate.url)}>
                                <div className="content-card" data-testimonials-item>
                                    <figure className="testimonials-avatar-box">
                                        <img src="/images/icon-dev.svg" alt={certificate.title} width="60" data-testimonials-avatar />
                                    </figure>
                                    {/* <h4 className="h4 testimonials-item-title" data-testimonials-title>{certificate.title}</h4> */}
                                    <div className="testimonials-text" data-testimonials-text>
                                        {/* <p>
                                            Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                            lot of experience
                                            and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                            consectetur adipiscing
                                            elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                        </p> */}
                                        <p>{certificate.title}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
        </>
    )
}

export default About;