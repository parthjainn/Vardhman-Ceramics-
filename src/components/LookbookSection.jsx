import { lookbookImages } from "../data";

export function LookbookSection() {
  return (
    <section className="relative py-[30px] isolate" style={{ background: "linear-gradient(90deg, rgba(29, 28, 24, 0.025) 1px, transparent 1px) 0 0 / 96px 96px, #f7f4ed" }} aria-label="Featured projects" data-reveal>
      <div className="absolute inset-[18%_-12%_12%] z-0 blur-[48px] pointer-events-none" style={{ background: "radial-gradient(circle at 22% 28%, rgba(255, 255, 255, 0.8), transparent 30%), radial-gradient(circle at 78% 44%, rgba(29, 28, 24, 0.08), transparent 34%), rgba(247, 244, 237, 0.78)" }}></div>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "linear-gradient(90deg, rgba(29, 28, 24, 0.025) 1px, transparent 1px) 0 0 / 96px 96px" }}></div>
      <div className="relative z-[1] px-[max(var(--page-pad),calc((100vw_-_1480px)_/_2))] flex flex-col gap-8 md:gap-16">
        {lookbookImages.map((src, i) => (
          <div
            key={i}
            className="w-full h-[min(80vh,760px)] rounded-[24px] overflow-hidden shadow-[0_22px_58px_rgba(38,35,31,0.08)]"
          >
            <img className="block w-full h-full object-cover" src={src} alt={`Featured project interior ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
