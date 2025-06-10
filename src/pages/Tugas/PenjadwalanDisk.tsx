import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import chartImage from '../../assets/GrafikDisk.png';

const algorithms = [
  { name: 'FCFS (First Come First Serve)', track: 19618, desc: 'Mengakses track sesuai urutan permintaan. Paling tidak efisien karena tidak mempertimbangkan jarak antar track.' },
  { name: 'SSTF (Shortest Seek Time First)', track: 2742, desc: 'Mengakses track terdekat dari posisi sekarang. Sangat efisien, tapi bisa menyebabkan starvation untuk track yang jauh.' },
  { name: 'SCAN (Up)', track: 2742, desc: 'Head bergerak satu arah hingga ujung disk, lalu berbalik arah. Mirip seperti lift.' },
  { name: 'LOOK (Up)', track: 2742, desc: 'Seperti SCAN, namun hanya bergerak sejauh ada permintaan, tidak sampai ujung disk.' },
  { name: 'C-SCAN', track: 3822, desc: 'Head hanya bergerak satu arah, dan saat sampai ujung, langsung melompat ke awal tanpa melayani permintaan di balik arah.' },
  { name: 'C-LOOK', track: 3762, desc: 'Versi lebih efisien dari C-SCAN, hanya menjangkau sejauh ada permintaan sebelum melompat ke awal.' },
  { name: 'SCAN (Down)', track: 3237, desc: 'Versi SCAN dengan arah awal ke bawah.' },
];

export default function PenjadwalanDisk() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 bg-base-100 text-base-content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Judul */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">📀 Laporan Penjadwalan Disk</h1>
          <p className="text-lg opacity-80">
            Studi kasus penjadwalan head disk berdasarkan beberapa algoritma klasik.
          </p>
        </div>

        {/* Informasi Umum */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">📌 Informasi Awal</h2>
          <ul className="list-disc ml-6 opacity-80">
            <li>Posisi awal head disk: <b>1234</b></li>
            <li>Jumlah track pada disk: <b>2000</b></li>
            <li>Urutan track yang diakses:</li>
          </ul>
          <div className="bg-base-200 p-4 rounded-lg text-sm mt-2">
            1600, 1050, 1775, 1950, 80, 825, 75, 1300, 1450, 600, 100, 1600, 1050, 30, 1900, 2003, 700, 1300, 55, 425, 137, 700, 1600, 200
          </div>
        </div>

        {/* Tabel Algoritma */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">📊 Hasil Total Lintasan Head Disk</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Algoritma</th>
                  <th>Total Track Movement</th>
                </tr>
              </thead>
              <tbody>
                {algorithms.map((algo, idx) => (
                  <tr key={idx}>
                    <td>{algo.name}</td>
                    <td>{algo.track}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disk */}
        <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-semibold">📈 Grafik Perjalanan Head Disk</h2>
                 <div className="bg-base-200 p-4 rounded-lg text-center">
              <img
            src={chartImage}
                alt="Grafik Head Disk"
            className="mx-auto rounded-lg shadow-lg max-w-full"
                    />
                  <p className="text-sm mt-2 opacity-60">Visualisasi lintasan head berdasarkan algoritma.</p>
                </div>
            </div>

        {/* Penjelasan Algoritma */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">📘 Penjelasan Algoritma</h2>
          {algorithms.map((algo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-base-200 p-4 rounded-lg"
            >
              <h3 className="text-lg font-bold text-primary">{algo.name}</h3>
              <p className="text-sm opacity-90">{algo.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Kesimpulan */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">🧠 Kesimpulan</h2>
          <p className="opacity-80">
            Dari hasil percobaan, algoritma <b>SSTF</b>, <b>SCAN</b>, dan <b>LOOK</b> memiliki performa terbaik dalam mengurangi total lintasan head disk.  
            Sementara <b>FCFS</b> adalah yang paling boros. Pemilihan algoritma penjadwalan disk sangat penting demi efisiensi sistem penyimpanan.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link to="/Project" className="btn btn-outline btn-primary">← Kembali ke Daftar Tugas</Link>
        </div>
      </div>
    </motion.section>
  );
}
