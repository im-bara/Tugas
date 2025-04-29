import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Biodata from './pages/Biodata';
import Articles from './pages/Articles';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <header>
          <Navbar />
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Biodata" element={<Biodata />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/ContactPage" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
