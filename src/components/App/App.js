import {Header} from "../Header/Header";
import {Promo} from "../Main/Promo/Promo";
import {AboutProject} from "../Main/AboutProject/AboutProject";
import {Techs} from "../Main/Techs/Techs";
import {AboutMe} from "../Main/AboutMe/AboutMe";
import {Footer} from "../Footer/Footer";

export const App = () => {
    return (
        <>
            <Header/>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Footer/>
        </>
    )

}
