import './Techs.css';

const iKnowTechs = ['Html', 'CSS', 'JS', 'React', 'Git', 'Express.JS', 'mongoDB', 'bash'];

export const Techs = () => {
    return (
        <section className="techs">
            <h2 className="techs__section">Технологии</h2>
            <div className="techs__info">
                <h2 className="techs__title">{iKnowTechs.length - 0.5}</h2>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__cards">
                    {iKnowTechs.map((item, i) => (
                        <li className="techs__card" key={i}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
