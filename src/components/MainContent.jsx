import { useState } from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

function MainContent() {
    const [activePage, setActivePage] = useState('about');

    const renderPage = () => {
        switch (activePage) {
            case 'about': return <About />;
            case 'experience': return <Experience/>;
            case 'skills': return <Skills />;
            case 'projects': return <Projects />;
            case 'contact': return <Contact />;
            default: return <About />;
        }
    };

    return (
        <>
            <div className="main-content">
                <Navbar setActivePage={setActivePage} activePage={activePage}></Navbar>
                {renderPage()}
            </div>
        </>
    )
}

export default MainContent;