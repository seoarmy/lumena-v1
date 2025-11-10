
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Step1UserType from '../components/contact/Step1UserType';
import Step2PatientData from '../components/contact/Step2PatientData';
import Step3ServiceSelection from '../components/contact/Step3ServiceSelection';
import Step4DateTimeSelection from '../components/contact/Step4DateTimeSelection';
import Step5Confirmation from '../components/contact/Step5Confirmation';
import Step6ThankYou from '../components/contact/Step6ThankYou';
import ProgressBar from '../components/contact/ProgressBar';

export type UserType = 'new' | 'existing' | null;

export interface FormData {
  userType: UserType;
  name: string;
  email: string;
  phone: string;
  referral?: string;
  verifiedPatient?: { name: string };
  specialty: string;
  service: string;
  date: Date | null;
  time: string;
}

const initialFormData: FormData = {
  userType: null,
  name: '',
  email: '',
  phone: '',
  referral: '',
  verifiedPatient: undefined,
  specialty: '',
  service: '',
  date: null,
  time: '',
};

const steps = [
  "Tipo de Cita",
  "Tus Datos",
  "Servicio",
  "Fecha y Hora",
  "Confirmación",
];

const ContactPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isFinished, setIsFinished] = useState(false);
  
  const [direction, setDirection] = useState(1);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentStep(prev => Math.min(prev + 1, steps.length + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  
  const handleFinish = () => {
      // Here you would typically send the data to a server
      console.log('Final form data:', formData);
      setIsFinished(true);
  };
  
  const handleReset = () => {
      setFormData(initialFormData);
      setCurrentStep(1);
      setIsFinished(false);
  }

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const renderStep = () => {
    if (isFinished) {
      return <Step6ThankYou onReset={handleReset} />;
    }
      
    switch (currentStep) {
      case 1:
        return <Step1UserType onNext={handleNext} updateFormData={updateFormData} />;
      case 2:
        return <Step2PatientData onNext={handleNext} onBack={handlePrev} updateFormData={updateFormData} formData={formData} />;
      case 3:
        return <Step3ServiceSelection onNext={handleNext} onBack={handlePrev} updateFormData={updateFormData} formData={formData} />;
      case 4:
        return <Step4DateTimeSelection onNext={handleNext} onBack={handlePrev} updateFormData={updateFormData} formData={formData} />;
      case 5:
        return <Step5Confirmation onFinish={handleFinish} onBack={handlePrev} formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Agenda tu Cita</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Sigue estos sencillos pasos para reservar tu cita con nosotros. ¡Es rápido y fácil!
        </p>
      </div>

      <div className="bg-card rounded-2xl shadow-2xl p-4 sm:p-8 overflow-hidden">
        {!isFinished && (
            <div className="mb-8 px-4">
                <ProgressBar currentStep={currentStep} totalSteps={steps.length} labels={steps} />
            </div>
        )}
        
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {renderStep()}
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactPage;
