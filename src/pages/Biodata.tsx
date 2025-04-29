import { motion } from 'framer-motion';
import avatar from '../assets/Stark.png'; 
import './Biodata.css';

function Biodata() {
  return (
    <motion.section 
      className="biodata-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="biodata-container">
      <div className="avatar-card">
        <img src={avatar} alt="Avatar" className="avatar-image" />
      </div>
      <div className="my-name">
      <h2>M Setra Satria Imbara</h2>
      </div>
      <p>The Knight of the Grand Library</p>


        {/* Right Side: Details */}
        <div className="biodata-right">
          <h1>About Me</h1>
          <p>
            I am a passionate creator, storyteller, and developer who guards the gates of imagination. My journey blends the ancient wisdom of tales with the modern magic of code. Every line, every word, is a step towards timeless knowledge.
          </p>
          <p>Jadi Perkenalkan, nama saya M Setra Satria Imbara. seorang kreator, storyteller, dan seorang developer.
            Saya memiliki minat dalam game Development, terutama pada minat terhadap game RPG. Disisi lain saya juga membuat cerita, lore, animasi,
            illustrasi, maupun musik. 
          </p>
          <p> <a href="https://www.youtube.com/watch?v=DnuUdeIfBzg">Karya</a> ini saya buat dengan senang hati, sebuah musik yang melambangkan suasana abad pertengahan</p>

          <h1>Skills</h1>
          <ul>
            <li>⚔️ Programming (TypeScript, JavaScript, Python, C++, C#, Java, PHP)</li>
            <li>🛡️ Storytelling & Lorebuilding</li>
            <li>✨ Game Development & Animation</li>
            <li>📖 Writing & Worldbuilding</li>
            <li>🎵 Medieval & Cyberpunk Music Composer</li>
          </ul>

          <h1>Contact</h1>
          <ul>
            <li>📧 Email: setrasatria12@gmail.com</li>
            <li>🔗 LinkedIn: https://www.linkedin.com/in/m-setra-satria-imbara-672516315/</li>
            <li>🎨 Artstation: https://www.artstation.com/baraksatria</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Biodata;
