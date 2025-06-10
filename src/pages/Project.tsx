import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import DiskThumbnail from '../assets/GrafikDisk.png';
import ProcessThumbnail from '../assets/Harddisk.jpeg';

const tugasList = [
  {
    title: 'Tugas 1 - Penjadwalan Disk',
    path: '/PenjadwalanDisk',
    thumbnail: DiskThumbnail,
  },
  {
    title: 'Tugas 2 - Penjadwalan Proses',
    path: '/SchedulingProcess',
    thumbnail: ProcessThumbnail,
  },
];

export default function Project() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 bg-amber-50 text-amber-900"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Header */}
      <div className="text-center mb-10 space-y-4">
        <h1 className="text-4xl font-bold text-orange-800 drop-shadow-md">📚 Daftar Tugas</h1>
        <p className="max-w-2xl mx-auto text-lg text-yellow-900 opacity-80">
          Klik salah satu tugas untuk membuka halaman tugas tersebut.
        </p>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {tugasList.map((tugas, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: [-1, 0, 1, 0] }}
            whileTap={{ scale: 0.97 }}
            className="bg-white border-2 border-amber-300 p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={tugas.thumbnail}
              alt={`Thumbnail ${tugas.title}`}
              className="rounded-xl w-full h-40 object-cover mb-4 border border-orange-300 shadow-sm"
            />
            <h2 className="text-xl font-bold text-orange-700 mb-2">{tugas.title}</h2>
            <Link
              to={tugas.path}
              className="btn bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md hover:scale-105 transition duration-200 mt-auto"
            >
              Buka Tugas
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
