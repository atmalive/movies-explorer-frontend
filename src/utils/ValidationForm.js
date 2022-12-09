export const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Обязательное поле!';
    } else if (values.name.length < 3) {
        errors.name = 'Минимум 3 символа!';
    }
    if (!values.email) {
        errors.email = 'Обязательное поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Неправильный email адрес';
    }
    if (!values.password) {
        errors.password = 'Обязательное поле';
    } else if (values.password.length < 6) {
        errors.password = 'пароль должен быть длиннее 6 символов';
    }
    return errors;
};
