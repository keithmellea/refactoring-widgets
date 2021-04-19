import { useState, useEffect } from 'react';

const ClockFunc = () => {
    const [time, setTime] = useState(new Date());
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        return () => {
            clearInterval(interval);
            //localStorage.setItem('unmounted',true);
        }
    }, []);

    return (
        <section>
            <h1>Clock</h1>
            <div className='clock'>
                <p>
                    <span>
                        Time:
              </span>
                    <span>
                        {hours}:{minutes}:{seconds} PDT
              </span>
                </p>
                <p>Date: {time.toDateString()}</p>
            </div>
        </section>
    );
}

export default ClockFunc;
