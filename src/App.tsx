import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartProvider';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
