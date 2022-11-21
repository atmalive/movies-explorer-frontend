import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

export const ErrorPage = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <section className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__text">Страница не найдена</p>
                <button onClick={goBack} className="not-found__back">
                    Назад
                </button>
            </div>
        </section>
    );
};
