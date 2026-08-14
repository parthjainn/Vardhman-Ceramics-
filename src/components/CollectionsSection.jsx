import { useEffect, useRef } from "react";
import { categories } from "../data";
import { handleScroll } from "../utils";
import { Arrow } from "./Arrow";

export function CollectionsSection() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleWheel = (e) => {
      // Don't intercept if user is explicitly scrolling horizontally (e.g., trackpad)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      
      if (maxScrollLeft > 0) {
        // If scrolling down and not at the end
        if (e.deltaY > 0 && Math.ceil(track.scrollLeft) < maxScrollLeft) {
          e.preventDefault();
          track.scrollLeft += e.deltaY;
        }
        // If scrolling up and not at the start
        else if (e.deltaY < 0 && track.scrollLeft > 0) {
          e.preventDefault();
          track.scrollLeft += e.deltaY;
        }
      }
    };

    // Need non-passive listener to be able to preventDefault
    track.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      track.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="relative py-[30px]" id="collections">
      <div className="pl-[max(var(--page-pad),calc((100vw_-_1480px)_/_2))]">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,760px)_auto] gap-7 items-start mb-[30px] pr-[max(var(--page-pad),calc((100vw_-_1480px)_/_2))] mt-[30px]" data-reveal>
          <p className="col-span-full mb-[-10px] text-muted font-dm-mono font-medium text-[11px] leading-[1.4] tracking-[0.12em] uppercase m-0">Explore the range</p>
          <h2 className="max-w-[790px] text-[clamp(40px,4.4vw,64px)] m-0 text-ink font-playfair font-semibold leading-[0.98] tracking-normal">Find the best bathware, taps, and fittings for your beautiful home.</h2>
          <a className="group justify-self-start md:justify-self-end mt-2 inline-flex items-center gap-2.5 text-charcoal pb-1 relative font-inter text-[13px] font-bold no-underline transition-all duration-normal active:scale-95" href="#store-locator" onClick={(e) => handleScroll(e, "store-locator")}>
            Talk to the studio <Arrow />
            <span className="absolute bottom-0 left-0 w-full h-px bg-current origin-right scale-x-100 transition-transform duration-normal group-hover:origin-left group-hover:scale-x-0"></span>
          </a>
        </div>
        
        <div 
          className="flex gap-6 overflow-x-auto pb-8 pt-4 pr-[max(var(--page-pad),calc((100vw_-_1480px)_/_2))] scrollbar-hide snap-x snap-mandatory" 
          ref={trackRef}
        >
          {categories.map(([name, detail, image, slug]) => (
            <a
              key={name}
              href={`/${slug}`}
              className="relative block h-[60vh] min-h-[400px] max-h-[600px] w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[calc((100vw_-_max(var(--page-pad),calc((100vw_-_1480px)_/_2)))_/_2.5_-_16px)] flex-shrink-0 snap-center rounded-[20px] overflow-hidden no-underline text-porcelain cursor-pointer transition-shadow duration-normal"
            >
              <img className="absolute inset-0 w-full h-full object-cover saturate-[0.7] contrast-[1.06] scale-[1.01] transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-[1.6s]" src={image} alt={`${name} products`} />
              <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(29, 28, 24, 0.02) 0%, rgba(29, 28, 24, 0.72) 100%), linear-gradient(90deg, rgba(29, 28, 24, 0.3) 0%, transparent 50%)" }} />
              <div className="absolute left-[clamp(24px,3vw,48px)] right-[clamp(24px,3vw,48px)] bottom-[clamp(24px,3vw,48px)] z-[2]">
                <h3 className="m-0 font-playfair font-semibold text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.01em]">{name}</h3>
                <p className="max-w-[440px] mt-3 mb-0 text-porcelain/78 text-[clamp(13px,1.2vw,15px)] leading-[1.6] line-clamp-3">{detail}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
