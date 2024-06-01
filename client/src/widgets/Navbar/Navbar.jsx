import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import {Link, useNavigate} from "react-router-dom";
import Modal from "../../shared/ui/Modal/Modal";
import { logIn, logoutUser } from "../../store/user/userActions";
import RegisterForm from "../Form/RegisterForm";
import LoginForm from "../Form/LoginForm";
import { Box } from "@mui/material";
import cls from './Navbar.module.scss';

const ColorRedButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
        backgroundColor: pink[700],
    },
}));

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [opened, setOpened] = useState(false);
    const [form, setForm] = useState('authForm');
    const { isAuthorized } = useSelector(state => state.user);

    const toggleOpen = () => {
        setOpened(prev => !prev);
    };

    const handleClose = () => {
        setOpened(false);
    };

    const loginSubmit = (formData) => {
        dispatch(logIn(formData, handleClose));
    };

    const registerSubmit = (formData) => {
        dispatch(logIn(formData, handleClose));
    };

    const renderNavBar = () => {
        return (
            <div className={`${cls.Navbar} container`}>
                <h2 className={cls.logo}>LOGO</h2>
                <div className={cls.links}>
                    <Link to="">Главная</Link>
                    <Link to="about">О нас</Link>
                    <Link to="contact">Контакты</Link>
                    {isAuthorized && <Link to="organization">Организация</Link>}
                    {!isAuthorized ? (
                        <ColorRedButton
                            variant="contained"
                            color="primary"
                            style={{ textTransform: 'none' }}
                            onClick={toggleOpen}
                        >
                            Войти
                        </ColorRedButton>
                    ) : (
                        <ColorRedButton
                            variant="contained"
                            color="primary"
                            style={{ textTransform: 'none' }}
                            onClick={() => dispatch(logoutUser(navigate))}
                        >
                            Выйти
                        </ColorRedButton>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            <Modal
                open={opened}
                onClose={toggleOpen}
            >
                {form === 'authForm' ? (
                    <LoginForm
                        onSubmit={loginSubmit}
                        formId="login-form"
                    />
                ) : (
                    <RegisterForm
                        onSubmit={registerSubmit}
                        formId="login-form"
                    />
                )}
                {form === 'authForm' && (
                    <div>У вас еще нет учетной записи?
                        <a href="#"
                           onClick={() => setForm('registerForm')}
                        > Зарегистрируйтесь
                        </a> прямо сейчас
                    </div>
                )}
                <Box
                    sx={{ marginTop: 2 }}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        form="login-form"
                        type="submit"
                        color="primary"
                        style={{ textTransform: 'none' }}
                    >
                        {form === 'registerForm' ? "Регистрация" : 'Войти' }
                    </Button>
                </Box>
            </Modal>
            {renderNavBar()}
        </>
    );
};

export default Navbar;
