import { BrandLogo } from "./BrandLogo";
import { handleScroll } from "../utils";

export function Footer() {
  return (
    <footer className="px-page-pad py-[30px] bg-charcoal text-porcelain">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 flex-wrap">
        <a className="group inline-flex items-center min-w-0 no-underline" href="#top" aria-label="Back to Vardhman Ceramics top" onClick={(e) => handleScroll(e, "top")}>
          <BrandLogo light />
          <span className="ml-3 text-porcelain font-inter font-bold text-[clamp(18px,1.6vw,22px)] leading-none whitespace-normal sm:whitespace-nowrap">
            Vardhman<br className="block sm:hidden" /> Ceramics
          </span>
        </a>
        <div className="text-porcelain/48 font-dm-mono font-medium text-[11px] leading-[1.4] tracking-[0.08em] uppercase">© Vardhman Ceramics. All rights reserved.</div>
        <a href="#top" className="self-end sm:self-auto group inline-flex items-center gap-2.5 text-porcelain/85 pb-1 relative font-inter text-[13px] font-bold no-underline transition-all duration-normal active:scale-95" onClick={(e) => handleScroll(e, "top")}>
          Back to top <span aria-hidden="true">↑</span>
          <span className="absolute bottom-0 left-0 w-full h-px bg-current origin-right scale-x-100 transition-transform duration-normal group-hover:origin-left group-hover:scale-x-0"></span>
        </a>
      </div>
    </footer>
  );
}
