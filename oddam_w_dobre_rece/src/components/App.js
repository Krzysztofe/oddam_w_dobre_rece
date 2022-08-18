import Header from "./Header";
import Main from "./Main";
import AboutUs from "./AboutUs";
import {BrowserRouter} from "react-router-dom";
import {HashLink as Link, NavHashLink} from 'react-router-hash-link';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Main/>
                <AboutUs/>
            </div>
        </BrowserRouter>

    );
}

export default App;
