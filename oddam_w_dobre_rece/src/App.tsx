import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./pages/home/navBar/NavBar";
import HomeMain from "./pages/home/homeMain/HomeMain";
import './scss/index.scss'
import {Provider} from "react-redux";
import {store} from './redux/store'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {summaryApi} from "./redux/storeFeatures/apiSlice";


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
                    <Provider store={store}>
                        <ApiProvider api={summaryApi}>
                            <Routes>


                                <Route path='/' element={<HomeMain/>}/>
                                <Route path='/rejestracja' element={<Register/>}/>
                                <Route path='/logowanie' element={<Login/>}/>
                                <Route path='/wylogowano' element={<Logout/>}/>
                                <Route path='/oddaj' element={<ProtectedRouteOddajMain/>}/>


                            </Routes>
                        </ApiProvider>
                    </Provider>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;
