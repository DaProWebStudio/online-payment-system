import React from 'react';
import cls from './Navbar.module.scss'
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {pink} from "@mui/material/colors";
import {Link} from "react-router-dom";

const ColorRedButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
        backgroundColor: pink[700],
    },
}));

const Navbar = () => {
    return (
        <div className={`${cls.Navbar} container`}>
            <h2 className={cls.logo}>LOGO</h2>
            <div className={cls.links}>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О нас</Link>
                <Link to={'/contact'}>Контакты</Link>
                <ColorRedButton variant="contained">Войти</ColorRedButton>
            </div>
        </div>
    );
};

export default Navbar;