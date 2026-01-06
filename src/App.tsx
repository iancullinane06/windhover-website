import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import RnD from './pages/RnD';
import Rhodolens from './pages/Rhodolens';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        {/* Floating Navbar */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/rnd" element={<RnD />} />
            <Route path="/rhodolens" element={<Rhodolens />} /> {/* New Route */}
            <Route path="*" element={<NotFound />} /> {/* Default 404 Page */}
          </Routes>
        </Router>


        <Footer />
      </div>
  );
}

export default App;