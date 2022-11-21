import './Techs.css';

export const Techs = () => {
    return (
        <section className="techs">
            <h2 className="techs__section">Технологии</h2>
            <div className="techs__info">
                <h2 className="techs__title">7.5 технологий</h2>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__cards">
                    <li className="techs__card">HTML</li>
                    <li className="techs__card">CSS</li>
                    <li className="techs__card">JS</li>
                    <li className="techs__card">React</li>
                    <li className="techs__card">Git</li>
                    <li className="techs__card">Express.js</li>
                    <li className="techs__card">mongoDB</li>
                    <li className="techs__card">bash</li>
                </ul>
            </div>
        </section>
    );
};
