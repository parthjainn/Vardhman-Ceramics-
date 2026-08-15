import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "../data";
import { handleScroll } from "../utils";
import { ArrowDown } from "lucide-react";

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[calc(100svh-90px)] mt-[90px] overflow-hidden bg-brand-charcoal">
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <img
            src={heroSlides[active].src}
            alt={heroSlides[active].alt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32 z-10">
        <div className="max-w-4xl">
          <motion.h1
            key={`title-${active}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="text-brand-white font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6"
          >
            Premium Bathware <br />
            <span className="italic text-brand-sand">& Elegance</span>
          </motion.h1>
          <motion.p
            key={`subtitle-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="text-brand-white/80 font-sans text-lg md:text-xl max-w-lg mb-10"
          >
            {heroSlides[active].alt}
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 md:left-12 right-6 md:right-12 flex justify-between items-end z-20">
        <div className="flex gap-3 items-center">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative w-12 h-[2px] overflow-hidden bg-brand-white/30"
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === active && (
                <motion.div
                  layoutId="activeSlideIndicator"
                  className="absolute inset-0 bg-brand-white"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          href="#collections"
          onClick={(e) => handleScroll(e, "collections")}
          className="flex flex-col items-center gap-2 text-brand-white/80 hover:text-brand-white transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-sans font-medium">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </motion.a>
      </div>
    </div>
  );
}
