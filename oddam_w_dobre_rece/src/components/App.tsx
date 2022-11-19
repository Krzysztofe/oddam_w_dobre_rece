import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Home/navBar/NavBar";
import Home from "./Home/Home";
// import Login from "./login/Login";
// import Register from "./login/Register";
// import Logout from "./login/Logout";
// import ProtectedRouteOddajMain from "./OddajRzeczy/ProtectedRoute";
// import GlobalContextProv from "./OddajRzeczy/oddajContext/GlobalContextProv";
import '../scss/index.scss'
import {Provider} from "react-redux";
import {store} from '../store/store'

const Register = lazy(() => import('./login/Register'))
const Login = lazy(() => import("./login/Login"))
const Logout = lazy(() => import("./login/Logout"))
const ProtectedRouteOddajMain = lazy(() => import("./OddajRzeczy/ProtectedRoute"))


function App() {
    return (
        <>
            <BrowserRouter basename='/oddam_w_dobre_rece'>
                <NavBar/>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/rejestracja' element={<Register/>}/>
                        <Route path='/logowanie' element={<Login/>}/>
                        <Route path='/wylogowano' element={<Logout/>}/>
                        <Route path='/oddaj'
                               element={
                                   <Provider store={store}>
                                       {/*<GlobalContextProv>*/}
                                           <ProtectedRouteOddajMain/>
                                       {/*</GlobalContextProv>*/}
                                   </Provider>
                               }/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;
