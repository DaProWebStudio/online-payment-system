import './styles/index.scss'
import {Home} from "../pages";
import {Navbar} from "../widgets";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>

        </div>
    );
}

export default App;
