
import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Card } from './ui/Card';
import { IconCalendarEvent, IconCheck, IconUser, IconClock } from '@tabler/icons-react';
import { cn } from '../lib/utils';

const QuickAppointmentForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: ''
    });

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setStep(3);
    };

    const handleAddToCalendar = () => {
        alert("Funcionalidad de calendario simulada: El evento se añadiría a tu Google Calendar/Outlook.");
    };

    return (
        <Card className="p-6 shadow-xl border-t-4 border-t-primary">
            <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">Cita Rápida</h3>
                <p className="text-sm text-muted-foreground">Agenda tu consulta en menos de 1 minuto.</p>
                
                {/* Progress Indicators */}
                <div className="flex gap-2 mt-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={cn(
                            "h-1.5 flex-1 rounded-full transition-colors duration-300",
                            step >= i ? "bg-primary" : "bg-muted"
                        )} />
                    ))}
                </div>
            </div>

            {step === 1 && (
                <div className="space-y-4 animate-fade-in-up">
                    <div>
                        <Label htmlFor="quick-name">Nombre Completo</Label>
                        <div className="relative">
                            <IconUser className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input 
                                id="quick-name" 
                                className="pl-9" 
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="quick-phone">Teléfono</Label>
                        <div className="relative">
                            <Input 
                                id="quick-phone" 
                                type="tel" 
                                placeholder="600 000 000"
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    </div>
                    <Button 
                        className="w-full mt-2" 
                        onClick={handleNext}
                        disabled={!formData.name || !formData.phone}
                    >
                        Siguiente
                    </Button>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-4 animate-fade-in-up">
                    <div>
                        <Label htmlFor="quick-date">Fecha Preferida</Label>
                        <Input 
                            id="quick-date" 
                            type="date"
                            value={formData.date}
                            onChange={e => setFormData({...formData, date: e.target.value})}
                        />
                    </div>
                    <div>
                        <Label htmlFor="quick-time">Hora Aproximada</Label>
                        <div className="relative">
                            <IconClock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <select 
                                id="quick-time"
                                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={formData.time}
                                onChange={e => setFormData({...formData, time: e.target.value})}
                            >
                                <option value="">Selecciona hora</option>
                                <option value="morning">Mañana (09:00 - 13:00)</option>
                                <option value="afternoon">Tarde (15:00 - 20:00)</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Atrás</Button>
                        <Button 
                            className="flex-1" 
                            onClick={handleSubmit}
                            disabled={!formData.date || !formData.time || isSubmitting}
                        >
                            {isSubmitting ? 'Agendando...' : 'Confirmar'}
                        </Button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="text-center animate-fade-in-up py-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconCheck className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">¡Solicitud Recibida!</h4>
                    <p className="text-sm text-muted-foreground mt-2 mb-6">
                        Te contactaremos en breve al <strong>{formData.phone}</strong> para confirmar tu cita.
                    </p>
                    
                    <Button 
                        variant="outline" 
                        className="w-full gap-2 border-primary/20 hover:bg-primary/5"
                        onClick={handleAddToCalendar}
                    >
                        <IconCalendarEvent className="h-4 w-4" />
                        Añadir a Calendario
                    </Button>
                </div>
            )}
        </Card>
    );
};

export default QuickAppointmentForm;
