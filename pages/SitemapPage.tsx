import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const SitemapPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Mapa Web | LUMENA Clínica de Salud';
        let metaRobots = document.querySelector('meta[name="robots"]');
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.setAttribute('name', 'robots');
            document.head.appendChild(metaRobots);
        }
        metaRobots.setAttribute('content', 'index, follow');
    }, []);

    const legalLinks = [
        { href: '/aviso-legal', label: 'Aviso Legal' },
        { href: '/politica-de-privacidad', label: 'Política de Privacidad' },
        { href: '/politica-de-cookies', label: 'Política de Cookies' },
        { href: '/mapa-web', label: 'Mapa Web' },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Mapa Web</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Encuentra rápidamente la sección que buscas en nuestra web.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-4 text-foreground">Principal</h2>
                    <ul className="space-y-2">
                        {NAV_LINKS.map(link => (
                            <li key={link.href}><Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">&rarr; {link.label}</Link></li>
                        ))}
                         <li><Link to="/especialistas" className="text-muted-foreground hover:text-primary transition-colors">&rarr; Especialistas</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4 text-foreground">Información Legal</h2>
                    <ul className="space-y-2">
                        {legalLinks.map(link => (
                            <li key={link.href}><Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">&rarr; {link.label}</Link></li>
                        ))}
                    </ul>
                </div>
                
                 <div>
                    <h2 className="text-xl font-bold mb-4 text-foreground">Acciones</h2>
                    <ul className="space-y-2">
                        <li><Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">&rarr; Pedir Cita</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SitemapPage;