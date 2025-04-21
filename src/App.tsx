import { Typography, Box} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './NavBar'; // Ensure the path is correct
import Home from './Home';
import Pricing from './Pricing';
import Products from './Products';

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
        </Routes>
      </Router>

      <Box
        component="footer"
        sx={{
          backgroundColor: '#282c34',
          color: 'white',
          padding: 2,
          marginTop: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          &copy; 2025 GreenLens Software. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default App;