import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';

Clock.propTypes = {};

function foramtDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
    // const [timeString, setTimeString] = useState('');

    // useEffect(() => {
    //     const clockInterval = setInterval(() =>{
    //         const now =  new Date();
    //         // chuyển đổi giờ
    //         const newTimeString = foramtDate(now);
    //         setTimeString(newTimeString);
    //     },1000)

    //     return () => {
    //         console.log('clean up');
    //         clearInterval(clockInterval);
    //     }
    // },[]);
    const {timeString} = useClock();

    return (
       <p>{timeString}</p>
    );
}

export default Clock;