import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

const variantsMap = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  },
  rotatePop: {
    hidden: { opacity: 0, rotate: -15, scale: 0.5 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 1.2 } },
  },
  absurdWTF: {
    hidden: { opacity: 0, y: -200, rotate: 360, scale: 0 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  },
} as const;

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: keyof typeof variantsMap;
}

export default function ScrollSection({
  children,
  className = "",
  delay = 0,
  variant = "fade",
}: ScrollSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variantsMap[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
