import './Auth.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../shared/Logo/Logo';

export const Auth = ({ title, button, regText, link, linkText }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLocationSignIn = location.pathname === '/signin';

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
                <form action="" className="auth__form">
                    {!isLocationSignIn ? (
                        <label className="auth__label">
                            {' '}
                            Имя <input type="text" className="auth__input" label="Имя" />
                        </label>
                    ) : (
                        ''
                    )}
                    <label className="auth__label">
                        E-mail <input type="text" className="auth__input" label="E-mail" />
                    </label>
                    <label className="auth__label">
                        Пароль <input type="password" className="auth__input auth__input_password" label="Пароль" />
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
