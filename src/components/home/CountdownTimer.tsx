import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

// JEE Main 2025 Session 1 expected date
const JEE_MAIN_DATE = new Date("2025-01-22T09:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = JEE_MAIN_DATE.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="p-6 rounded-2xl gradient-primary text-primary-foreground shadow-glow">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-5 w-5" />
        <span className="font-semibold">JEE Main 2025 - Session 1</span>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="bg-primary-foreground/20 backdrop-blur rounded-xl p-3">
              <span className="font-display text-2xl md:text-3xl font-bold animate-countdown">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs md:text-sm mt-2 block opacity-90">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
