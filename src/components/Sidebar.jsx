function Sidebar() {
    return (
        <>
            <aside className="sidebar" data-sidebar>
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        <img src='/images/my-avatar.png' alt="Richard hanrick" width="80" />
                    </figure>
                    <div className="info-content">
                        <h1 className="name" title="Richard hanrick">Nikhil Bhosale</h1>
                        <p className="title">Software Engineer</p>
                    </div>
                    <button className="info_more-btn" data-sidebar-btn>
                        <span>Show Contacts</span>
                        <ion-icon name="chevron-down"></ion-icon>
                    </button>
                </div>

                <div className="sidebar-info_more">
                    <div className="separator"></div>
                    <ul className="contacts-list">
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <a href="nikhilbhosale369@gmail.com" className="contact-link" title="nikhilbhosale369@gmail.com">nikhilbhosale369@gmail.com</a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Phone</p>
                                <a href="tel:+12133522795" className="contact-link">+91 7262054495</a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="calendar-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>
                                <time dateTime="2000-03-19">19 March 2000</time>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Location</p>
                                <address>Pune, India</address>
                            </div>
                        </li>
                    </ul>

                    <div className="separator"></div>

                    <ul className="social-list">
                        <li className="social-item">
                            <a href="https://www.linkedin.com/in/bhosale-nikhil?trk=contact-info" target="_blank" className="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="https://github.com/Nikhil3409/" target="_blank" className="social-link">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;