import { useState, useEffect } from "react";
import { heroSlides } from "../data";
import { handleScroll } from "../utils";

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-charcoal" data-reveal="image">
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(29, 28, 24, 0.65)), linear-gradient(90deg, rgba(29, 28, 24, 0.15), transparent 50%)" }}></div>
      {heroSlides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full block object-cover object-center saturate-[0.78] contrast-[1.04] transition-[opacity,transform] ease-[cubic-bezier(0.16,1,0.3,1)] duration-[1.2s,7s] will-change-[opacity,transform] ${i === active ? "opacity-100 scale-100 z-0" : "opacity-0 scale-[1.06]"}`}
          style={{ transitionProperty: "opacity, transform", transitionDuration: i === active ? "1.2s, 7s" : "1.2s, 0s" }}
        />
      ))}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-[2] flex items-center gap-[18px]">
        <div className="flex gap-2 items-center">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full border-[1.5px] p-0 cursor-pointer transition-all duration-normal ${i === active ? "bg-porcelain border-porcelain scale-[1.15]" : "border-porcelain/70 bg-transparent hover:border-porcelain hover:scale-[1.3] active:scale-90"}`}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <a className="group flex items-center gap-2 text-porcelain font-dm-mono font-medium text-[13px] leading-none tracking-[0.1em] uppercase no-underline opacity-85 transition-all duration-normal hover:opacity-100 hover:gap-3 active:scale-95" href="#collections" onClick={(e) => handleScroll(e, "collections")}>
          Explore <span aria-hidden="true" className="transition-transform duration-normal">→</span>
        </a>
      </div>
    </div>
  );
}
