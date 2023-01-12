import { Auth } from '../Auth';

export const Register = ({ regPerson }) => {
    return (
        <>
            <Auth
                title={'Добро пожаловать!'}
                button={'Зарегистрироваться'}
                regText={'Уже зарегистрированы?'}
                link={'/signin'}
                linkText={'Войти'}
                regPerson={regPerson}
            />
        </>
    );
};
