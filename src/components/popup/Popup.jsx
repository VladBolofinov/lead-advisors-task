import React, { useState } from 'react';

import crossImg from '../../img/icons/cross.svg';
import './Popup.scss';
export const Popup = ({ requestStatus, onChangeRequestStatus}) => {
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