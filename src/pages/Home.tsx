import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, BookOpenIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import ScrollSection from '../components/ScrollSection';
import EdgingTypeScript from '../assets/Edging TypeScript.png';
import buatThumbnail from '../assets/Github-Mark.png';
import GrandLibraryImage from '../assets/GrandLibrary.jpg';
import AncientScroll from '../assets/AncientScroll.jpeg'
import AncientBook from '../assets/AncientBook.jpg'
import Knight from '../assets/Knight.png'
import Typewriter from '../components/Typewriter';

const heroVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};
export default function Home() {
  return (
    <motion.section 
      className="min-h-screen flex flex-col px-6 py-16 bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-50 text-base-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Welcome Section */}
      <div
  className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-16 text-center text-white rounded-xl overflow-hidden"
  style={{
    backgroundImage: `url(${GrandLibraryImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay Layer */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-0" />

  {/* Hero Content */}
  <motion.div
    className="relative z-10 grid md:grid-cols-1 lg:grid-cols-1 place-items-center text-center px-6 py-24"
    variants={heroVariants}
    initial="hidden"
    animate="visible"
  >
    <ScrollSection variant="slideLeft">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white underline drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
      Welcome to <span className="text-orange-400">The Grand Library</span>
    </h1>
    </ScrollSection>
  </motion.div>
</div>

{/* Section: Intro */}
<motion.div
  className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <ScrollSection variant="slideLeft">
    <p className="text-lg leading-relaxed font-bold bg-orange-500 text-black p-6 rounded-lg underline drop-shadow-md">
      Step into the ancient halls of knowledge. A place where wisdom flows like a river of time, and secrets lie hidden in the shadows. Explore the treasures, the stories, and the magic of the ages...
    </p>
  </ScrollSection>

  <ScrollSection variant="scaleUp">
    <img
      src={AncientScroll}
      alt="Scroll"
      className="rounded-lg shadow-xl w-full"
    />
  </ScrollSection>
</motion.div>

<motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 px-6 py-12 bg-yellow-100 rounded-xl shadow-inner"
  initial={{ scale: 0.95, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="text-center space-y-4">
    <h2 className="text-3xl font-semibold flex justify-center items-center gap-2 text-orange-800">
      <BookOpenIcon className="shrink-0 w-7 h-7 text-yellow-700 w-7 h-7 animate-pulse" />
      <span className="whitespace-nowrap">
      <Typewriter text="W hat I Do in this Grand Library" />
      </span>
    </h2>
    <p className="text-orange-800">
      <ScrollSection variant="slideLeft">
      Within the halls of this library, I share stories, wisdom, and creations that span time and space. Dive into my world of articles, videos, and more.
      </ScrollSection>
    </p>
    <p className="italic text-sm text-yellow-800">
      <ScrollSection variant="slideLeft">
      Perpustakaan dimana, Saya menyebarkan sebuah cerita, kebajikan, dan sebuah kreasi sepanjang ruang dan waktu.
      </ScrollSection>
    </p>
  </div>
  <div className="flex items-center justify-center">
    <ScrollSection variant="slideRight">
    <img src={AncientBook} alt="Books" className="rounded-lg shadow-md w-full max-w-sm" />
    </ScrollSection>
  </div>
</motion.div>

<motion.div
  className="mb-20 px-6 py-16 bg-gradient-to-tr from-red-800 via-orange-600 to-yellow-400 text-white rounded-xl shadow-2xl border-4 border-yellow-200 relative"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
  viewport={{ once: true }}
>

  
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* ThumbnailCard or Big Image */}
    <ScrollSection variant="slideRight">
    <div className="w-full max-w-sm mx-auto">
      <img
        src={Knight}
        alt="Tugas Thumbnail"
        className="rounded-xl shadow-2xl border-4 border-white"
      />
    </div>
    </ScrollSection>
    {/* Text Content */}
    
    <div className="text-center md:text-left space-y-4">
      <ScrollSection variant="slideLeft">
      <h2 className="text-4xl font-black underline decoration-black decoration-wavy text-black">
        📚 TUGAS PAGE
      </h2>
      <p className="text-lg font-semibold text-black">
        Halaman ini dibuat untuk memenuhi tugas-tugas mata kuliah. Dan iya, ini serius. Jangan sampe ngira ini cuma buat gaya-gayaan.
      </p>
      </ScrollSection>
      <motion.div whileHover={{ scale: 1.1 }} className="inline-block mt-4">
        <Link
          to="/Project"
          className="btn px-6 py-3 bg-white text-red-700 font-bold rounded-lg shadow-lg border-2 border-yellow-400"
        >
          <ScrollSection variant="scaleUp">
          <ArrowRightIcon className="inline w-5 h-5 mr-2" />
          Halaman Tugas – Klik aja cepet</ScrollSection>
        </Link>
      </motion.div>
    </div>
    
  </div>
</motion.div>


      {/* Media Thumbnails */}
      <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* YouTube Card */}
        <div className="bg-yellow-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            <img
              src={EdgingTypeScript}
              alt="YouTube Thumbnail"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-lg font-medium flex items-center justify-center gap-2 text-orange-800">
              <VideoCameraIcon className="shrink-0 text-red-500 w-5 h-5" />
              Link YouTube
            </p>
          </a>
        </div>

        {/* GitHub Card */}
        <div className="bg-yellow-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
          <a href="https://github.com/im-bara" target="_blank" rel="noopener noreferrer">
            <img
              src={buatThumbnail}
              alt="GitHub Logo"
              className="w-full h-40 object-contain rounded-lg mb-4"
            />
            <p className="text-lg font-medium text-amber-900">Gitgut</p>
          </a>
        </div>
      </section>
    </motion.section>
  );
}
