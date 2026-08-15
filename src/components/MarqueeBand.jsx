import { motion } from "framer-motion";

export function MarqueeBand() {
  const items = ["Material guidance", "Local service", "Premium sanitaryware", "Finish coordination"];

  return (
    <section className="bg-brand-sand py-12 border-b border-brand-charcoal/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
            <span className="text-brand-gray font-sans font-medium text-xs md:text-sm uppercase tracking-[0.2em] group-hover:text-brand-black transition-colors duration-300">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
