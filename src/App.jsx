import './App.css';
import { Home } from './pages/Home/Home';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Program } from './pages/Program/Program';
import { Training } from './pages/Training/Training';
import { Pricing } from './pages/Pricing/Pricing';
import { Navbar } from './navbar';
import { Day } from './pages/activity/day';
import { Monthly } from './pages/activity/monthly';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='program' element={<Program />} />
        <Route path='training' element={<Training />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='day' element={<Day />} />
        <Route path='monthly' element={<Monthly />} />
        <Route path='login' element={<Login />}/> 
        <Route path='login/register' element={<Register />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
