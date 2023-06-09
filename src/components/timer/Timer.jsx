import Countdown from 'react-countdown';
import './Timer.scss';
import daysImg from '../../img/items/days.svg';
import hoursImg from '../../img/items/hours.svg';
import minutesImg from '../../img/items/minutes.svg';
import secondsImg from '../../img/items/seconds.svg';
export const Timer = () => {
//отрефактори покрасивее через map
    const timeDifference = (new Date(2023,6,24).getTime() - new Date().getTime());
    const renderer = ({ hours, minutes, seconds, days }) => {
        return <div className="wrapper">
            <div className="timer-item">
                {days<10 ? `0${days}` : days}
                <img src={daysImg} alt="days-value"/>
            </div>
            <span>:</span>

            <div className="timer-item">
                {hours<10 ? `0${hours}` : hours}
                <img src={hoursImg} alt="hours-value"/>
            </div>
            <span>:</span>
            <div className="timer-item">
                {minutes<10 ? `0${minutes}` : minutes}
                <img src={minutesImg} alt="minutes-value"/>
            </div>
            <span>:</span>
            <div className="timer-item">
                {seconds<10 ? `0${seconds}` : seconds}
                <img src={secondsImg} alt="seconds-value"/>
            </div>
        </div>


    };

    return (
        <div className='timer'>
            <Countdown date={Date.now() + timeDifference}
                       renderer={renderer}/>
        </div>
    );
}