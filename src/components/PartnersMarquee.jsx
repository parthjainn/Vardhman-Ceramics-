import { useEffect, useRef, useState } from "react";
import { partners } from "../data";

export function PartnersMarquee() {
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const maxOffsetRef = useRef(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const measure = () => {
      maxOffsetRef.current = Math.max(0, track.scrollWidth - viewport.clientWidth);
      offsetRef.current = Math.min(offsetRef.current, maxOffsetRef.current);
      setOffset(offsetRef.current);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event) => {
      const maxOffset = maxOffsetRef.current;
      if (maxOffset <= 0) return;

      const currentOffset = offsetRef.current;
      const nextOffset = Math.min(Math.max(currentOffset + event.deltaY, 0), maxOffset);

      if (nextOffset !== currentOffset) {
        event.preventDefault();
        offsetRef.current = nextOffset;
        setOffset(nextOffset);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-paper border-y border-ink/5" aria-label="Brand partners" data-reveal>
      <div ref={viewportRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-full items-center will-change-transform"
          style={{
            transform: `translate3d(-${offset}px, 0, 0)`,
          }}
        >
          {partners.map((brand, index) => (
            <div 
              key={`${brand}-${index}`} 
              className="h-full shrink-0 flex items-center justify-center px-[clamp(16px,2.6vw,36px)] font-inter font-extrabold text-[clamp(44px,6vw,84px)] text-ink/10 transition-colors duration-normal cursor-default hover:text-charcoal whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
