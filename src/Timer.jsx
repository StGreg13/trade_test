import { useState, useEffect } from 'react';

const Timer = (timer) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = timer.timer

    const getTime = () => {
        console.log(timer.timer)

        setMinutes(Math.floor((deadline / 60) % 60));
        setSeconds(Math.floor((deadline) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <p>{minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
    );
};

export default Timer;