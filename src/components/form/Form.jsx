import './Form.scss'
import {useState} from "react";

export const Form = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь можно выполнить дополнительную обработку данных формы, например, отправку на сервер

        // Обнуляем значения формы после отправки
        setFormData({
            email: '',
            message: ''
        });
    };
    return (
        <div className='wrapper-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}