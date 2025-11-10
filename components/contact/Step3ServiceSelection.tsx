
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { FormData } from '../../pages/ContactPage';
import { serviceSpecialties } from '../../lib/data';
import { cn } from '../../lib/utils';

interface Step3ServiceSelectionProps {
  onNext: () => void;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
  formData: FormData;
}

const Step3ServiceSelection: React.FC<Step3ServiceSelectionProps> = ({ onNext, onBack, updateFormData, formData }) => {
  const [currentSubStep, setCurrentSubStep] = useState(formData.specialty ? 2 : 1);

  const handleSpecialtySelect = (specialty: string) => {
    updateFormData({ specialty, service: '' }); // Reset service when specialty changes
    setCurrentSubStep(2);
  };
  
  const handleServiceSelect = (service: string) => {
      updateFormData({ service });
  }

  const selectedSpecialtyData = serviceSpecialties.find(s => s.name === formData.specialty);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center text-foreground">Selecciona un Servicio</h2>
      <p className="text-muted-foreground mb-8 text-center">
        {currentSubStep === 1 ? 'Elige una especialidad para ver los servicios disponibles.' : 'Ahora, elige el servicio específico que necesitas.'}
      </p>

      {currentSubStep === 1 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {serviceSpecialties.map(specialty => (
            <button
              key={specialty.slug}
              onClick={() => handleSpecialtySelect(specialty.name)}
              className={cn(
                "p-4 rounded-lg border-2 text-center font-semibold transition-all duration-200",
                formData.specialty === specialty.name 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-card hover:border-primary"
              )}
            >
              {specialty.name}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <Button variant="link" onClick={() => setCurrentSubStep(1)} className="p-0 mb-2">
            &larr; Cambiar especialidad
          </Button>
          {selectedSpecialtyData?.services.map(service => (
            <button
              key={service.name}
              onClick={() => handleServiceSelect(service.name)}
              className={cn(
                "w-full p-4 rounded-lg border text-left transition-colors duration-200",
                formData.service === service.name
                  ? "bg-primary/10 border-primary text-primary font-bold"
                  : "bg-card hover:bg-accent"
              )}
            >
              {service.name}
            </button>
          ))}
        </div>
      )}

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>Atrás</Button>
        <Button onClick={onNext} disabled={!formData.service}>Siguiente</Button>
      </div>
    </div>
  );
};

export default Step3ServiceSelection;
