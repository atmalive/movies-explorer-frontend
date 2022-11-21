import './Profile.css';
import { Link } from 'react-router-dom';

// todo Стилизовать инпуты (все!)

export const Profile = () => {
    return (
        <section className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form action="" className="profile__form">
                    <label className="profile__label">
                        Имя <input type="text" className="profile__input" label="Имя" />
                    </label>
                    <label className="profile__label">
                        E-mail <input type="text" className="profile__input" label="E-mail" />
                    </label>

                    <button className="profile__button">Редактировать</button>
                </form>
                <Link className="profile__link" to={'/'}>
                    Выйти из аккаунта
                </Link>
            </div>
        </section>
    );
};
