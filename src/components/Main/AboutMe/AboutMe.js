import './AboutMe.css';
import avatar from '../../../images/avatar.webp';

const int = [
    {
        href: 'https://atmalive.github.io/Travel-rs.school/',
        text: 'Адаптивный сайт',
    },
    {
        href: 'https://atmalive.github.io/russian-travel/',
        text: 'Адаптивный сайт 2',
    },
    {
        href: 'https://atmalive.github.io/mesto-react/index.html',
        text: 'Одностраничное приложение',
    },
];

export const AboutMe = () => {
    return (
        <section className="about-me">
            <h2 className="about-me__student">Студент</h2>
            <div className="about-me__front">
                <div className="about-me__info">
                    <h2 className="about-me__title">Михаил</h2>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 33 года</p>
                    <p className="about-me__text">
                        Я родился и живу на острове, закончил местный технарь. У меня есть жена и 7 дочерей. Я люблю бегать музыку, а ещё слушать бег.
                        Недавно начал кодить. С 2015 года работал в ресторане «ООО Макдональдс». После того, как прошёл курс по веб-разработке, начал
                        заниматься фриланс-заказами и ушёл с постоянной, любимой работы.
                    </p>
                    <a className="about-me__github" href="https://github.com/atmalive" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </div>
                <img className="about-me__img" src={avatar} alt="я" />
            </div>
            <h4 className="about-me__portfolio-subtitles">Портфолио</h4>
            <ul className="about-me__portfolio">
                {int.map((item, i) => (
                    <li className="about-me__page" key={i}>
                        <a className="about-me__link" href="https://atmalive.github.io/Travel-rs.school/" target="_blank" rel="noopener noreferrer">
                            <span className="about-me__page-link">{i.text}</span>
                            <svg className="about-me__svg" xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                                <path
                                    fill="#000"
                                    d="m2.607 16.524 12.357-12.38-.02 9.546h2.322V.182H3.778l-.02 2.301h9.545L.945 14.863l1.662 1.661Z"
                                />
                            </svg>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};
