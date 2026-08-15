import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { handleScroll } from "../utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0, filter: "blur(10px)" }}
        animate={{ 
          y: [-50, -15, 0], 
          opacity: [0, 0.6, 1], 
          filter: ["blur(10px)", "blur(4px)", "blur(0px)"] 
        }}
        transition={{ 
          duration: 1.6, 
          times: [0, 0.5, 1], 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 h-[90px] bg-brand-white backdrop-blur-md shadow-sm border-b border-brand-gray/10`}
      >
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="group flex items-center gap-3 no-underline" 
          href="#top" 
          onClick={(e) => handleScroll(e, "top")}
        >
          <div className="w-8 h-8 text-brand-black">
            <BrandLogo />
          </div>
          <span className="font-serif font-semibold text-xl tracking-wide text-brand-black">
            Vardhman Ceramics
          </span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {["Collections", "Projects", "Partners"].map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + (index * 0.1), ease: "easeOut" }}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className="text-sm font-sans font-medium text-brand-gray hover:text-brand-black transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            href="#store-locator"
            onClick={(e) => handleScroll(e, "store-locator")}
            className="group flex items-center gap-2 text-sm font-sans font-medium bg-brand-black text-brand-white px-5 py-2.5 rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            Visit Us
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:hidden text-brand-black p-2 -mr-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-brand-white p-6 md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-serif font-semibold text-xl tracking-wide text-brand-black">
                Menu
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 -mr-2 text-brand-black">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-serif">
              {["Collections", "Projects", "Partners", "Store Locator"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={(e) => {
                    handleScroll(e, item.toLowerCase().replace(" ", "-"));
                    setMobileMenuOpen(false);
                  }}
                  className="text-brand-black border-b border-brand-gray/20 pb-4"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
