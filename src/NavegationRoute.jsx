import {Routes, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservaciones from './pages/Reservaciones';


function NavegationRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/reservaciones' element={<Reservaciones/>}/>
        </Routes>

    )
}

export default NavegationRouter