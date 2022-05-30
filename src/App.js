import "./App.scss";
import Header from "./components/header/header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Burgers from "./pages/burgers/burgers";
import Checkout from "./pages/checkout/checkout";
import Authentication from "./pages/authentication/authentication";
import AboutUs from "./pages/about-us/about-us";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:category" element={<Burgers />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="signIn" element={<Authentication />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
