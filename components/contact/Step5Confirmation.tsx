
import React from 'react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { FormData } from '../../pages/ContactPage';

interface Step5ConfirmationProps {
  onFinish: () => void;
  onBack: () => void;
  formData: FormData;
}

const SummaryItem: React.FC<{ label: string; value?: React.ReactNode }> = ({ label, value }) => (
  <div className="flex justify-between py-3 border-b border-border/60 last:border-b-0">
    <dt className="text-muted-foreground">{label}</dt>
    <dd className="font-semibold text-foreground text-right">{value || 'No especificado'}</dd>
  </div>
);

const Step5Confirmation: React.FC<Step5ConfirmationProps> = ({ onFinish, onBack, formData }) => {
  const { name, email, phone, specialty, service, date, time } = formData;
  const formattedDate = date ? date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No seleccionada';

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center text-foreground">Confirma tu Cita</h2>
      <p className="text-muted-foreground mb-8 text-center">Por favor, revisa que todos los datos sean correctos antes de confirmar.</p>
      
      <Card>
        <CardHeader>
          <CardTitle>Resumen de la Cita</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="divide-y divide-border/60">
            <SummaryItem label="Servicio" value={`${specialty} - ${service}`} />
            <SummaryItem label="Fecha" value={formattedDate} />
            <SummaryItem label="Hora" value={time} />
            <SummaryItem label="Paciente" value={name} />
            <SummaryItem label="Email" value={email} />
            <SummaryItem label="Teléfono" value={phone} />
          </dl>
        </CardContent>
      </Card>

      <div className="mt-6 bg-accent/50 p-4 rounded-lg text-sm text-accent-foreground text-center">
        <strong>Recordatorio importante:</strong> Por favor, llega 10 minutos antes de tu cita.
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>Atrás</Button>
        <Button onClick={onFinish}>Confirmar Cita</Button>
      </div>
    </div>
  );
};

export default Step5Confirmation;
