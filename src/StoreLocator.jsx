import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { motion, useScroll, useTransform } from "framer-motion";
import "leaflet/dist/leaflet.css";

import * as L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const storeMapUrl = "https://maps.app.goo.gl/snXwvCcB71F3LsRC6";
const position = [25.3517862, 74.6390341];

export default function StoreLocator() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="py-32 bg-brand-sand overflow-hidden" id="store-locator">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-brand-gray font-sans font-medium uppercase tracking-widest text-sm mb-4 block"
            >
              Our Showroom
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-brand-black font-serif text-4xl md:text-6xl leading-[1.1] m-0"
            >
              Experience elegance in person.
            </motion.h2>
          </div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href={storeMapUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-brand-black text-brand-black font-sans font-medium text-sm hover:bg-brand-black hover:text-brand-white transition-colors duration-300 rounded-full"
          >
            Get Directions
          </motion.a>
        </div>

        <motion.div 
          style={{ scale }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-none overflow-hidden bg-brand-white shadow-2xl z-10"
        >
          <MapContainer center={position} zoom={18} scrollWheelZoom={false} attributionControl={false} style={{ height: "100%", width: "100%", zIndex: 1 }}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
            <Marker position={position}>
              <Tooltip permanent direction="top" offset={[0, -20]} className="primary-tooltip font-sans font-medium">
                Vardhman Ceramics
              </Tooltip>
            </Marker>
          </MapContainer>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-gray font-sans font-medium text-xs tracking-widest uppercase mb-4"
            >
              Contact
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-brand-black"
            >
              Anuj Shotriya
            </motion.h3>
          </div>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="tel:+919529067107"
            className="px-8 py-3 bg-brand-black text-brand-white font-sans font-medium text-sm hover:bg-brand-charcoal transition-colors duration-300 rounded-full"
          >
            Call +91 95290 67107
          </motion.a>
        </div>
      </div>
    </section>
  );
}
