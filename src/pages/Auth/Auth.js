import './Auth.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../../components/shared/Logo/Logo';
import { ValidationForm } from '../../utils/ValidationForm';

export const Auth = ({ title, button, regText, link, linkText }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLocationSignIn = location.pathname === '/signin';

    let err = ValidationForm();

    const onClickButton = () => {
        if (isLocationSignIn) {
            navigate('/movies');
        }
    };

    return (
        <section className="auth">
            <div className="auth__container">
                <Logo />
                <h1 className="auth__title">{title}</h1>
                <form action="Auth" className="auth__form">
                    {!isLocationSignIn ? (
                        <label className="auth__label">
                            {' '}
                            Имя <input type="text" className="auth__input" label="Имя" name="name" minLength="3" required />
                            <span className="auth__err auth__err_name_name">{err}</span>
                        </label>
                    ) : (
                        ''
                    )}
                    <label className="auth__label">
                        E-mail <input type="text" className="auth__input" label="E-mail" name="email" minLength="3" required />
                        <span className="auth__err auth__err_name_email">{err}</span>
                    </label>
                    <label className="auth__label">
                        Пароль{' '}
                        <input type="password" className="auth__input auth__input_password" label="Пароль" minLength="6" name="password" required />
                        <span className="auth__err auth__err_name_password">{err}</span>
                    </label>
                    <button onClick={onClickButton} className="auth__button">
                        {button}
                    </button>
                </form>
                <div className="auth__other-link">
                    <p className="auth__is-registr">{regText}</p>
                    <Link className="auth__link" to={link}>
                        {linkText}
                    </Link>
                </div>
            </div>
        </section>
    );
};