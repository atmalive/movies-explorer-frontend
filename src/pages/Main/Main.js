import { Promo } from './Promo/Promo';
import { AboutProject } from './AboutProject/AboutProject';
import { Techs } from './Techs/Techs';
import { AboutMe } from './AboutMe/AboutMe';
import './Main.css';

export const Main = () => {
    return (
        <main className="main">
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
        </main>
    );
};
