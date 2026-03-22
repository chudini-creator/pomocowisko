import './Header.css';
import { NavLink } from 'react-router-dom';
function Header() {
    return (
        <header className='Header'>
            <div className='HeaderContainer'>
                <div className='logo'>
                    <NavLink to="/">
                        <img src="img/Logo.png" alt="Pomocowisko Logo" />
                    </NavLink>
                </div>

                <nav className='navs'>
                    <ul>
                        <li><NavLink to="/o-fundacji">O fundacji</NavLink></li>
                        <li><NavLink to="/projekty">Projekty</NavLink></li>
                        <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                    </ul>
                </nav>
                
            </div>
        </header>
    );
}
export default Header;