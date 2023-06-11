import React, { useState } from 'react';
import './App.scss';
import logo from '../../img/icons/logo.svg';
import arrow from '../../img/icons/arrow-right.svg';
import { Timer } from '../timer/Timer';
import { Popup } from '../popup/Popup';
import { Form } from '../form/Form';
import leftDream from '../../img/items/left-dream.svg';
import rightDream from '../../img/items/right-dream.svg';
import {Accordion} from "../accordion/Accordion";
//сделай отдельный компонент mainPage
//доработай анимацию
export const App = () => {
    const [emailValue, setEmailValue] = useState('');
    const [requestStatus, setRequestStatus] = useState(false);
    const [validEmailValue, setValidEmailValue] = useState(false);

    const onChangeRequestStatus = () => {
        setRequestStatus(false);
    }
    const handleEmailChange = (event) => {
        const email = event.target.value;
        setEmailValue(email);
        validateEmail(email);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setValidEmailValue(emailRegex.test(email));
    };

    const sendData = (data) => {
        if (!validEmailValue) {
            console.log('Enter a valid email!');
        } else {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    email: data,
                    userId: Math.floor(Math.random() * 1000),
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => {
                    response.status === 201 ? setRequestStatus(true) : setRequestStatus(false);
                });

            setEmailValue('');
            setValidEmailValue(false);
            console.log('Send data');
        }
    };

    return (
        <div className="app">
            <img className='dream left' src={leftDream} alt="left-dream"/>
            <img className='dream right' src={rightDream} alt="right-dream"/>
            <a href="https://lead-advisorsvb.onrender.com/">
                <div className="logo">
                    <img className="logo-item" src={logo} alt="lead-advisors-logo" />
                </div>
            </a>
            <h1 className='great-header'>Under construction</h1>
            <p className="h1-descr">We're making lots of improvements and will be back soon</p>
            <Timer />
            <p className="event-descr">Check our event page when you wait:</p>
            <a href="https://leadadvisors.org/" target="_blank" rel="noreferrer">
                <button className="event-link">
                    <img src={arrow} alt="arrow-right" />
                    Go to the event
                </button>
            </a>
            <Form
                emailValue={emailValue}
                handleEmailChange={handleEmailChange}
                validEmailValue={validEmailValue}
                sendData={sendData}
            />
            <Popup requestStatus={requestStatus}
                   onChangeRequestStatus={onChangeRequestStatus}/>
            <h2 className='great-header second'>All events</h2>
            <Accordion/>
        </div>
    );
};
