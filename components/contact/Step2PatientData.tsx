import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { FormData } from '../../pages/ContactPage';

interface Step2PatientDataProps {
  onNext: () => void;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
  formData: FormData;
}

const Step2PatientData: React.FC<Step2PatientDataProps> = ({ onNext, onBack, updateFormData, formData }) => {
  const [subStep, setSubStep] = useState(1); // 1 for patient, 2 for contact
  const [direction, setDirection] = useState(1);

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? '50%' : '-50%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? '50%' : '-50%', opacity: 0 }),
  };

  const handleSubStepNext = () => {
    setDirection(1);
    setSubStep(2);
  };
  const handleSubStepBack = () => {
    setDirection(-1);
    setSubStep(1);
  };

  const isSelfFormValid = formData.name && formData.email && formData.phone;
  const isOtherPatientFormValid = formData.patientName && formData.patientDob && formData.relationship;
  const isOtherContactFormValid = formData.name && formData.email && formData.phone;
  const isNextDisabled = formData.appointmentFor === 'self'
    ? !isSelfFormValid
    : !(isOtherPatientFormValid && isOtherContactFormValid);

  if (formData.appointmentFor === 'self') {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-2 text-center text-foreground">Tus datos de contacto</h2>
        <p className="text-muted-foreground mb-8 text-center">Necesitamos algunos datos para agendar tu cita.</p>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nombre Completo</Label>
            <Input id="name" value={formData.name} onChange={e => updateFormData({ name: e.target.value })} placeholder="Ej: Ana García" required />
          </div>
          <div>
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" value={formData.email} onChange={e => updateFormData({ email: e.target.value })} placeholder="tu@email.com" required />
          </div>
          <div>
            <Label htmlFor="phone">Teléfono Móvil</Label>
            <Input id="phone" type="tel" value={formData.phone} onChange={e => updateFormData({ phone: e.target.value })} placeholder="600 123 456" required />
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={onBack}>Atrás</Button>
          <Button onClick={onNext} disabled={!isSelfFormValid}>Siguiente</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={subStep}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                {subStep === 1 ? (
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-center text-foreground">Datos del Paciente (1/2)</h2>
                        <p className="text-muted-foreground mb-8 text-center">Introduce la información de la persona que recibirá la atención.</p>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="patientName">Nombre Completo del Paciente</Label>
                                <Input id="patientName" value={formData.patientName} onChange={e => updateFormData({ patientName: e.target.value })} placeholder="Ej: Juan Pérez" required />
                            </div>
                            <div>
                                <Label htmlFor="patientDob">Fecha de Nacimiento</Label>
                                <Input id="patientDob" type="date" value={formData.patientDob} onChange={e => updateFormData({ patientDob: e.target.value })} required />
                            </div>
                            <div>
                                <Label htmlFor="relationship">Relación o Parentesco</Label>
                                <select
                                    id="relationship"
                                    value={formData.relationship}
                                    onChange={e => updateFormData({ relationship: e.target.value })}
                                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="Hijo/a">Hijo/a</option>
                                    <option value="Padre/Madre">Padre/Madre</option>
                                    <option value="Cónyuge/Pareja">Cónyuge/Pareja</option>
                                    <option value="Otro Familiar">Otro Familiar</option>
                                    <option value="Tutor Legal">Tutor Legal</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between mt-8">
                            <Button variant="outline" onClick={onBack}>Atrás</Button>
                            <Button onClick={handleSubStepNext} disabled={!isOtherPatientFormValid}>Siguiente</Button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-center text-foreground">Tus Datos de Contacto (2/2)</h2>
                        <p className="text-muted-foreground mb-8 text-center">Ahora, introduce tus datos como persona responsable de la cita.</p>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="contactName">Tu Nombre Completo</Label>
                                <Input id="contactName" value={formData.name} onChange={e => updateFormData({ name: e.target.value })} placeholder="Ej: Ana García" required />
                            </div>
                            <div>
                                <Label htmlFor="contactEmail">Tu Correo Electrónico</Label>
                                <Input id="contactEmail" type="email" value={formData.email} onChange={e => updateFormData({ email: e.target.value })} placeholder="tu@email.com" required />
                            </div>
                            <div>
                                <Label htmlFor="contactPhone">Tu Teléfono Móvil</Label>
                                <Input id="contactPhone" type="tel" value={formData.phone} onChange={e => updateFormData({ phone: e.target.value })} placeholder="600 123 456" required />
                            </div>
                        </div>
                        <div className="flex justify-between mt-8">
                            <Button variant="outline" onClick={handleSubStepBack}>Atrás</Button>
                            <Button onClick={onNext} disabled={isNextDisabled}>Siguiente</Button>
                        </div>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    </div>
  );
};
export default Step2PatientData;
