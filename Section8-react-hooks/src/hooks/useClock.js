import { useEffect, useState } from 'react';

function foramtDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            // chuyển đổi giờ
            const newTimeString = foramtDate(now);
            setTimeString(newTimeString);
        }, 1000)

        return () => {
            console.log('clean up');
            clearInterval(clockInterval);
        }
    }, []);
    return { timeString };
}

export default useClock;