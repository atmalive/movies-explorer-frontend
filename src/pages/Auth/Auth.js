import './Auth.css';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../../components/shared/Logo/Logo';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Auth = ({ title, button, regText, link, linkText, regPerson, signPerson }) => {
    const location = useLocation();

    const isLocationSignIn = location.pathname === '/signin';
    const isLocationSignUp = location.pathname === '/signup';

    // const onClickButton = () => {
    //     if (isLocationSignIn) {
    //         navigate('/movies');
    //     }
    //     if (isLocationSignUp) {
    //     }
    // };
    //
    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         email: '',
    //         password: '',
    //     },
    //     validate,
    //     onSubmit: (values) => {
    //         console.log(values)
    //        //  if (isLocationSignUp) {
    //        //      regPerson(values)
    //        //  }
    //        // else if (isLocationSignIn) {
    //        //     console.log('as');
    //        //  }
    //     },
    // });
    // signinPerson(values)

    return (
        <section className="auth">
            <div className="auth__container">
                <Logo />
                <h1 className="auth__title">{title}</h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        name: isLocationSignUp && Yup.string().max(25, 'Имя должно быть до 25 знаков').required('Обязательное поле'),
                        email: Yup.string().email('Неправильно написание email').required('Обязательное поле'),
                        password: Yup.string().max(20, 'Пароль должен быть до 20 знаков').required('Обязательное поле'),
                    })}
                    onSubmit={(values) => (isLocationSignIn ? signPerson(values) : regPerson(values))}
                >
                    <Form action="Auth" className="auth__form" noValidate>
                        {isLocationSignUp && (
                            <label className="auth__label">
                                Имя
                                <Field type="text" className="auth__input" label="Имя" name="name" id="name" />
                                <ErrorMessage name="name" component="span" className="auth__err auth__err_name_name" />
                            </label>
                        )}
                        <label className="auth__label">
                            E-mail
                            <Field type="text" className="auth__input" label="E-mail" name="email" id="email" />
                            <ErrorMessage name="email" component="span" className="auth__err auth__err_name_email" />
                        </label>
                        <label className="auth__label">
                            Пароль <Field type="password" className="auth__input auth__input_password" label="Пароль" name="password" id="password" />
                            <ErrorMessage name="password" component="span" className="auth__err auth__err_name_password" />
                        </label>
                        <button className="auth__button" type="submit">
                            {button}
                        </button>
                    </Form>
                </Formik>
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
