import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Home/NavBar/NavBar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Logout from "./Login/Logout";
import OddajMain from "./OddajRzeczy/OddajMain";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./FireBaseConfig";
import ProtectedRoute from "./ProtectedRoute";

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/rejestracja' element={<Register/>}/>/
                <Route path='/logowanie' element={<Login/>}/>
                <Route path='/wylogowano' element={<Logout/>}/>
                <Route path='/oddaj' element={<ProtectedRoute/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
