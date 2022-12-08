import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <h5 className="footer__subtitles">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
            <div className="footer__yandex">
                <p className="footer__copyright">© 2022</p>
                <ul className="footer__links">
                    <li className="footer__yandex-praktikum">
                        <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="https://github.com/atmalive" target="_blank" rel="noreferrer">
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
