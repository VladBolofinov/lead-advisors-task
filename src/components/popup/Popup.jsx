import React, { useState } from 'react';
import './Popup.scss';
import crossImg from '../../img/icons/cross.svg';
export const Popup = ({ requestStatus, onChangeRequestStatus}) => {
//вынеси разметку в функцию с аргументами а то не получется , сделай чтобы если плохой ответ то  вернется надпись не получилось
    return (
        <div className='wrapper-popup'>
            {(requestStatus) ? (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className='btn-cross' onClick={onChangeRequestStatus}>
                            <img src={crossImg} alt="cross-image"/>
                        </button>
                        <h2>Success!</h2>
                        <p>You have successfully subscribed to the email newsletter</p>
                        <button className='btn-close'
                                onClick={onChangeRequestStatus}>Close</button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
