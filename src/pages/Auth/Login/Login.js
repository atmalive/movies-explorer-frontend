import { Auth } from '../Auth';

export const Login = ({ signPerson }) => {
    return (
        <>
            <Auth
                title={'Рады видеть!'}
                button={'Войти'}
                regText={'Ещё не зарегистрированы?'}
                link={'/signup'}
                linkText={'Регистрация'}
                signPerson={signPerson}
            />
        </>
    );
};
