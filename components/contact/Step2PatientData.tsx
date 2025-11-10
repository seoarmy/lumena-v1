
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { FormData } from '../../pages/ContactPage';
import { verifyPatient } from '../../lib/data';
import { IconLoader2, IconCircleCheck, IconAlertCircle } from '@tabler/icons-react';

interface Step2PatientDataProps {
  onNext: () => void;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
  formData: FormData;
}

const Step2PatientData: React.FC<Step2PatientDataProps> = ({ onNext, onBack, updateFormData, formData }) => {
  const [identifier, setIdentifier] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [verifiedPatient, setVerifiedPatient] = useState<{name: string} | null>(null);

  const handleVerification = async () => {
    if (!identifier) return;
    setVerificationStatus('loading');
    const patient = await verifyPatient(identifier);
    if (patient) {
      setVerificationStatus('success');
      setVerifiedPatient(patient);
      updateFormData({ verifiedPatient: patient, name: patient.name, email: identifier.includes('@') ? identifier : '', phone: !identifier.includes('@') ? identifier : '' });
    } else {
      setVerificationStatus('error');
      setVerifiedPatient(null);
    }
  };

  const isNewPatientFormValid = formData.name && formData.email && formData.phone;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center text-foreground">
        {formData.userType === 'new' ? 'Cuéntanos sobre ti' : 'Identifícate'}
      </h2>
      <p className="text-muted-foreground mb-8 text-center">
        {formData.userType === 'new' ? 'Necesitamos algunos datos para crear tu ficha.' : 'Introduce tu email o teléfono para encontrarte.'}
      </p>

      {formData.userType === 'new' ? (
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
          <div>
            <Label htmlFor="referral">¿Cómo nos conociste? (Opcional)</Label>
            <select
                id="referral"
                value={formData.referral}
                onChange={e => updateFormData({ referral: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <option value="">Selecciona una opción</option>
                <option value="recommendation">Recomendación</option>
                <option value="social_media">Redes Sociales</option>
                <option value="google">Búsqueda en Google</option>
                <option value="other">Otro</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
            <div>
                <Label htmlFor="identifier">Email o Teléfono</Label>
                <div className="flex gap-2">
                    <Input id="identifier" value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder="tu@email.com o 600 123 456" />
                    <Button onClick={handleVerification} disabled={verificationStatus === 'loading'}>
                        {verificationStatus === 'loading' ? <IconLoader2 className="animate-spin" /> : 'Verificar'}
                    </Button>
                </div>
            </div>
            {verificationStatus === 'success' && verifiedPatient && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md">
                    <IconCircleCheck />
                    <p>¡Hola, {verifiedPatient.name}! Bienvenida de nuevo.</p>
                </div>
            )}
            {verificationStatus === 'error' && (
                <div className="flex flex-col gap-2 text-red-600 bg-red-50 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                        <IconAlertCircle />
                        <p>No te hemos encontrado. ¿Los datos son correctos?</p>
                    </div>
                    <Button variant="link" className="justify-start p-0 h-auto" onClick={() => updateFormData({ userType: 'new' })}>
                        Registrarme como nuevo paciente
                    </Button>
                </div>
            )}
        </div>
      )}

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>Atrás</Button>
        <Button onClick={onNext} disabled={
            formData.userType === 'new' ? !isNewPatientFormValid : verificationStatus !== 'success'
        }>Siguiente</Button>
      </div>
    </div>
  );
};

export default Step2PatientData;
