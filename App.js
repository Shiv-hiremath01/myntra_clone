import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Living from "./pages/Living";
import Beauty from "./pages/Beauty";
import Details from './pages/Details';
import CartDetails from './actions/cartedItems'
import Wishlist from "./pages/Wishlist";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Checkout from './components/Checkout';
import Payment from './pages/payment'




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' >
        <Route index element={<Home/>}/>
        <Route path='/men'element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/living' element={<Living/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/cart' element={<CartDetails/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/payment" element={<Payment />} />
        
        


      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;




