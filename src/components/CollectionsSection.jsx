import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { categories } from "../data";
import { handleScroll } from "../utils";
import { ArrowRight } from "lucide-react";

export function CollectionsSection() {
  const targetRef = useRef(null);
  
  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal translation
  // We use negative values to move the flex container to the left
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section 
      ref={targetRef} 
      className="relative h-[300vh] bg-brand-sand" 
      id="collections"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-[90px]">
        <div className="px-6 md:px-12 max-w-[1600px] w-full mx-auto mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 flex-shrink-0">
          <div className="max-w-2xl">
            <span className="text-brand-gray font-sans font-medium uppercase tracking-widest text-sm mb-4 block">
              Curated Collections
            </span>
            <h2 className="text-brand-black font-serif text-4xl md:text-6xl leading-[1.1] m-0">
              Find the best bathware, taps, and fittings for your beautiful home.
            </h2>
          </div>
          
          <a
            href="#store-locator"
            onClick={(e) => handleScroll(e, "store-locator")}
            className="group flex items-center gap-3 text-brand-black font-sans font-medium text-sm pb-1 border-b border-brand-black transition-colors"
          >
            Explore all ranges
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="pl-6 md:pl-12 w-full">
          <motion.div 
            style={{ x }} 
            className="flex gap-6 md:gap-10 pb-12 pt-4 pr-6 md:pr-12 w-max"
          >
            {categories.map(([name, detail, image, slug], index) => (
              <a
                key={name}
                href={`/${slug}`}
                className="relative group block h-[45vh] md:h-[60vh] min-h-[400px] w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] flex-shrink-0 overflow-hidden bg-brand-charcoal text-brand-white"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover origin-center opacity-80 transition-transform duration-1000 group-hover:scale-105"
                  src={image}
                  alt={`${name} products`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute left-6 right-6 bottom-8 md:left-10 md:right-10 md:bottom-10 z-10">
                  <h3 className="font-serif text-3xl md:text-4xl mb-3 tracking-wide">{name}</h3>
                  <p className="font-sans text-brand-sand text-sm md:text-base leading-relaxed line-clamp-3 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {detail}
                  </p>
                  <div className="w-12 h-[1px] bg-brand-gold origin-left transition-all duration-500 group-hover:w-full" />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
