import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchX } from 'lucide-react';
import './NotFound.css';

function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`notfound-container ${mounted ? 'mounted' : ''}`}>
      <div className="notfound-content">
        <div className="notfound-icon-wrapper">
          <SearchX className="notfound-icon" size={80} strokeWidth={1.5} />
        </div>

        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Strona nie znaleziona</h2>
        <p className="notfound-text">
          Ups! Wygląda na to, że ta strona wyruszyła w nieznane.
          Być może została przeniesiona lub nigdy nie istniała.
        </p>

        <NavLink to="/" className="notfound-button">
          <span>Wróć do strony głównej</span>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
