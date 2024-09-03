"use client"
import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  hours: number;
  stopMessage: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours, stopMessage }) => {
  const [timeLeft, setTimeLeft] = useState<number>(hours * 3600);
  const [isStopped, setIsStopped] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setIsStopped(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 px-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="text-sm md:text-xl font-bold text-gray-800">
        {isStopped ? stopMessage : formatTime(timeLeft)}
      </div>
      {/* {!isStopped && (
        <div className="text-sm text-gray-500 mt-2">Counting down from {hours} hours</div>
      )} */}
    </div>
  );
};

export default CountdownTimer;
