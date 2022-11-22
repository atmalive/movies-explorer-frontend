import './AboutProject.css';

export const AboutProject = () => {
    return (
        <section className="about-project">
            <h2 className="about-project__project">О проекте</h2>
            <div className="about-project__info">
                <div className="about-project__about">
                    <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__about">
                    <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__deadline">
                <p className="about-project__one-week">1 неделя</p>
                <p className="about-project__four-week">4 недели</p>
                <p className="about-project__backend">Back-end</p>
                <p className="about-project__front-end">Front-end</p>
            </div>
        </section>
    );
};
