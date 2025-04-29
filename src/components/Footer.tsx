import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="footer"
    >
      <p>© {new Date().getFullYear()} The Grand Library. All rights reserved.</p>
      <p>M Setra Satria Imbara - The Knight ✨📜</p>
    </motion.footer>
  );
}

export default Footer;
