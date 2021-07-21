import './navbar.css'

export default function Navbar() {
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav_logo">Bikash</a>
                </div>

                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item"><a href="#home" className="nav_link active">Home</a></li>
                        <li className="nav_item"><a href="#about" className="nav_link">About</a></li>
                        <li className="nav_item"><a href="#skills" className="nav_link">Skills</a></li>
                        <li className="nav_item"><a href="#work" className="nav_link">Work</a></li>
                        <li className="nav_item"><a href="#contact" className="nav_link">Contact</a></li>
                    </ul>
                </div>

                <div className="nav_toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>

            </nav>
        </header>
    )
}