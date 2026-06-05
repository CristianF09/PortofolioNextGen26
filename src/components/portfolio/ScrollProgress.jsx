import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleY: scrollYProgress }}
      className="fixed right-0 top-0 bottom-0 w-[2px] bg-primary origin-top z-50"
    />
  );
}