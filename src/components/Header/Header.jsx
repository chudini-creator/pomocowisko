import './Header.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
                        <li 
                            className='dropdown-wrapper'
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <NavLink to="/o-fundacji">O fundacji</NavLink>
                            <div className={`dropdown-menu ${dropdownOpen ? 'dropdown-menu--open' : ''}`}>
                            <NavLink 
                                to="/o-fundacji#pomysl" 
                                className="dropdown-item"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Skąd pomysł?
                            </NavLink>
                            <NavLink 
                                to="/o-fundacji#nazwa" 
                                className="dropdown-item"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Skąd nazwa?
                            </NavLink>
                            <NavLink to="/zespół" className="dropdown-item">
                                Nasz zespół
                            </NavLink>
                            <NavLink to="/statut" className="dropdown-item">
                                Statut
                            </NavLink>
                            </div>
                        </li>
                        <li><NavLink to="/projekty">Projekty</NavLink></li>
                        <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                    </ul>
                </nav>
                
            </div>
        </header>
    );
}
export default Header;