
import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '../ui/Button';
import { FormData } from '../../pages/ContactPage';
import { getAvailableTimes } from '../../lib/data';
import { IconChevronLeft, IconChevronRight, IconLoader2 } from '@tabler/icons-react';
import { cn } from '../../lib/utils';

interface Step4DateTimeSelectionProps {
  onNext: () => void;
  onBack: () => void;
  updateFormData: (data: Partial<FormData>) => void;
  formData: FormData;
}

const Calendar: React.FC<{ selectedDate: Date | null, onDateSelect: (date: Date) => void }> = ({ selectedDate, onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = useMemo(() => new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(), [currentDate]);
    const firstDayOfMonth = useMemo(() => new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(), [currentDate]);

    const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    
    const today = new Date();
    today.setHours(0,0,0,0);

    const renderDays = () => {
        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
            const isPast = date < today;
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            const isAvailable = !isPast && !isWeekend;

            days.push(
                <button
                    key={day}
                    disabled={!isAvailable}
                    onClick={() => onDateSelect(date)}
                    className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors duration-200 relative",
                        isAvailable ? "hover:bg-accent" : "text-muted-foreground/50 cursor-not-allowed",
                        isSelected && "bg-primary text-primary-foreground",
                        !isSelected && isAvailable && "bg-card"
                    )}
                >
                    {day}
                    {isAvailable && <span className="absolute bottom-1.5 h-1 w-1 bg-green-400 rounded-full"></span>}
                </button>
            );
        }
        return days;
    };
    
    const weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'];

    return (
        <div className="p-4 rounded-lg bg-accent/50 border">
            <div className="flex justify-between items-center mb-4">
                <Button variant="ghost" size="icon" onClick={handlePrevMonth}><IconChevronLeft /></Button>
                <h3 className="font-bold text-lg">{currentDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}</h3>
                <Button variant="ghost" size="icon" onClick={handleNextMonth}><IconChevronRight /></Button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm text-muted-foreground mb-2">
                {weekDays.map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1 place-items-center">
                {renderDays()}
            </div>
        </div>
    );
};

const TimeSlots: React.FC<{ selectedDate: Date | null, selectedTime: string, onTimeSelect: (time: string) => void }> = ({ selectedDate, selectedTime, onTimeSelect }) => {
    const [loading, setLoading] = useState(false);
    const [slots, setSlots] = useState<{ morning: string[], afternoon: string[] }>({ morning: [], afternoon: [] });
    
    useEffect(() => {
        if (selectedDate) {
            setLoading(true);
            getAvailableTimes(selectedDate).then(data => {
                setSlots(data);
                setLoading(false);
            });
        }
    }, [selectedDate]);

    if (!selectedDate) {
        return <div className="p-4 flex items-center justify-center text-muted-foreground h-full">Selecciona una fecha para ver las horas disponibles.</div>
    }

    if (loading) {
        return <div className="p-4 flex items-center justify-center h-full"><IconLoader2 className="animate-spin" /></div>
    }

    const hasSlots = slots.morning.length > 0 || slots.afternoon.length > 0;

    return (
        <div className="space-y-6">
            {!hasSlots ? (
                <p className="text-center text-muted-foreground">No hay horas disponibles para este día. Por favor, elige otra fecha.</p>
            ) : (
                <>
                    {slots.morning.length > 0 && (
                        <div>
                            <h4 className="font-semibold mb-2">Mañana</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {slots.morning.map(time => (
                                    <Button key={time} variant={selectedTime === time ? 'default' : 'outline'} onClick={() => onTimeSelect(time)}>{time}</Button>
                                ))}
                            </div>
                        </div>
                    )}
                    {slots.afternoon.length > 0 && (
                        <div>
                            <h4 className="font-semibold mb-2">Tarde</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {slots.afternoon.map(time => (
                                    <Button key={time} variant={selectedTime === time ? 'default' : 'outline'} onClick={() => onTimeSelect(time)}>{time}</Button>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};


const Step4DateTimeSelection: React.FC<Step4DateTimeSelectionProps> = ({ onNext, onBack, updateFormData, formData }) => {
  const handleDateSelect = (date: Date) => {
    updateFormData({ date, time: '' }); // Reset time when date changes
  };

  const handleTimeSelect = (time: string) => {
    updateFormData({ time });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center text-foreground">Elige Fecha y Hora</h2>
      <p className="text-muted-foreground mb-8 text-center">Selecciona un día disponible en el calendario y luego elige una hora.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Calendar selectedDate={formData.date} onDateSelect={handleDateSelect} />
        <TimeSlots selectedDate={formData.date} selectedTime={formData.time} onTimeSelect={handleTimeSelect} />
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>Atrás</Button>
        <Button onClick={onNext} disabled={!formData.date || !formData.time}>Siguiente</Button>
      </div>
    </div>
  );
};

export default Step4DateTimeSelection;
