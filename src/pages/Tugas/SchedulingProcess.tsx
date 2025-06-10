import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const penjadwalanData = [
  {
    title: "PTPD",
    headers: ["P", "TB", "LP", "SM", "SR", "LT"],
    rows: [
      ["A", 0, 9, 0, 9, 9],
      ["B", 2, 3, 9, 12, 10],
      ["C", 5, 7, 12, 19, 14],
      ["D", 7, 10, 19, 29, 22],
      ["E", 11, 10, 29, 39, 28],
      ["F", 15, 20, 39, 59, 44],
      ["G", 18, 4, 59, 63, 45],
    ],
    total: 172,
    rerata: 24.6,
  },
  {
    title: "SJF",
    headers: ["P", "TB", "LP", "SM", "SR", "LT", "WT"],
    rows: [
      ["A", 0, 9, 0, 9, 9, 0],
      ["B", 2, 3, 9, 12, 10, 7],
      ["C", 5, 7, 12, 19, 14, 7],
      ["D", 7, 37, 19, 29, 22, -15],
      ["E", 11, 10, 29, 39, 28, 18],
      ["F", 15, 37, 39, 59, 44, 7],
      ["G", 18, 4, 59, 63, 45, 41],
    ],
    total: 172,
    rerata: 24.6,
    rerataWT: 9.3,
  },
  {
    title: "PTDP",
    headers: ["P", "TB", "LP", "LT"],
    rows: [
      ["A", 0, 9, 9],
      ["B", 2, 3, 1],
      ["C", 5, 7, 2],
      ["D", 7, 10, 3],
      ["E", 11, 10, -1],
      ["F", 15, 20, -4],
      ["G", 18, 4, -14],
    ],
    total: -4,
    rerata: -0.6,
  },
  {
    title: "RPTD",
    headers: ["P", "TB", "LP", "SR", "LT"],
    rows: [
      ["A", 0, 9, 9, 9],
      ["B", 2, 3, 12, 10],
      ["C", 5, 7, 19, 14],
      ["D", 7, 10, 29, 22],
      ["G", 18, 4, 33, 15],
      ["E", 11, 10, 43, 32],
      ["F", 15, 20, 63, 48],
    ],
    total: 150,
    rerata: 21.4,
  },
  {
    title: "RR Q=2",
    headers: ["P", "TB", "LP", "SR", "LT"],
    rows: [
      ["A", 0, 9, 30, 30],
      ["B", 2, 3, 7, 5],
      ["C", 5, 7, 35, 30],
      ["D", 7, 10, 47, 40],
      ["E", 11, 10, 51, 40],
      ["F", 15, 20, 63, 48],
      ["G", 18, 4, 39, 21],
    ],
    total: 214,
    rerata: 30.6,
  },
  {
    title: "RR Q=3",
    headers: ["P", "TB", "LP", "SR", "LT"],
    rows: [
      ["A", 0, 9, 18, 18],
      ["B", 2, 3, 6, 4],
      ["C", 5, 7, 37, 32],
      ["D", 7, 10, 51, 44],
      ["E", 11, 10, 52, 41],
      ["F", 15, 20, 63, 48],
      ["G", 18, 4, 44, 26],
    ],
    total: 213,
    rerata: 30.4,
  },
  {
    title: "RR Q=4",
    headers: ["P", "TB", "LP", "SR", "LT"],
    rows: [
      ["A", 0, 9, 24, 24],
      ["B", 2, 3, 7, 5],
      ["C", 5, 7, 31, 26],
      ["D", 7, 10, 49, 42],
      ["E", 11, 10, 51, 40],
      ["F", 15, 20, 63, 48],
      ["G", 18, 4, 35, 17],
    ],
    total: 202,
    rerata: 28.9,
  },
  {
    title: "RR Q=5",
    headers: ["P", "TB", "LP", "SR", "LT"],
    rows: [
      ["A", 0, 9, 17, 17],
      ["B", 2, 3, 8, 6],
      ["C", 5, 7, 29, 24],
      ["D", 7, 10, 43, 36],
      ["E", 11, 10, 48, 37],
      ["F", 15, 20, 63, 48],
      ["G", 18, 4, 38, 20],
    ],
    total: 188,
    rerata: 26.9,
  },
];

export default function PenjadwalanProses() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="p-6 pt-20 min-h-screen bg-yellow-50 text-stone-800"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
        📚 Hasil Penjadwalan Proses
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {penjadwalanData.map((algo, index) => {
          const colBeforeTotal = Math.max(1, algo.headers.length - 2);

          return (
            <div
              key={index}
              className="bg-orange-100 border border-orange-300 rounded-xl p-4 shadow-md"
            >
              <h2 className="text-lg font-semibold text-center text-orange-800 mb-2">
                {algo.title}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-center border-collapse border border-orange-300">
                  <thead>
                    <tr className="bg-orange-200">
                      {algo.headers.map((h, i) => (
                        <th
                          key={i}
                          className="border border-orange-300 px-2 py-1"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {algo.rows.map((row, idx) => (
                      <tr key={idx} className="even:bg-orange-50">
                        {row.map((cell, i) => (
                          <td
                            key={i}
                            className="border border-orange-300 px-2 py-1"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    {algo.total !== undefined && (
                      <tr className="bg-orange-100 font-medium">
                        <td
                          colSpan={colBeforeTotal}
                          className="text-right px-2 py-1"
                        >
                          Total:
                        </td>
                        <td colSpan={2} className="px-2 py-1">
                          {algo.total}
                        </td>
                      </tr>
                    )}
                    {algo.rerata !== undefined && (
                      <tr className="bg-orange-100 font-medium">
                        <td
                          colSpan={colBeforeTotal}
                          className="text-right px-2 py-1"
                        >
                          Rerata:
                        </td>
                        <td colSpan={2} className="px-2 py-1">
                          {algo.rerata}
                          {algo.rerataWT !== undefined &&
                            ` | Rerata WT: ${algo.rerataWT}`}
                        </td>
                      </tr>
                    )}
                  </tfoot>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate("/Project")}
          className="bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-semibold px-4 py-2 rounded-lg transition"
        >
          ⬅️ Kembali ke Tugas
        </button>
      </div>
    </motion.div>
  );
}