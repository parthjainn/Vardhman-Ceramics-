import { motion } from "framer-motion";
import { lookbookImages } from "../data";

const ease = [0.25, 0.1, 0.25, 1];

export function LookbookSection() {
  return (
    <section className="py-20 md:py-32 bg-brand-white relative overflow-hidden" id="projects">
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto relative mb-12 md:mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="text-brand-gray font-sans font-medium uppercase tracking-widest text-sm mb-4 block"
        >
          Previous Projects
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-brand-black font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-tight"
        >
          Spaces transformed by exceptional detail.
        </motion.h2>
      </div>

      <div className="px-6 md:px-12 max-w-[1600px] mx-auto relative flex flex-col gap-6 md:gap-10">
        {lookbookImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="w-full overflow-hidden rounded-[15px]"
          >
            <img
              className="w-full aspect-video object-cover"
              src={src.replace("w=800", "w=1600")}
              alt={`Project ${i + 1}`}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
