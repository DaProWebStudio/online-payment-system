import { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../shared/ui/Input/Input";
import cls from './Register.module.scss'

const RegisterForm = ({ onSubmit, formId }) => {
    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        sur_name: '',
        phone: '',
        address: '',
        password: '',
        password_confirm: '',
    })

    const handleInputChange = ({target: {name, value} }) => {
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
            <h2 className="title">Регистрация</h2>
            <p className='description'>Добро пожаловать в "Онлайн платеж" Войдите в свою учетную запись</p>
            <form onSubmit={handleSubmit} className={cls.formRegister} id={formId}>
                <label htmlFor="email">Почта</label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Почта"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <label htmlFor="first_name">Имя</label>
                <Input
                    id='first_name'
                    name="first_name"
                    type="text"
                    placeholder="Имя"
                    value={formData.first_name}
                    onChange={handleInputChange}
                />
                <label htmlFor="sur_name">Фамилия</label>
                <Input
                    id="sur_name"
                    name="sur_name"
                    type="text"
                    placeholder="Фамилия"
                    value={formData.sur_name}
                    onChange={handleInputChange}
                />
                <label htmlFor="password">Пароль</label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <label htmlFor="password_confirm">Подверждение пароля</label>
                <Input
                    id="password_confirm"
                    name="password_confirm"
                    type="password"
                    placeholder="Подверджение пароля"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.bool.isRequired,
    formId: PropTypes.string.isRequired

}

export default RegisterForm;