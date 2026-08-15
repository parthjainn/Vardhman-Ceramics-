import { motion } from "framer-motion";
import { BrandLogo } from "./BrandLogo";
import { handleScroll } from "../utils";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-32 pb-12 px-6 md:px-12 text-brand-white border-t border-brand-gray/20">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
        
        <div className="md:col-span-5 flex flex-col items-start">
          <a className="group inline-flex items-center gap-4 no-underline mb-8" href="#top" onClick={(e) => handleScroll(e, "top")}>
            <div className="w-10 h-10 text-brand-white">
              <BrandLogo light />
            </div>
            <span className="font-serif font-semibold text-2xl tracking-wide text-brand-white">
              Vardhman Ceramics
            </span>
          </a>
          <p className="font-sans text-brand-gray max-w-sm mb-8 leading-relaxed">
            Curating exceptional bathware experiences with a focus on material purity and elegant design.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-sans font-medium text-brand-white mb-6 uppercase tracking-widest text-xs">Explore</h4>
          <ul className="flex flex-col gap-4">
            {["Collections", "Projects", "Partners"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="font-sans text-brand-gray hover:text-brand-gold transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 flex flex-col items-start md:items-end">
          <h4 className="font-sans font-medium text-brand-white mb-6 uppercase tracking-widest text-xs">Stay Connected</h4>
          <a href="mailto:contact@vardhmanceramics.com" className="font-serif text-2xl md:text-3xl hover:text-brand-gold transition-colors duration-300 mb-2">
            contact@vardhmanceramics.com
          </a>
          <a href="tel:+919876543210" className="font-sans text-brand-gray hover:text-brand-white transition-colors duration-300">
            +91 98765 43210
          </a>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-brand-white/10">
        <p className="font-sans text-brand-gray text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Vardhman Ceramics. All rights reserved.
        </p>
        <button 
          onClick={(e) => handleScroll(e, "top")}
          className="group flex items-center gap-3 font-sans text-brand-gray text-xs tracking-widest uppercase hover:text-brand-white transition-colors duration-300"
        >
          Back to top
          <span className="w-8 h-8 rounded-full border border-brand-gray/30 flex items-center justify-center group-hover:border-brand-white transition-colors">
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </span>
        </button>
      </div>
    </footer>
  );
}
