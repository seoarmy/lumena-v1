
import React, { useState, useEffect } from 'react';
import { getServices } from '../lib/data';
import { Service } from '../types';
import ServiceSlider from '../components/ServiceSlider';
import AboutSection from '../components/AboutSection';

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Nuestros Servicios</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Comprometidos con tu salud integral, ofrecemos una variedad de servicios especializados.
        </p>
      </div>

      <section>
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Explora Nuestras Especialidades</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Desde odontología hasta fisioterapia, encuentra el cuidado que necesitas.
            </p>
        </div>
        {loading ? (
          <p className="text-center mt-12">Cargando servicios...</p>
        ) : (
          <div className="mt-12">
            <ServiceSlider services={services} />
          </div>
        )}
      </section>

      <AboutSection />

    </div>
  );
};

export default ServicesPage;
