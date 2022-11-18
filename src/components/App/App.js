import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Main} from "../Main/Main";
import {Route, Routes} from "react-router-dom";
import {Movies} from "../Movies/Movies";
import {SavedMovies} from "../SavedMovies/SavedMovies";
import {Profile} from "../auth/Profile/Profile";
import {Login} from "../auth/Login/Login";
import {Register} from "../auth/Register/Register";
import {ErrorPage} from "../ErrorPage/ErrorPage";


export const App = () => {
    return (
        <>
            <Header/>
                        <Routes>
                            <Route exact path="/" element={<Main/>}/>
                            <Route path="/movies" element={<Movies/>}/>
                            <Route path="/saved-movies" element={<SavedMovies/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/signin" element={<Login/>}/>
                            <Route path="/signup" element={<Register/>}/>
                            <Route path="*" element={<ErrorPage/>}/>
                        </Routes>
            <Footer/>
        </>
    )
}
