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
  const { appointmentFor, name, email, phone, specialty, service, date, time, patientName, patientDob, relationship } = formData;
  const formattedDate = date ? date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No seleccionada';
  const formattedPatientDob = patientDob ? new Date(patientDob).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No especificada';

  const isForOther = appointmentFor === 'other';

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center text-foreground">Confirma tu Cita</h2>
      <p className="text-muted-foreground mb-8 text-center">Por favor, revisa que todos los datos sean correctos antes de confirmar.</p>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Detalles de la Cita</h3>
                <dl>
                    <SummaryItem label="Servicio" value={`${specialty} - ${service}`} />
                    <SummaryItem label="Fecha" value={formattedDate} />
                    <SummaryItem label="Hora" value={time} />
                </dl>
            </div>
            
            <div className="pt-4 border-t border-border/60">
                <h3 className="text-lg font-semibold text-primary mb-2">
                    {isForOther ? "Datos del Paciente" : "Tus Datos"}
                </h3>
                <dl>
                    <SummaryItem label="Nombre" value={isForOther ? patientName : name} />
                    {isForOther && <SummaryItem label="Fecha de Nacimiento" value={formattedPatientDob} />}
                    {isForOther && <SummaryItem label="Parentesco" value={relationship} />}
                    {!isForOther && <SummaryItem label="Email" value={email} />}
                    {!isForOther && <SummaryItem label="Teléfono" value={phone} />}
                </dl>
            </div>

            {isForOther && (
                <div className="pt-4 border-t border-border/60">
                    <h3 className="text-lg font-semibold text-primary mb-2">Datos de Contacto</h3>
                    <dl>
                        <SummaryItem label="Nombre del Contacto" value={name} />
                        <SummaryItem label="Email de Contacto" value={email} />
                        <SummaryItem label="Teléfono de Contacto" value={phone} />
                    </dl>
                </div>
            )}
          </div>
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
