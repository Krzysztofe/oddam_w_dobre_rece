
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./MainComponent/NavBar/NavBar";
import MainComponent from "./MainComponent/MainComponent";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import OddajRzeczyMain from "./OddajRzeczy/OddajRzeczyMain";

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<MainComponent/>}/>
                <Route path='/rejestracja' element={<Register/>}/>
                <Route path='/logowanie' element={<Login/>}/>
                <Route path='/wylogowano' element={<Logout/>}/>
                <Route path='/oddajRzeczy' element={<OddajRzeczyMain/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
