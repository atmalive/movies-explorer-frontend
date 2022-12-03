import './Profile.css';
import { Link } from 'react-router-dom';
import { ValidationForm } from '../../utils/ValidationForm';

// todo Стилизовать инпуты (все!)

export const Profile = () => {
    let err = ValidationForm();
    return (
        <section className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form action="" className="profile__form">
                    <label className="profile__label">
                        Имя <input type="text" className="profile__input" label="Имя" />
                        {/*<span className="profile__err profile__err_name_name">{err}</span>*/}
                    </label>
                    <label className="profile__label">
                        E-mail <input type="text" className="profile__input" label="E-mail" />
                        {/*<span className="profile__err profile__err_name_email">{err}</span>*/}
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
