import { motion } from 'framer-motion';
import EdgingTypeScript from '../assets/Edging TypeScript.png';
import buatThumbnail from '../assets/Github-Mark.png';
import './HomePage.css';

function HomePage() {
  return (
    <motion.section 
      className="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* ========================= Welcome Section ========================= */}
      <div className="welcome-section">
        <h1 className="title">Welcome to The Grand Library</h1>
        <p className="intro-text">
          Step into the ancient halls of knowledge. A place where wisdom flows like a river of time, and secrets lie hidden in the shadows. Explore the treasures, the stories, and the magic of the ages...
        </p>
        <motion.button 
          className="explore-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => alert('Welcome to the library! Explore more wisdom.')}
        >
          Explore Now
        </motion.button>
      </div>

      {/* ========================= What I Do Section ========================= */}
      <motion.section className="what-i-do-section">
        <h2 className="section-title">What I Do and Make in this Grand Library</h2>
        <p className="section-desc">
          Within the halls of this library, I share stories, wisdom, and creations that span time and space. Dive into my world of articles, videos, and more.
        </p>
        <p className="section-desc-id">
          Perpustakaan dimana, Saya menyebarkan sebuah cerita, kebajikan, dan sebuah kreasi sepanjang ruang dan waktu. Menyelam di dunia saya tentang Artikel, video, dan banyak lagi.
        </p>
      </motion.section>

      {/* ========================= Media Thumbnails Section ========================= */}
      <section className="media-thumbnails-section">
        <div className="media-thumbnails">
          <div className="thumbnail">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
              <img src={EdgingTypeScript} alt="Self Assets" />
              <p>Link Youtube</p>
            </a>
          </div>

          <div className="thumbnail">
            <a href="https://github.com/im-bara" target="_blank" rel="noopener noreferrer">
              <img src={buatThumbnail} alt="Github Coy" />
              <p>Gitgut</p>
            </a>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default HomePage;
