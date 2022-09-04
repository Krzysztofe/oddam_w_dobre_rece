
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./MainComponent/NavBar/NavBar";
import Home from "./MainComponent/Home";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import OddajRzeczyMain from "./OddajRzeczy/OddajMain";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./FireBaseConfig";

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/rejestracja' element={<Register/>}/>
                <Route path='/logowanie' element={<Login/>}/>
                <Route path='/wylogowano' element={<Logout/>}/>
                <Route path='/oddajRzeczy' element={<OddajRzeczyMain/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
