import './App.scss';
import logo from '../../img/icons/logo.svg';
import arrow from '../../img/icons/arrow-right.svg';
import {Form} from "../form/Form";
import {Timer} from "../timer/Timer";

export const App = () => {

    return (
        <div className='app'>
            <div className="logo">
                <img className='logo-item' src={logo} alt="lead-advisors-logo"/>
            </div>
            <h1>Under construction</h1>
            <p className="h1-descr">We're making lots of improvements and will be <br/>back soon</p>
            <Timer/>
            {/*тут компонент таймер*/}
            <p className="event-descr">Check our event page when you wait:</p>
            <a href="https://leadadvisors.org/" target="_blank">
                <button className='event-link'>
                    <img src={arrow} alt="arrow-right"/>
                    Go to the event
                </button>
            </a>
            <Form/>
        </div>
    );
}