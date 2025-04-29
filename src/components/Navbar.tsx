import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="navbar"
    >
      <div className="logo">
        🏛️ The Grand Library
      </div>
      <ul className="nav-links">
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/Biodata">Biodata</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/Articles">Artikel</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/ContactPage">Kontak</Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
