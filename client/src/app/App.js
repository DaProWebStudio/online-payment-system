import './styles/index.scss'
import {Home, NotFoundPage} from "../pages";
import {Footer, Navbar} from "../widgets";
import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../store/index";
import React from "react";
import Organization from "../pages/Organization/Organization";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='organization' element={<Organization />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
                <Footer/>
            </div>
        </Provider>
    );
}

export default App;
