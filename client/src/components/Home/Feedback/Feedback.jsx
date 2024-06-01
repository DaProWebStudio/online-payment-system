import cls from './Feedback.module.scss'
import Alex from '../../../shared/assets/user1.png'
import Misha from '../../../shared/assets/user2.png'
import Irina from '../../../shared/assets/user3.png'

const dataUserFeedback = [
    {
        name: 'Алексей Смирнов',
        description: '“Невероятно! Не могу поверить, что настройка нашего интернет-магазина заняла всего несколько минут. Все было просто и понятно.”',
        image: Alex
    },{
        name: 'Михаил Иванов',
        description: '“Это лучший сервис для приема онлайн-платежей. Подходит как для начинающих, так и для опытных пользователей, стремящихся к успеху.”',
        image: Misha
    },{
        name: 'Ирина Петров',
        description: '“Обязательный инструмент для любого бизнеса, который хочет принимать платежи онлайн быстро и безопасно.”',
        image: Irina
    }
]

const Feedback = () => {
    return (
        <div className={cls.Feedback}>
            <div className={cls.WrapperContent}>
                <h3 data-aos="fade-left" className={cls.title}>+1,749 команд поделились своим опытом использования нашего сервиса!</h3>
                {
                    dataUserFeedback.map(({name, description, image}) => (
                        <div data-aos="fade-up" className={cls.Card} key={name}>
                            <img src={image} alt=""/>
                            <div>
                                <p>{description}</p>
                                <h4>{name}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
            <svg
                className={cls.SvgBg}
                xmlns="http://www.w3.org/2000/svg"
                width={1600}

                fill="none"
                preserveAspectRatio="none"
            >
                <g clipPath="url(#a)">
                    <path fill="url(#b)" d="M0 1h1600v1473H0z"/>
                    <mask
                        id="c"
                        width={1600}
                        x={0}
                        y={1}
                        maskUnits="userSpaceOnUse"
                        style={{
                            maskType: "luminance",
                        }}
                    >
                        <path fill="#fff" d="M0 1h1600v1473H0z"/>
                    </mask>
                    <path
                        fill="#FDFDFF"
                        fillRule="evenodd"
                        d="M-.094 12.379s249.852 31.578 378.828 26.195c128.977-5.383 161.098-6.906 229.942 0 68.844 6.907 397.514 59.582 550.434 53.195 152.93-6.386 402.89-44.035 461.46-12.445V0H-1l.906 12.379ZM-4.593 1461.66s249.917-31.47 378.928-26.11c129.011 5.37 161.14 6.89 230.002 0 68.862-6.88 397.623-59.38 550.583-53.02 152.96 6.37 402.99 43.89 461.58 12.41V1474H-5.5l.907-12.34Z"
                        clipRule="evenodd"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="b"
                        x1={800}
                        x2={-667.977}
                        y1={-735.5}
                        y2={859.044}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#313C59"/>
                        <stop offset={1} stopColor="#161C2D"/>
                    </linearGradient>
                    <clipPath id="a">
                        <path fill="#fff" d="M-1 0h1622v1474H-1z"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default Feedback;