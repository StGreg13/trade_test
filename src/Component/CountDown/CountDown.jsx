import {useCallback, useEffect, useState} from "react";


const CountDown = (props) => {

    const {seconds = 0, handleTimeEnd} = props
    const [over, setOver] = useState(false);
    const [time, setTime] = useState(seconds);

    const tick = useCallback(() => {
        setTime(x => Math.max(x - 1,0))
    }, [over])


    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    useEffect(() => {
        if (over) {
            handleTimeEnd()
        }
    }, [over])

    useEffect(() => {
        if (time === 0) {
            setOver(true)
        }
    }, [time])

    function formatTime(time) {
        const seconds = Math.floor(time) % 60;
        const minutes = Math.floor(time / 60) % 60;
        const hours = Math.floor(time / 60 / 60);

        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    return (
        <div>
            <p>{formatTime(time)}</p>
        </div>
    );
};
export default CountDown;
