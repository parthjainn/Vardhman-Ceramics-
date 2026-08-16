import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ProductCard({ title, image, price, label, company }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative flex flex-col bg-brand-white rounded-[15px] shadow-[0_12px_24px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-500 cursor-pointer border border-brand-black/5"
    >
      {/* 3-Sided "Border/Frame" like Style 5: Padding on Top, Left, Right */}
      <div className="px-2 pt-2">
        {/* The image container has a thin stroke on 3 sides */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[13px] border-t border-l border-r border-brand-black/10">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-[1s] ease-[0.25,0.1,0.25,1] group-hover:scale-105"
          />
          {label && (
            <div className="absolute top-3 left-3 bg-brand-black text-brand-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-[6px] shadow-md">
              {label}
            </div>
          )}
        </div>
      </div>

      {/* Split bottom section like Style 4 (flush with the image, no padding on sides) */}
      <div className="relative bg-brand-sand flex flex-col justify-center px-6 py-6 rounded-b-[15px]">
        
        {/* Chunky split button positioned perfectly on the dividing line */}
        <div className="absolute right-6 -top-6 bg-brand-black text-brand-white w-12 h-12 rounded-[12px] flex items-center justify-center shadow-lg group-hover:bg-brand-gold group-hover:text-brand-black transition-colors duration-300 z-10">
          <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </div>

        <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-charcoal/60 mb-1">
          {company || "Vardhman Ceramics"}
        </p>
        <h3 className="font-serif text-xl md:text-2xl text-brand-black leading-tight truncate pr-12">
          {title}
        </h3>
        {price && (
          <p className="font-sans text-brand-charcoal font-medium text-sm mt-2">
            {price}
          </p>
        )}
      </div>
    </motion.div>
  );
}
