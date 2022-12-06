import './Promo.css';
import mainLogo from '../../../images/main-logo.webp';
import { scrollToElement } from '../../../utils/scrollToElement';

export const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__info">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button onClick={() => scrollToElement('.techs')} className="promo__button">
                    Узнать больше
                </button>
            </div>
            <img className="promo__logo" src={mainLogo} alt="глобус" />
        </section>
    );
};
