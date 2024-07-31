import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sensores from "../Organims/Sensores/Sensores";
import Login from "../Organims/Login/Login";
import Register from "../Organims/Register/Register"


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/sensores' element={<Sensores/>} />
            </Routes>
        </Router>
    );
}

export default App;