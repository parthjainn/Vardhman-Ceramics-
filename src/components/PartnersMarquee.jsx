import { useEffect, useRef } from "react";
import { partners } from "../data";

export function PartnersMarquee() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    let frame = 0;

    const measure = () => {
      const distance = Math.max(
        0,
        track.scrollWidth - window.innerWidth
      );

      section.style.height = `${window.innerHeight + distance}px`;
    };

    const update = () => {
      const distance = track.scrollWidth - window.innerWidth;
      const scrollableHeight = section.offsetHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const progress = -section.getBoundingClientRect().top / scrollableHeight;
      const clamped = Math.max(0, Math.min(1, progress));
      const x = -distance * clamped;

      track.style.transform = `translate3d(${x}px, 0, 0)`;
    };

    const onScroll = () => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        update();
        frame = 0;
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      measure();
      update();
    });

    resizeObserver.observe(track);

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-paper border-y border-ink/5" aria-label="Brand partners" data-reveal>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-full will-change-transform">
          {partners.map(brand => (
            <div key={brand} className="h-full shrink-0 flex items-center justify-center px-[clamp(32px,5vw,64px)] font-inter font-extrabold text-[clamp(48px,6vw,84px)] tracking-[-0.03em] text-ink/10 transition-colors duration-normal cursor-default hover:text-charcoal">
              {brand}
            </div>
          ))}
          {/* duplicate for more content to scroll */}
          {partners.map(brand => (
            <div key={brand + "-dup"} aria-hidden="true" className="h-full shrink-0 flex items-center justify-center px-[clamp(32px,5vw,64px)] font-inter font-extrabold text-[clamp(48px,6vw,84px)] tracking-[-0.03em] text-ink/10 transition-colors duration-normal cursor-default hover:text-charcoal">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
