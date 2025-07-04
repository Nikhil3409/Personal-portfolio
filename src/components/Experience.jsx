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
                            <h4 className="h4 timeline-item-title">Bar Code India</h4>
                            <span>Nov 2022 — Present</span>
                            <ul className="experienceSection">
                                <li className="timeline-text">
                                    Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.
                                </li>
                                <li className="timeline-text">
                                    Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.
                                </li>
                                <li className="timeline-text">
                                    Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.
                                </li>
                                <li className="timeline-text">
                                    Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.
                                </li>
                                <li className="timeline-text">
                                    Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.
                                </li>
                            </ul>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Narachi Consultant</h4>
                            <span>Mar 2022 — Aug 2022</span>
                            <p className="timeline-text">
                                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                            </p>
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