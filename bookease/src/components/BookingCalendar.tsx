"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, CheckCircle2 } from "lucide-react";

export default function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  // Calendar Math
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Mock Time Slots
  const timeSlots = ["09:00 AM", "09:30 AM", "10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    setSelectedTime(null);
  };

  const handleBook = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true);
      setTimeout(() => {
        setIsBooked(false);
        setSelectedDate(null);
        setSelectedTime(null);
      }, 3000);
    }
  };

  if (isBooked) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center h-full p-8 text-center"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-8 h-8" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
        <p className="text-muted-foreground">
          Your appointment is set for {selectedDate?.toLocaleDateString()} at {selectedTime}.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-background/50 rounded-xl overflow-hidden">
      
      {/* Calendar Side */}
      <div className={`p-6 transition-all duration-500 ease-in-out ${selectedDate ? 'md:w-1/2 border-r' : 'w-full'}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-lg">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex gap-2">
            <button onClick={prevMonth} className="p-2 hover:bg-secondary rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextMonth} className="p-2 hover:bg-secondary rounded-full transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center mb-2">
          {days.map(day => (
            <div key={day} className="text-xs font-semibold text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-2 gap-x-2">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentDate.getMonth();
            const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth();

            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={`
                  aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all
                  ${isSelected ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30' : 'hover:bg-secondary'}
                  ${isToday && !isSelected ? 'text-primary font-bold' : ''}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots Side */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div 
            initial={{ opacity: 0, x: 20, width: 0 }}
            animate={{ opacity: 1, x: 0, width: '100%' }}
            exit={{ opacity: 0, x: 20, width: 0 }}
            className="md:w-1/2 bg-secondary/20 p-6 flex flex-col h-full overflow-hidden"
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Available Slots</p>
              <h3 className="font-bold text-lg">{selectedDate.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
              {timeSlots.map((time, i) => (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`
                    w-full py-3 px-4 rounded-xl flex items-center justify-between transition-all border
                    ${selectedTime === time 
                      ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary shadow-sm' 
                      : 'border-border bg-background hover:border-primary/50 hover:shadow-sm'}
                  `}
                >
                  <span className="font-medium">{time}</span>
                  {selectedTime === time && <CheckCircle2 className="w-5 h-5" />}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: selectedTime ? 1 : 0.5, y: 0 }}
              disabled={!selectedTime}
              onClick={handleBook}
              className="mt-6 w-full bg-foreground text-background py-4 rounded-xl font-bold hover:bg-foreground/90 transition-all disabled:pointer-events-none active:scale-95 shadow-lg flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5" /> Confirm Booking
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
