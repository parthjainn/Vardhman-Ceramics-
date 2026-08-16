import { motion } from "framer-motion";
import { categories } from "../data";
import { handleScroll } from "../utils";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1];

const labelVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease } },
};

const linkVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3, ease } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease },
  }),
};


export function CollectionsSection() {
  return (
    <section
      className="relative bg-brand-sand py-16 md:py-24"
      id="collections"
    >
      <div className="px-6 md:px-12 max-w-[1600px] w-full mx-auto mb-10 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-5 md:gap-6">
        <div className="max-w-2xl">
          <motion.span
            variants={labelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-80px" }}
            className="text-brand-gray font-sans font-medium uppercase tracking-widest text-sm mb-4 block"
          >
            Curated Collections
          </motion.span>
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-80px" }}
            className="text-brand-black font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] m-0"
          >
            Find the best bathware, taps, and fittings for your beautiful home.
          </motion.h2>
        </div>
        
        <motion.a
          variants={linkVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-80px" }}
          href="#store-locator"
          onClick={(e) => handleScroll(e, "store-locator")}
          className="group flex items-center gap-2 md:gap-3 text-brand-black font-sans font-medium text-sm pb-1 border-b border-brand-black transition-colors mt-4 md:mt-0"
        >
          Explore all ranges
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
      
      <div className="px-6 md:px-12 max-w-[1600px] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(([name, detail, image, slug], index) => (
            <motion.a
              key={name}
              href={`/${slug}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-60px" }}
              className="relative group flex aspect-[3/2] md:aspect-[4/5] flex-shrink-0 items-end overflow-hidden rounded-[15px] bg-brand-charcoal p-5 md:p-8 text-brand-white"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover origin-center opacity-80 transition-transform duration-1000 group-hover:scale-105"
                src={image}
                alt={`${name} products`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-brand-white/10 backdrop-blur-sm border border-brand-white/20 text-brand-white transition-all duration-500 ease-out group-hover:-rotate-45 group-hover:bg-brand-white group-hover:text-brand-black">
                <ArrowRight size={20} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 w-full">
                <h3 className="font-serif text-xl md:text-3xl mb-0 tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-1">{name}</h3>
                <p className="font-sans text-brand-sand text-xs sm:text-sm leading-relaxed line-clamp-2 max-h-0 opacity-0 translate-y-3 overflow-hidden mb-0 transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0 group-hover:mt-2 group-hover:mb-4">
                  {detail}
                </p>
                <div className="w-full h-[1px] bg-brand-gold origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
