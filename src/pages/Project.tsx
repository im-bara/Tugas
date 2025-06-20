import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import DiskThumbnail from '../assets/GrafikDisk.png';
import ProcessThumbnail from '../assets/Harddisk.jpeg';
import QuotesAPI from '../assets/QuotesAPI.png';
import TokoPeDeIa from '../assets/TokoPeDeIa.png';
import cKS from '../assets/cKS.png';


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

const projekList = [
  {
    title: 'Project Quotes API Offline',
    path: 'https://github.com/im-bara/quotes-api',
    thumbnail: QuotesAPI,
  },
  {
    title: 'Project TokoPeDeIa',
    path: 'https://im-bara.github.io/toko-pdi',
    thumbnail: TokoPeDeIa,
  },
  {
    title: 'Bahasa Pemograman - KnightScript',
    path: 'https://github.com/im-bara/cKS',
    thumbnail: cKS,
  },

]

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
      { /*Gridcard*/ }
      <div className="bg-orange-100 py-12 mt-20 rounded-xl shadow-inner">
  <div className="text-center mb-10 space-y-4">
    <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-md">
      🧪 Daftar Personal Project 🔥
    </h1>
    <p className="max-w-2xl mx-auto text-lg text-blue-800 opacity-80">
      Hal random yang gue kerjain karena gabut, semangat, atau overthinking tengah malam.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {projekList.map((project, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.07, rotate: [0, 2, -2, 0] }}
        whileTap={{ scale: 0.95 }}
        className="bg-white border-4 border-blue-300 p-4 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={project.thumbnail}
          alt={`Thumbnail ${project.title}`}
          className="rounded-xl w-full h-40 object-cover mb-4 border border-blue-200 shadow-sm"
        />
        <h2 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h2>
        <a
          href={project.path}
          target="_blank"
          rel="noreferrer"
          className="btn bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow hover:scale-105 transition duration-200 mt-auto"
        >
          Lihat Project
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </a>
      </motion.div>
    ))}
  </div>
</div>

    </motion.section>
  );
}
