import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Home/NavBar/NavBar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Logout from "./Login/Logout";
import ProtectedRouteOddajMain from "./OddajRzeczy/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/Oddam_w_dobre_rece' element={<Home/>}/>
                <Route path='/rejestracja' element={<Register/>}/>/
                <Route path='/logowanie' element={<Login/>}/>
                <Route path='/wylogowano' element={<Logout/>}/>
                <Route path='/oddaj' element={<ProtectedRouteOddajMain/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
