import { useEffect, useRef, useState } from "react";
import { partners } from "../data";

export function PartnersMarquee() {
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const offsetRef = useRef(0);
  const maxOffsetRef = useRef(0);
  const [offset, setOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!container || !viewport || !track) return;

    const updateActiveItem = (nextOffset) => {
      const viewportCenter = nextOffset + viewport.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const applyOffset = (nextOffset) => {
      offsetRef.current = nextOffset;
      setOffset(nextOffset);
      updateActiveItem(nextOffset);
    };

    const handleWheel = (event) => {
      const maxOffset = maxOffsetRef.current;
      if (maxOffset <= 0) return;

      const rect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const bandIsActive = rect.top <= viewportCenter && rect.bottom >= viewportCenter;
      if (!bandIsActive) return;

      const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      const currentOffset = offsetRef.current;
      const nextOffset = Math.min(Math.max(currentOffset + delta, 0), maxOffset);

      if (nextOffset !== currentOffset) {
        event.preventDefault();
        applyOffset(nextOffset);
      }
    };

    const measure = () => {
      maxOffsetRef.current = Math.max(0, track.scrollWidth - viewport.clientWidth);
      applyOffset(Math.min(offsetRef.current, maxOffsetRef.current));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-paper border-y border-ink/5"
      aria-label="Brand partners"
      data-reveal
    >
      <div ref={viewportRef} className="h-[clamp(104px,18svh,172px)] overflow-hidden">
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
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              className={`h-full shrink-0 flex items-center justify-center px-[clamp(16px,2.6vw,36px)] font-inter font-extrabold text-[clamp(44px,6vw,84px)] transition-colors duration-normal cursor-default hover:text-charcoal whitespace-nowrap ${
                activeIndex === index ? "text-charcoal" : "text-ink/10"
              }`}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
