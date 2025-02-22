// "use client";
// import { useState, useEffect } from "react";

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// export default function Home() {
//   const targetDate = new Date();
//   targetDate.setDate(targetDate.getDate() + 15); // Set countdown for 15 days

//   const calculateTimeLeft = (): TimeLeft => {
//     const difference = targetDate.getTime() - new Date().getTime();
//     let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-screen w-full text-white text-center p-4 relative">
//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center">
//         {timeLeft.days >= 0 ? (
//           <div className="text-4xl md:text-6xl font-bold tracking-widest drop-shadow-lg text-gray-300">
//             {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
//             {timeLeft.seconds}s
//           </div>
//         ) : (
//           <div className="text-5xl md:text-7xl font-bold tracking-wide text-gray-100 animate-pulse drop-shadow-lg uppercase">
//             Let's Begin!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";

export default function CountdownPage() {
  const targetDate = new Date();
  targetDate.setSeconds(targetDate.getSeconds() + 30); // Set countdown for 30 seconds for testing

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft = { seconds: 0 };

    if (difference > 0) {
      timeLeft = { seconds: Math.floor(difference / 1000) };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full text-white text-center p-4 relative">
      <div className="relative z-10 flex flex-col items-center">
        {timeLeft.seconds > 0 ? (
          <div className="text-6xl md:text-8xl font-extrabold tracking-widest text-gray-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse uppercase">
            {timeLeft.seconds}s
          </div>
        ) : (
          <div className="text-5xl md:text-7xl font-extrabold tracking-wide text-gray-100 animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] uppercase italic">
            Let's Begin!
          </div>
        )}
      </div>
    </div>
  );
}
