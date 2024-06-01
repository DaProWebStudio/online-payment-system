import cls from './SetOfPayments.module.scss'
import Graphic from '../../../shared/assets/graphic.png'
import ApplePay from '../../../shared/assets/applePayPhone.png'
import Calculate from '../../../shared/assets/calculate.png'
import Visa from '../../../shared/assets/visa.png'

const SetOfPayments = () => {
    return (
        <div className={`${cls.SetOfPayments} container`}>
            <div className={cls.WrapperImage}>
                <img data-aos="fade-left" className={cls.Graphic} src={Graphic} alt=""/>
                <img data-aos="fade-right" className={cls.ApplePay} src={ApplePay} alt=""/>
                <img data-aos="fade-right" className={cls.Calculate} src={Calculate} alt=""/>
                <img data-aos="fade-up" className={cls.Visa} src={Visa} alt=""/>
            </div>
            <div>
                <h2 data-aos="zoom-in-up" className={cls.Title}>Полностью интегрированный набор платежных продуктов</h2>
                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={cls.Description}>
                    Мы объединяем все, что требуется для создания веб-сайтов и приложений,
                    которые принимают платежи и отправляют выплаты по всему миру. Продукты
                    Stripe позволяют осуществлять платежи онлайн и лично розничным продавцам,
                    компаниям, занимающимся подпиской, программным платформам и маркетплейсам,
                    а также всему, что находится между ними.
                </p>
            </div>
        </div>
    );
};

export default SetOfPayments;