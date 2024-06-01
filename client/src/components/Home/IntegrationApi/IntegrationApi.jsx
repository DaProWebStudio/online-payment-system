import cls from './IntegrationApi.module.scss'
import CodeCard from '../../../shared/assets/codeCard.png'

const IntegrationApi = () => {
    return (
        <div className={`${cls.IntegrationApi} container`}>
            <div>
                <h2 data-aos="fade-right" className={cls.Title}>Самые мощные и простые в использовании API в мире</h2>
                <h3 data-aos="fade-up" className={cls.Subtitle}>Инструменты для каждого стека</h3>
                <p data-aos="fade-up" className={cls.Description}>Мы предлагаем клиентские и серверные библиотеки на всех языках - от React и PHP до .NET и iOS.</p>
                <h3 data-aos="fade-up" className={cls.Subtitle}>Готовые интеграции</h3>
                <p data-aos="fade-up" className={cls.Description}>Используйте интеграцию с такими системами, как Shopify, WooCommerce, NetSuite и другими.</p>
            </div>
            <img data-aos="fade-left" className={cls.CodeCard} src={CodeCard} alt=""/>
        </div>
    );
};

export default IntegrationApi;