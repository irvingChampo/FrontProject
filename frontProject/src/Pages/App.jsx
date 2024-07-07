import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cam from "../Organims/Cam/Cam";
import CamAlert from "../Organims/CamAlert/CamAlert";
import Temperature from "../Organims/Temperature/Temperature";
import Home from "../Organims/Home/Home";
import Login from "../Organims/Login/Login";
import Register from "../Organims/Register/Register"


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/camara" element={<Cam/>} />
                <Route path='/alerta' element={<CamAlert/>} />
                <Route path='/temperatura' element={<Temperature/>} />
            </Routes>
        </Router>
    );
}

export default App;