import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../pages/Homex';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';

const RoutesApp = ()=>{
    return(
        <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/MyJob' element={<MyJob />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    </Router>
    )
}

export default RoutesApp