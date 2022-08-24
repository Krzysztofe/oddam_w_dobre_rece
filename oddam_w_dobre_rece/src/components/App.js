import NavBar from "./MainComponent/NavBar/NavBar";
import MainComponent from "./MainComponent/MainComponent";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import OddajRzeczy from "./OddajRzeczy";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<MainComponent/>}/>
                <Route path='/logowanie' element={<Login/>}/>
                <Route path='/rejestracja' element={<Register/>}/>
                <Route path='/wylogowano' element={<Logout/>}/>
                <Route path='/oddajRzeczy' element={<OddajRzeczy/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
