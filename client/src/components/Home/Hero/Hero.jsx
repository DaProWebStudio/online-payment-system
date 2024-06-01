import cls from './Hero.module.scss'
import React, {useEffect} from "react";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {pink} from "@mui/material/colors";
import DesktopAdmin from "../../../shared/assets/destopAdmin.png"
import MobilePay from '../../../shared/assets/mobilePay.png'
import Cone3d from '../../../shared/assets/cone3d.svg'
import MultiGraphic3d from '../../../shared/assets/multigraphics3d.svg'
import AOS from "aos";
import "aos/dist/aos.css";

const ColorPinkButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[400]),
    backgroundColor: pink[400],
    padding: '13px 40px',
    marginTop: '30px',
    borderRadius: '15px',
    fontWeight: '700',
    '&:hover': {
        backgroundColor: pink[500],
    },
}));

const Hero = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className={`${cls.Hero} container`}>
            <div>
                <h1 data-aos="fade-right" className={cls.Title}>Легкие <br/> и безопасные
                    <span>онлайн-платежи</span>
                </h1>
                <p data-aos="fade-right" className={cls.Description}>Миллионы компаний всех размеров используют Наш сервис онлайн и лично для
                    приема платежей, отправки выплат, автоматизации финансовых процессов и увеличения доходов.</p>
                <ColorPinkButton variant="contained">Начать сейчас</ColorPinkButton>
            </div>
            <div className={cls.WrapperImage}>
                <img data-aos="fade-left" className={cls.DesktopAdmin} src={DesktopAdmin} alt=""/>
                <img className={cls.MobilePay} src={MobilePay} alt=""/>
            </div>
            <img className={cls.Cone3d} src={Cone3d} alt=""/>
            <img className={cls.MultiGraphic3d} src={MultiGraphic3d} alt=""/>
            <svg className={cls.CircleBg} width="920" height="975" viewBox="0 0 920 975" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_1098)">
                    <circle cx="42.5" cy="119.5" r="577.5" fill="url(#paint0_radial_1_1098)"/>
                </g>
                <defs>
                    <filter id="filter0_f_1_1098" x="-835" y="-758" width="1755" height="1755"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1_1098"/>
                    </filter>
                    <radialGradient id="paint0_radial_1_1098" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(42.5 119.5) rotate(90) scale(482.369)">
                        <stop stop-color="#F74D4D"/>
                        <stop offset="1" stop-color="#BF09FF" stop-opacity="0"/>
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

export default Hero;