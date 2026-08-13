import { Header } from "./Header";
import { Arrow } from "./Arrow";

export function SubnichePage({ category }) {
  const [name, detail, image] = category;

  return (
    <main className="min-h-screen pt-[68px] sm:pt-nav-height">
      <Header />
      <section className="min-h-[calc(100svh-68px)] sm:min-h-[calc(100svh-var(--nav-height))] sm:h-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] bg-stone" data-reveal>
        <img className="w-full h-full min-h-[360px] md:min-h-0 object-cover saturate-[0.7] contrast-[1.05]" src={image} alt={`${name} collection at Vardhman Ceramics`} data-reveal="image" />
        <div className="self-center p-[42px_var(--page-pad)_58px] sm:p-[clamp(42px,8vw,118px)]" data-reveal="copy">
          <p className="mb-[18px] text-muted font-dm-mono font-medium text-[11px] leading-[1.4] tracking-[0.12em] uppercase m-0">Collection</p>
          <h1 className="m-0 text-ink font-playfair font-semibold text-[clamp(52px,6vw,88px)] leading-[0.98] tracking-normal">{name}</h1>
          <p className="max-w-[430px] my-6 sm:mb-8 text-muted text-base leading-[1.7]">{detail}</p>
          <a className="group inline-flex items-center gap-2.5 text-charcoal pb-1 relative font-inter text-[13px] font-bold no-underline transition-all duration-normal active:scale-95" href="/">
            Back to home <Arrow />
            <span className="absolute bottom-0 left-0 w-full h-px bg-current origin-right scale-x-100 transition-transform duration-normal group-hover:origin-left group-hover:scale-x-0"></span>
          </a>
        </div>
      </section>
    </main>
  );
}
