import './AboutMe.css';
import avatar from '../../../images/avatar.webp';

export const AboutMe = () => {
    return (
        <section className="about-me">
            <h2 className="about-me__student">Студент</h2>
            <div className="about-me__front">
                <div className="about-me__info">
                    <h2 className="about-me__title">Михаил</h2>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 33 года</p>
                    <p className="about-me__text">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё
                        увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
                        веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className="about-me__github" href="src/components/Main/AboutMe/AboutMe#">
                        Github
                    </a>
                </div>
                <img className="about-me__i-am" src={avatar} alt="я" />
            </div>
            <h4 className="about-me__portfolio-subtitles">Портфолио</h4>
            <ul className="about-me__portfolio">
                <li className="about-me__page">
                    <a className="about-me__link" href="https://atmalive.github.io/Travel-rs.school/" target="_blank" rel="noopener noreferrer">
                        <span className="about-me__page-link">Адаптивный сайт</span>
                        <svg className="about-me__svg" xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                            <path fill="#000" d="m2.607 16.524 12.357-12.38-.02 9.546h2.322V.182H3.778l-.02 2.301h9.545L.945 14.863l1.662 1.661Z" />
                        </svg>
                    </a>
                </li>
                <li className="about-me__page">
                    <a className="about-me__link" href="https://atmalive.github.io/russian-travel/" target="_blank" rel="noopener noreferrer">
                        <span className="about-me__page-link">Адаптивный сайт 2</span>
                        <svg className="about-me__svg" xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                            <path fill="#000" d="m2.607 16.524 12.357-12.38-.02 9.546h2.322V.182H3.778l-.02 2.301h9.545L.945 14.863l1.662 1.661Z" />
                        </svg>
                    </a>
                </li>
                <li className="about-me__page">
                    <a className="about-me__link" href="https://atmalive.github.io/mesto-react/index.html" target="_blank" rel="noopener noreferrer">
                        <span className="about-me__page-link">Одностраничное приложение</span>
                        <svg className="about-me__svg" xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                            <path fill="#000" d="m2.607 16.524 12.357-12.38-.02 9.546h2.322V.182H3.778l-.02 2.301h9.545L.945 14.863l1.662 1.661Z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </section>
    );
};
