import { Link } from 'react-router-dom'
import NotFoundImg from '../../shared/assets/404.svg'
import cls from './NotfoundPage.module.scss'
import React from "react";

function NotFoundPage() {
    return (
        <section id={cls.notFound}>
            <div className="container">
                <div className={cls.notFound}>
                    <img src={NotFoundImg} alt="404"/>
                    <h1 className={cls.title}>Страница не найдена перейдите по <Link className={cls.titleLink}
                                                                                     to='/'>ссылке</Link></h1>
                </div>
            </div>
            <svg className={cls.CircleBg} width="920" height="775" viewBox="0 0 920 975" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
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
        </section>
    )
}

export default NotFoundPage;
