import { Auth } from '../Auth';

export const Register = () => {
    return (
        <>
            <Auth title={'Добро пожаловать!'} button={'Зарегистрироваться'} regText={'Уже зарегистрированы?'} link={'/signin'} linkText={'Войти'} />
        </>
    );
};
