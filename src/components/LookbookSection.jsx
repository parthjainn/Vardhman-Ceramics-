import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { lookbookImages } from "../data";

export function LookbookSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={sectionRef} className="py-32 bg-brand-white relative overflow-hidden" id="projects">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50" style={{ background: "linear-gradient(90deg, rgba(142, 141, 138, 0.05) 1px, transparent 1px) 0 0 / 120px 120px" }} />
      
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto relative z-10 mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-brand-gray font-sans font-medium uppercase tracking-widest text-sm mb-4 block"
        >
          Previous Projects
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-brand-black font-serif text-3xl sm:text-4xl md:text-6xl max-w-3xl mx-auto leading-tight"
        >
          Spaces transformed by exceptional detail.
        </motion.h2>
      </div>

      <div className="px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col gap-8 md:gap-16 mt-0 md:mt-24">
            {lookbookImages.filter((_, i) => i % 2 === 0).map((src, i) => (
              <motion.div
                style={{ y: y1 }}
                key={i}
                className="w-full h-[60vh] md:h-[80vh] overflow-hidden"
              >
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover" 
                  src={src} 
                  alt={`Project ${i * 2 + 1}`} 
                />
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col gap-8 md:gap-16">
            {lookbookImages.filter((_, i) => i % 2 !== 0).map((src, i) => (
              <motion.div
                style={{ y: y2 }}
                key={i}
                className="w-full h-[60vh] md:h-[80vh] overflow-hidden"
              >
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover" 
                  src={src} 
                  alt={`Project ${i * 2 + 2}`} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
