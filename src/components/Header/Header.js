import './Header.css'
import logo from '../../images/logo.webp'

const isUser = false

export const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt="Логотип практикума"/>
            {isUser ? <div className='header__page-names'>
                <h2 className='header__page-title'>Фильмы</h2>
                <p className='header__page-name'>Сохраненные фильмы</p>
            </div> : '' }
            <div className='header__user-info'>
                <p className='header__user'>Регистрация</p>
                <button className='header__button'>Войти</button>
            </div>
        </div>
    )
}