import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full px-6 py-4 bg-orange-100 text-orange-900 border-t border-orange-300 shadow-inner text-center"
    >
      <p className="text-sm sm:text-base font-medium">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold text-orange-700">The Grand Library</span>. All rights reserved.
      </p>
      <p className="mt-1 text-xs sm:text-sm italic text-orange-800">
        Crafted with lore by <span className="font-semibold">M Setra Satria Imbara - The Knight ✨📜</span>
      </p>
    </motion.footer>
  );
}

export default Footer;
