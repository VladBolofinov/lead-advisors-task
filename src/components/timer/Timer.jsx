import Countdown from 'react-countdown';
import './Timer.scss';
import daysImg from '../../img/items/days.svg';
import daysImgResponse from '../../img/items/daysImgResponsive.svg';
import hoursImg from '../../img/items/hours.svg';
import hoursImgResponse from '../../img/items/hoursImgResponsive.svg';
import minutesImg from '../../img/items/minutes.svg';
import minutesImgResponse from '../../img/items/minutesImgResponsive.svg';
import secondsImg from '../../img/items/seconds.svg';
import secondsImgResponsive from '../../img/items/secondsImgResponsive.svg';
export const Timer = () => {
//отрефактори покрасивее через map
    const timeDifference = (new Date(2023,6,24).getTime() - new Date().getTime());
    const renderer = ({ hours, minutes, seconds, days }) => {
        return <div className="wrapper">
            <div className="timer-item">
                {days<10 ? `0${days}` : days}
                <img className='days-value desktop' src={daysImg} alt="days-value"/>
                <img className='days-value mobile' src={daysImgResponse} alt="days-value"/>
            </div>
            <span>:</span>

            <div className="timer-item">
                {hours<10 ? `0${hours}` : hours}
                <img className='hours-value desktop' src={hoursImg} alt="hours-value"/>
                <img className='hours-value mobile' src={hoursImgResponse} alt="hours-value"/>
            </div>
            <span>:</span>
            <div className="timer-item">
                {minutes<10 ? `0${minutes}` : minutes}
                <img className='minute-value desktop' src={minutesImg} alt="minutes-value"/>
                <img className='minute-value mobile' src={minutesImgResponse} alt="minutes-value"/>
            </div>
            <span>:</span>
            <div className="timer-item">
                {seconds<10 ? `0${seconds}` : seconds}
                <img className='seconds-value desktop' src={secondsImg} alt="seconds-value"/>
                <img className='seconds-value mobile' src={secondsImgResponsive} alt="seconds-value"/>
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