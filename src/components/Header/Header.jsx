import './Header.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header className='Header'>
            <div className='HeaderContainer'>
                <div className='logo'>
                    <NavLink to="/">
                        <img src="img/Logo.png" alt="Pomocowisko Logo" />
                    </NavLink>
                </div>

                <button
                    className={`hamburger-menu ${mobileMenuOpen ? 'hamburger-menu--open' : ''}`}
                    type="button"
                    aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="header-navigation"
                    onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav id="header-navigation" className={`navs ${mobileMenuOpen ? 'navs--open' : ''}`}>
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
                        <li className='mobile-only'>
                            <NavLink to="/o-fundacji" onClick={closeMobileMenu}>O fundacji</NavLink>
                        </li>
                        <li className='mobile-only mobile-sub-item'>
                            <NavLink to="/o-fundacji#pomysl" onClick={closeMobileMenu}>Skąd pomysł?</NavLink>
                        </li>
                        <li className='mobile-only mobile-sub-item'>
                            <NavLink to="/o-fundacji#nazwa" onClick={closeMobileMenu}>Skąd nazwa?</NavLink>
                        </li>
                        <li className='mobile-only mobile-sub-item'>
                            <NavLink to="/zespół" onClick={closeMobileMenu}>Nasz zespół</NavLink>
                        </li>
                        <li className='mobile-only mobile-sub-item'>
                            <NavLink to="/statut" onClick={closeMobileMenu}>Statut</NavLink>
                        </li>
                        <li><NavLink to="/projekty" onClick={closeMobileMenu}>Projekty</NavLink></li>
                        <li><NavLink to="/kontakt" onClick={closeMobileMenu}>Kontakt</NavLink></li>
                    </ul>
                </nav>
                
            </div>
        </header>
    );
}
export default Header;
