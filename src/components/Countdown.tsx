import React, { useState, useEffect } from 'react';

type TimeLeft = {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}
const Countdown: React.FC = () => {
    const startDate = new Date('2024-11-08T17:00:00-0600');
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const difference = +startDate - +new Date();
            let newTimeLeft: TimeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };

            if (difference > 0) {
                newTimeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }

            setTimeLeft(newTimeLeft);
        }, 400);

        return () => clearInterval(timer);
    }, [startDate]);

    return (
        <section className="text-white p-10 text-center">
            <h2 className="text-4xl font-bold font-mono">Countdown to #HACK</h2>
            <div className="max-md:text-4xl text-6xl font-bold mt-4 flex flex-row flex-wrap justify-center">
                <div className='mx-2'><span className='text-orange-600'>{timeLeft.days}</span> days</div>
                <div className='mx-2'><span className='text-orange-600'> {timeLeft.hours}</span> hours</div>
                <div className='mx-2'><span className='text-orange-600'> {timeLeft.minutes}</span> minutes</div>
                <div className='mx-2'><span className='text-orange-600'> {timeLeft.seconds}</span> seconds</div>
            </div>
        </section>
    );
};

export default Countdown;