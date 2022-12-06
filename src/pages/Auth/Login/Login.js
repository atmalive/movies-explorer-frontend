import { Auth } from '../Auth';

export const Login = () => {
    return (
        <>
            <Auth title={'Рады видеть!'} button={'Войти'} regText={'Ещё не зарегистрированы?'} link={'/signup'} linkText={'Регистрация'} />
        </>
    );
};
