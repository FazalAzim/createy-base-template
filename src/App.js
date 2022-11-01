import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Shop } from './Shop';
import { Contact } from './Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='shop' element={<Shop />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
