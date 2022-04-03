import './App.scss';
import Header from './components/header/header';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home/home';
import Burgers from './pages/burgers/burgers';
import Drinks from './pages/drinks/drinks';
import Salads from './pages/salads/salads';
import Checkout from './pages/checkout/checkout';
import SignIn from './pages/sign-in/sign-in';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/burgers" element={<Burgers/>} />
        <Route path="/salads" element={<Salads/>} />
        <Route path="/drinks" element={<Drinks/>} />
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='signIn' element={<SignIn/> } />
      </Routes>
    </div>
  );
}

export default App;
