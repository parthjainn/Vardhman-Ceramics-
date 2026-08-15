import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { categories } from "../data";
import { handleScroll } from "../utils";
import { ArrowRight } from "lucide-react";

export function CollectionsSection() {
  const targetRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(null);
  
  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const updateTrackBounds = () => {
      if (!viewportRef.current || !trackRef.current) return;

      const viewportStyle = window.getComputedStyle(viewportRef.current);
      const viewportPaddingLeft = parseFloat(viewportStyle.paddingLeft) || 0;
      const viewportWidth = viewportRef.current.clientWidth - viewportPaddingLeft;
      const trackWidth = trackRef.current.scrollWidth;
      const nextMaxTranslate = Math.min(0, viewportWidth - trackWidth);
      const stickyHeight = window.innerHeight;

      setMaxTranslate(nextMaxTranslate);
      setSectionHeight(Math.max(window.innerHeight * 1.1, stickyHeight + Math.abs(nextMaxTranslate)));
    };

    updateTrackBounds();

    const resizeObserver = new ResizeObserver(updateTrackBounds);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    if (trackRef.current) resizeObserver.observe(trackRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, maxTranslate]);

  return (
    <section
      ref={targetRef}
      style={{ height: sectionHeight ? `${sectionHeight}px` : "110svh" }}
      className="relative bg-brand-sand"
      id="collections"
    >
      <div className="sticky top-0 h-svh flex flex-col justify-start overflow-hidden pt-[108px] pb-8 md:pt-[120px] md:pb-10">
        <div className="px-6 md:px-12 max-w-[1600px] w-full mx-auto mb-6 md:mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-5 md:gap-8 flex-shrink-0">
          <div className="max-w-2xl">
            <span className="text-brand-gray font-sans font-medium uppercase tracking-widest text-sm mb-4 block">
              Curated Collections
            </span>
            <h2 className="text-brand-black font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] m-0">
              Find the best bathware, taps, and fittings for your beautiful home.
            </h2>
          </div>
          
          <a
            href="#store-locator"
            onClick={(e) => handleScroll(e, "store-locator")}
            className="group flex items-center gap-2 md:gap-3 text-brand-black font-sans font-medium text-sm pb-1 border-b border-brand-black transition-colors mt-4 md:mt-0"
          >
            Explore all ranges
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <div ref={viewportRef} className="pl-6 md:pl-12 w-full">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 md:gap-10 pb-6 pt-2 pr-6 md:pr-12 w-max"
          >
            {categories.map(([name, detail, image, slug]) => (
              <a
                key={name}
                href={`/${slug}`}
                className="relative group flex aspect-square w-[min(78vw,46svh)] sm:w-[min(52vw,46svh)] md:w-[min(34vw,46svh)] lg:w-[min(26vw,46svh)] max-w-[520px] flex-shrink-0 items-end overflow-hidden bg-brand-charcoal p-6 text-brand-white md:p-10"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover origin-center opacity-80 transition-transform duration-1000 group-hover:scale-105"
                  src={image}
                  alt={`${name} products`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent pointer-events-none" />
                
                <div className="relative z-10 w-full">
                  <h3 className="font-serif text-2xl md:text-4xl mb-0 tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-1">{name}</h3>
                  <p className="font-sans text-brand-sand text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 max-h-0 opacity-0 translate-y-3 overflow-hidden mb-0 transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0 group-hover:mt-3 group-hover:mb-6">
                    {detail}
                  </p>
                  <div className="w-12 h-[1px] bg-brand-gold origin-left transition-all duration-500 md:w-0 md:group-hover:w-full" />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
