import {useState} from "react";
import PropTypes from 'prop-types'
import Input from "../../shared/ui/Input/Input";
import cls from './LoginForm.module.scss'

const LoginForm = ({ onSubmit, formId }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = ({ target: { name, value } }) => {
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        return onSubmit(formData)
    }

    return (
        <div className="form">
            <h2 className="title">Авторизация</h2>
            <p className="description">Добро пожаловать в "Онлайн платеж" Войдите в свою учетную запись</p>
            <form onSubmit={handleSubmit} className={cls.loginForm} id={formId}>
                <label htmlFor='email'>Почта</label>
                <Input
                    required
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder='Введите почту'
                    onChange={handleInputChange}
                />
                <label htmlFor='password'>Пароль</label>
                <Input
                    required
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder='Введите пароль'
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formId: PropTypes.string.isRequired
}

export default LoginForm;