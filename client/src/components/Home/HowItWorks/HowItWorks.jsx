import cls from './HowItWorks.module.scss'

const HowItWorks = () => {
    return (
        <div className={`${cls.HowItWorks} container`}>
            <h2 data-aos="fade-left" className={cls.Title}>Как это работает?</h2>
            <p data-aos="fade-up" className={cls.Description}>С нашей интуитивно понятной системой вы можете легко интегрировать
                онлайн-платежи на ваш сайт всего в три простых шага.</p>
            <div className={cls.WrapperContent}>
                <div data-aos="fade-up">
                    <span className={cls.CircleLabel}>1</span>
                    <h4 className={cls.SubTitle}>Зарегистрируйтесь</h4>
                    <p className={cls.Excerpt}>Пройдите быструю и простую регистрацию на нашей платформе.</p>
                </div>
                <div data-aos="fade-up">
                    <span className={cls.CircleLabel}>2</span>
                    <h4 className={cls.SubTitle}>Настройте параметры</h4>
                    <p className={cls.Excerpt}>Настройте платежные параметры в соответствии с потребностями.</p>
                </div>
                <div data-aos="fade-up">
                    <span className={cls.CircleLabel}>3</span>
                    <h4 className={cls.SubTitle}>Начните пользоваться!</h4>
                    <p className={cls.Excerpt}>Запустите ваш сайт и начните принимать платежи от клиентов.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;