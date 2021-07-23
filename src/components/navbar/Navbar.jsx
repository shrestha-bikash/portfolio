import './navbar.css'
import * as Unicons from '@iconscout/react-unicons';

export default function Navbar() {
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

        if(toggle && nav){
            nav.classList.toggle('show')
        }
    }

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
                        <li className="nav_item"><a href="#qualification" className="nav_link">Qualification</a></li>
                        <li className="nav_item"><a href="#awards" className="nav_link">Publications</a></li>
                        {/* <li className="nav_item"><a href="#contact" className="nav_link">Contact</a></li> */}
                    </ul>
                </div>

                <div className="nav_toggle" id="nav-toggle" onClick={() => showMenu('nav-toggle','nav-menu')}>
                    <i><Unicons.UilBars/></i>
                </div>

            </nav>
        </header>
    )
}