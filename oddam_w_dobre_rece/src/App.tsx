import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./pages/home/navBar/NavBar";
import HomeMain from "./pages/home/homeMain/HomeMain";
import './scss/index.scss'
import {Provider} from "react-redux";
import {store} from './redux/store'

const Register = lazy(() => import('./pages/register/Register'))
const Login = lazy(() => import("./pages/login/Login"))
const Logout = lazy(() => import("./pages/logout/Logout"))
const ProtectedRouteOddajMain = lazy(() => import("./pages/oddaj/protectedRoute/ProtectedRoute"))


function App() {
    return (
        <>
            <BrowserRouter basename='/oddam_w_dobre_rece'>
                <NavBar/>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Routes>
                        <Route path='/' element={<HomeMain/>}/>
                        <Route path='/rejestracja' element={<Register/>}/>
                        <Route path='/logowanie' element={<Login/>}/>
                        <Route path='/wylogowano' element={<Logout/>}/>
                        <Route path='/oddaj'
                               element={
                                   <Provider store={store}>
                                           <ProtectedRouteOddajMain/>
                                   </Provider>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;
