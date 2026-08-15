import { motion } from "framer-motion";
import { partners } from "../data";

export function PartnersMarquee() {
  return (
    <section className="py-24 bg-brand-charcoal overflow-hidden flex flex-col justify-center" id="partners">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-brand-gray font-sans font-medium uppercase tracking-widest text-sm block"
        >
          Trusted Partners
        </motion.span>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-charcoal to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-charcoal to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center"
        >
          {[...partners, ...partners].map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="px-12 md:px-20 font-display font-light text-3xl md:text-5xl text-brand-white/40 hover:text-brand-white transition-colors duration-500 cursor-default"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
