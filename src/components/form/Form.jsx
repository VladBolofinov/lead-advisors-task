import './Form.scss';
import { useState } from "react";
import arrow from '../../img/icons/arrow-right.svg';
export const Form = () => {
    const [emailValue, setEmailValue] = useState('');
    const [requestStatus, setRequestStatus] = useState(false);
    const [validEmailValue, setValidEmailValue] = useState(false);
//когда будет рендериться поп ап при клике на крестик менются стейты установи

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
            console.log("Enter a valid email!");
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
                    (response.status === 201) ? setRequestStatus(true) : setRequestStatus(false);
                });

            setEmailValue('');
            setValidEmailValue(false);
            console.log('Send data');
        }
    };

    return (
        <div className='wrapper-form'>
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
                            <img src={arrow} alt="arrow-right"/>
                        </button>
                    </div>
                </label>

            </form>
        </div>
    );
};
