
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import { Button } from '../ui/Button';
import Logo from '../Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const activeLinkStyle = {
    color: 'hsl(26, 29%, 50%)',
    fontWeight: '600',
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Logo />

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:block">
             <Link to="/contacto">
                <Button>Pedir Cita</Button>
             </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col items-center space-y-4 p-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-foreground/80 hover:text-primary transition-colors w-full text-center py-2"
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contacto" className="w-full mt-2">
                <Button className="w-full" onClick={closeMenu}>Pedir Cita</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
