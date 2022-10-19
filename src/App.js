import './App.css';
import { Footer } from './Index/Footer';
import { Navbar } from './Index/Navbar';
import { Section } from './Index/Section';
// import { Navbar1 } from './Index/Navbar1';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Section />
      <Footer />
      {/* <Navbar1 /> */}
    </div>
  );
}

export default App;
