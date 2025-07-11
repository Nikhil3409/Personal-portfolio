function Experience() {
    return (
        <>
            <article className="experience active" data-page="experience">
                <header>
                    <h2 className="h2 article-title">Experience</h2>
                </header>
                <section className="timeline">
                    {/* <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>
                        <h3 className="h3">Experience</h3>
                    </div> */}
                    <ol className="timeline-list">
                        <li className="timeline-item">
                            <div className="parentContainer">
                                <div className="childContainer">
                                    <h4 className="h4 timeline-item-title">Bar Code India</h4>
                                    <span>Software Engineer</span>
                                </div>
                                <div className="childContainer">
                                    <h4 className="h4 timeline-item-title">Pune, Maharashtra</h4>
                                    <span>Nov 2022 — Present</span>
                                </div>
                            </div>
                            <ul className="experienceSection">
                                <li className="timeline-text">
                                    Led the frontend development of an RFID Scanner Interface Portal using Angular, TypeScript, and Angular Material, integrating real-time socket communication with backend services.
                                </li>
                                <li className="timeline-text">
                                    Implemented end-to-end traceability and analytics modules for manufacturing intelligence platforms, contributing to 20% fewer quality deviations and real-time visibility across production lines.
                                </li>
                                <li className="timeline-text">
                                    Worked in Scrum-based teams to deliver sprint goals aligned with IoT hardware integration, enabling live monitoring of over 500+ devices.
                                </li>
                                <li className="timeline-text">
                                    Implemented device configuration panels, health dashboards, and dynamic controls, enhancing operational visibility and reducing support tickets by 35%.
                                </li>
                                <li className="timeline-text">
                                    Streamlined communication between UI and backend (Node.js/Express.js) with WebSocket integration, improving data sync latency by 45%.
                                </li>
                                <li className="timeline-text">
                                    Designed and implemented RESTful APIs using Node.js and Express.js to support dynamic features like book purchasing, user authentication, and RFID data handling, improving system performance and data exchange efficiency by 35%.
                                </li>
                                <li className="timeline-text">
                                    Contributed to cross-functional Agile ceremonies, including sprint retrospectives and backlog grooming, to drive continuous improvement.
                                </li>
                            </ul>
                        </li>
                        <li className="timeline-item">
                            <div className="parentContainer">
                                <div className="childContainer">
                                    <h4 className="h4 timeline-item-title">Narachi Consultant</h4>
                                    <span>Web Developer</span>
                                </div>
                                <div className="childContainer">
                                    <h4 className="h4 timeline-item-title">Pune, Maharashtra</h4>
                                    <span>March 2022 — Aug 2022</span>
                                </div>
                            </div>
                            <ul className="experienceSection">
                                <li className="timeline-text">
                                    Delivered responsive web applications using Angular, TypeScript, HTML, and Bootstrap in a fast-paced Agile environment, increasing feature delivery velocity by 30%.
                                </li>
                                <li className="timeline-text">
                                    Developed reusable UI components and dynamic forms that reduced repetitive coding efforts and sped up delivery timelines by 40%.
                                </li>
                                <li className="timeline-text">
                                    Engineered dynamic dashboards and data visualization modules using Chart.js, reducing manual reporting efforts by 50%.
                                </li>
                            </ul>
                        </li>
                        {/* <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Web designer</h4>
                            <span>2010 — 2013</span>
                            <p className="timeline-text">
                                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                            </p>
                        </li> */}
                    </ol>
                </section>
            </article>
        </>
    )
}

export default Experience;