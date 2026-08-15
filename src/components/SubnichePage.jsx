import { motion } from "framer-motion";
import { Header } from "./Header";
import { ArrowLeft } from "lucide-react";

export function SubnichePage({ category }) {
  const [name, detail, image] = category;

  return (
    <main className="min-h-screen bg-brand-white selection:bg-brand-gold selection:text-white">
      <Header />
      <section className="min-h-screen pt-[70px] md:pt-[90px] grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="relative h-[50vh] lg:h-full w-full overflow-hidden order-2 lg:order-1"
        >
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            src={image} 
            alt={`${name} collection at Vardhman Ceramics`} 
          />
          <div className="absolute inset-0 bg-brand-charcoal/10 mix-blend-multiply" />
        </motion.div>
        
        <div className="flex flex-col justify-center px-6 md:px-16 py-16 lg:py-24 order-1 lg:order-2 bg-brand-sand">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="mb-4 text-brand-gray font-sans font-medium text-xs tracking-[0.15em] uppercase">
              Collection
            </p>
            <h1 className="m-0 text-brand-black font-serif font-semibold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
              {name}
            </h1>
            <p className="max-w-md my-8 md:my-10 text-brand-black/70 font-sans text-base md:text-lg leading-relaxed">
              {detail}
            </p>
            <a 
              className="group inline-flex items-center gap-3 text-brand-black pb-2 border-b border-brand-black/20 hover:border-brand-black transition-colors duration-300 font-sans text-sm font-medium" 
              href="/"
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Return Home
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
