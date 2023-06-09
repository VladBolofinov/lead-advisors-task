import React from 'react';
import './Form.scss';
import arrow from '../../img/icons/arrow-right.svg';

export const Form = ({emailValue,handleEmailChange,validEmailValue,sendData }) => {
    return (
        <div className="wrapper-form">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (validEmailValue) {
                        sendData(emailValue);
                    }
                }}
            >
                <label>
                    <div className="wrapper-input">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your Email and get notified"
                            value={emailValue}
                            onChange={handleEmailChange}
                        />
                        <button type="submit">
                            <img src={arrow} alt="arrow-right" />
                        </button>
                    </div>
                </label>
            </form>
        </div>
    );
};
