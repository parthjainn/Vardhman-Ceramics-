import { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { Arrow } from "./Arrow";
import { handleScroll } from "../utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-20 flex items-center px-page-pad border-b border-ink/10 backdrop-blur-[18px] transition-all duration-normal ${scrolled ? "h-[68px] sm:h-nav-height bg-paper/90 shadow-[0_4px_32px_rgba(29,28,24,0.06)] gap-3 sm:gap-8" : "h-[68px] sm:h-nav-height bg-paper/60 gap-3 sm:gap-8"}`}>
        <a className="group inline-flex items-center min-w-0 no-underline" href="#top" aria-label="Vardhman Ceramics home" onClick={(e) => handleScroll(e, "top")}>
          <BrandLogo />
          <span className="ml-3 text-charcoal font-inter font-bold text-[clamp(18px,1.6vw,22px)] leading-none whitespace-normal sm:whitespace-nowrap">
            Vardhman<br className="block sm:hidden" /> Ceramics
          </span>
        </a>
        <a className="group ml-auto inline-flex items-center gap-2 sm:gap-3 min-h-[40px] sm:min-h-[46px] px-3 sm:px-5 bg-transparent text-charcoal border border-ink/25 rounded origin-center transition-all duration-normal hover:bg-charcoal hover:text-porcelain hover:border-charcoal hover:-translate-y-0.5 active:translate-y-[1px] active:scale-95 text-xs sm:text-[13px] font-bold no-underline" href="#store-locator" onClick={(e) => handleScroll(e, "store-locator")}>
          Plan visit <Arrow />
        </a>
      </header>
    </>
  );
}
