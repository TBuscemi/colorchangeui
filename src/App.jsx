import './style/App.scss';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './component/pages/Home';
function App() {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Home/>}/>      
            </Routes>
        </>
    );
}

export default App;