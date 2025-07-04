function Navbar({ activePage, setActivePage }) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {/* ["About", "Experience", "Skills", "Projects", "Contact"] */}
                {["About", "Experience", "Skills", "Projects", "Contact"].map((page) => {
                    const key = page.toLowerCase();
                    return (
                        <li className="navbar-item" key={key}>
                            <button className={`navbar-link ${activePage === key ? 'active' : ''}`} onClick={() => setActivePage(key)}>
                                {page}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
