import { motion } from "framer-motion";
import { Header } from "./Header";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { products } from "../products";

export function SubnichePage({ category }) {
  const [name, detail, image, slug] = category;

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
            <h1 className="m-0 text-brand-black font-serif font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
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

      {products.filter(p => p.categorySlug === slug).length > 0 && (
        <section className="py-24 px-6 md:px-16 bg-brand-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 text-brand-gray font-sans font-medium text-xs tracking-[0.15em] uppercase"
                >
                  Curated Selection
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="m-0 text-brand-black font-serif font-semibold text-3xl md:text-5xl tracking-tight"
                >
                  Featured Products
                </motion.h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {products
                .filter((p) => p.categorySlug === slug)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.name}
                    image={product.image}
                    company={product.company}
                  />
                ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
