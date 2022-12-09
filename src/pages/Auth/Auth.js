import './Auth.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../../components/shared/Logo/Logo';
import { validate } from '../../utils/ValidationForm';
import { useFormik } from 'formik';

export const Auth = ({ title, button, regText, link, linkText }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLocationSignIn = location.pathname === '/signin';

    const onClickButton = () => {
        if (isLocationSignIn) {
            navigate('/movies');
        }
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
    });

    return (
        <section className="auth">
            <div className="auth__container">
                <Logo />
                <h1 className="auth__title">{title}</h1>
                <form action="Auth" className="auth__form" onSubmit={formik.handleSubmit} noValidate>
                    {!isLocationSignIn ? (
                        <label className="auth__label">
                            Имя
                            <input
                                type="text"
                                className="auth__input"
                                label="Имя"
                                name="name"
                                minLength="3"
                                required
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <span className="auth__err auth__err_name_name">
                                {formik.errors.name && formik.touched.name ? formik.errors.name : ''}
                            </span>
                        </label>
                    ) : (
                        ''
                    )}
                    <label className="auth__label">
                        E-mail
                        <input
                            type="text"
                            className="auth__input"
                            label="E-mail"
                            name="email"
                            minLength="3"
                            required
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <span className="auth__err auth__err_name_email">
                            {formik.errors.email && formik.touched.email ? formik.errors.email : ''}
                        </span>
                    </label>
                    <label className="auth__label">
                        Пароль{' '}
                        <input
                            type="password"
                            className="auth__input auth__input_password"
                            label="Пароль"
                            minLength="6"
                            name="password"
                            required
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <span className="auth__err auth__err_name_password">
                            {formik.errors.password && formik.touched.password ? formik.errors.password : ''}
                        </span>
                    </label>
                    <button onClick={onClickButton} className="auth__button" type={'submit'}>
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
