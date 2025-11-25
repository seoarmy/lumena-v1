
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import { Button } from '../ui/Button';
import Logo from '../Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  const activeLinkStyle = {
    color: 'hsl(26, 29%, 50%)',
    fontWeight: '600',
  };

  // Lock body scroll when menu is open
  useEffect(() => {
      if (isMenuOpen) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'unset';
      }
      return () => { document.body.style.overflow = 'unset'; }
  }, [isMenuOpen]);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b border-border/60 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="relative z-50">
             <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:block">
             <Link to="/contacto">
                <Button>Pedir Cita</Button>
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none p-2 rounded-full hover:bg-muted/50 transition-colors"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
                {isMenuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-8"
            >
                <nav className="flex flex-col space-y-6 text-center mt-8">
                    {NAV_LINKS.map((link) => (
                    <NavLink
                        key={link.href}
                        to={link.href}
                        onClick={closeMenu}
                        className={({ isActive }) => 
                            `text-2xl font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-foreground/80'}`
                        }
                    >
                        {link.label}
                    </NavLink>
                    ))}
                    
                    <NavLink
                        to="/especialistas"
                        onClick={closeMenu}
                        className={({ isActive }) => 
                            `text-2xl font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-foreground/80'}`
                        }
                    >
                        Especialistas
                    </NavLink>

                    <div className="h-px bg-border/50 w-1/2 mx-auto my-4"></div>

                    <Link to="/contacto" className="w-full" onClick={closeMenu}>
                        <Button size="lg" className="w-full text-lg py-6 shadow-xl shadow-primary/20">
                            Pedir Cita
                        </Button>
                    </Link>
                </nav>

                <div className="mt-auto text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                        LUMENA Clínica de Salud<br />
                        Av. Principal 123, El Ejido
                    </p>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
