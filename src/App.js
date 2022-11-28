import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Cart } from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartOrder } from './pages/CartOrder';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='shop' element={<Shop />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='order' element={<CartOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
