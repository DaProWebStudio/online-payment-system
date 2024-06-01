import './styles/index.scss'
import {Home} from "../pages";
import {Navbar} from "../widgets";
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
                </Routes>
                <Routes>
                    <Route path='organization' element={<Organization />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
