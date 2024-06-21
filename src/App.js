import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/modules/Navbar';
import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import Dashboard from "./components/modules/Dashboard";
import Products from './components/modules/Products';
import AboutUs from './components/modules/AboutUs';
import ReviewForm from './components/modules/ReviewForm';
import ThankYouPage from './components/modules/Thank-You';
import ProductDetail from './components/modules/ProductDetail';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route exact path='/home' element={<Header />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/review' element={<ReviewForm />} /> {/* Use element prop instead of component */}
        <Route path='/thank-you' element={<ThankYouPage/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
