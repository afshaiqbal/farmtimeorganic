import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './components/modules/Navbar';
import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import AboutUs from './components/modules/AboutUs';
import Products from './components/modules/Products';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Header />
        <Products/>
        <AboutUs/>
        <Routes> 
          {/* <Route path='/products' element={<Products />} />
          <Route path='/about' element={<AboutUs />} /> */}
          {/* <Route path='/contact' element={<Footer />} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
