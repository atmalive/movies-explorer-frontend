import './Profile.css';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { validate } from '../../utils/ValidationForm';

export const Profile = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validate,
        onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
    });

    return (
        <section className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form action="Profile" className="profile__form">
                    <label className="profile__label">
                        Имя{' '}
                        <input
                            type="text"
                            className="profile__input"
                            label="Имя"
                            minLength="3"
                            required
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {/*<span className="profile__err profile__err_name_name">*/}
                        {/*    {formik.errors.name && formik.touched.name ? formik.errors.name : ''}*/}
                        {/*</span>*/}
                    </label>
                    <label className="profile__label">
                        E-mail{' '}
                        <input
                            type="text"
                            className="profile__input"
                            label="E-mail"
                            minLength="3"
                            required
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {/*<span className="profile__err profile__err_name_email">*/}
                        {/*    {formik.errors.email && formik.touched.email ? formik.errors.email : ''}*/}
                        {/*</span>*/}
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
