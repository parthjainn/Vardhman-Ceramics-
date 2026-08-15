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
              className="text-brand-black font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.1] m-0"
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
            className="px-8 py-3 border border-brand-black text-brand-black font-sans font-medium text-sm hover:bg-brand-black hover:text-brand-white transition-colors duration-300 rounded-full w-full sm:w-auto text-center"
          >
            Get Directions
          </motion.a>
        </div>

        <motion.div 
          style={{ scale }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-none overflow-hidden bg-brand-white shadow-2xl z-10"
        >
          <MapContainer center={position} zoom={18} scrollWheelZoom={false} attributionControl={false} style={{ height: "100%", width: "100%", zIndex: 1 }}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
            
            {/* Primary Store Marker */}
            <Marker position={position}>
              <Tooltip permanent direction="top" offset={[0, -20]} className="primary-tooltip font-sans font-semibold text-brand-black bg-brand-white px-3 py-1.5 shadow-sm rounded border border-brand-gray/20">
                Vardhman Ceramics
              </Tooltip>
            </Marker>

            {/* Additional Landmarks */}
            <Marker position={[25.3545123, 74.6367903]} opacity={0.7}>
              <Tooltip direction="right" offset={[15, 0]} className="font-sans text-xs bg-transparent border-none shadow-none text-brand-gray font-medium">
                Mahesh School
              </Tooltip>
            </Marker>
            
            <Marker position={[25.3514508, 74.6408725]} opacity={0.7}>
              <Tooltip direction="bottom" offset={[0, 20]} className="font-sans text-xs bg-transparent border-none shadow-none text-brand-gray font-medium">
                Indian Oil
              </Tooltip>
            </Marker>
            
            <Marker position={[25.3469032, 74.639129]} opacity={0.7}>
              <Tooltip direction="left" offset={[-15, 0]} className="font-sans text-xs bg-transparent border-none shadow-none text-brand-gray font-medium">
                Seva Sadan School
              </Tooltip>
            </Marker>

            <Marker position={[25.3428267, 74.6391854]} opacity={0.7}>
              <Tooltip direction="top" offset={[0, -20]} className="font-sans text-xs bg-transparent border-none shadow-none text-brand-gray font-medium">
                City Police Station
              </Tooltip>
            </Marker>

            <Marker position={[25.3451868, 74.6417831]} opacity={0.7}>
              <Tooltip direction="right" offset={[15, 0]} className="font-sans text-xs bg-transparent border-none shadow-none text-brand-gray font-medium">
                Ravi Clinic
              </Tooltip>
            </Marker>

            <Marker position={[25.3453172, 74.6315581]} opacity={0.7}>
              <Tooltip direction="left" offset={[-15, 0]} className="font-sans text-xs bg-transparent border-none shadow-none text-brand-gray font-medium">
                Hanuman Mandir
              </Tooltip>
            </Marker>

            <Marker position={[25.3343561, 74.6423318]} opacity={0.7}>
              <Tooltip direction="bottom" offset={[0, 20]} className="font-sans text-xs bg-transparent border-none shadow-none text-brand-gray font-medium">
                Akshay Coffee House
              </Tooltip>
            </Marker>
          </MapContainer>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
          <div className="flex flex-col items-start">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-gray font-sans font-medium text-xs tracking-widest uppercase mb-4"
            >
              Contact & Location
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl text-brand-black mb-6"
            >
              Anuj Shotriya
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-gray font-sans max-w-sm mb-10 leading-relaxed"
            >
              Vardhman Ceramics<br/>
              Bhilwara, Rajasthan 311001<br/>
              India
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="tel:+919529067107"
              className="px-8 py-3 bg-brand-black text-brand-white font-sans font-medium text-sm hover:bg-brand-charcoal transition-colors duration-300 rounded-full"
            >
              Call +91 95290 67107
            </motion.a>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-gray font-sans font-medium text-xs tracking-widest uppercase mb-6"
            >
              Project Inquiry
            </motion.p>
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-transparent border-b border-brand-gray/30 py-3 px-1 text-brand-black font-sans focus:outline-none focus:border-brand-black transition-colors placeholder:text-brand-gray/60"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-brand-gray/30 py-3 px-1 text-brand-black font-sans focus:outline-none focus:border-brand-black transition-colors placeholder:text-brand-gray/60"
                />
              </div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-transparent border-b border-brand-gray/30 py-3 px-1 text-brand-black font-sans focus:outline-none focus:border-brand-black transition-colors placeholder:text-brand-gray/60"
              />
              <textarea 
                placeholder="Tell us about your project or requirements..." 
                rows="3"
                className="w-full bg-transparent border-b border-brand-gray/30 py-3 px-1 text-brand-black font-sans focus:outline-none focus:border-brand-black transition-colors placeholder:text-brand-gray/60 resize-none"
              ></textarea>
              
              <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
                <button 
                  type="button"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-brand-black text-brand-black font-sans font-medium text-sm hover:bg-brand-black hover:text-brand-white transition-colors duration-300 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  Attach Cart
                </button>
                <button 
                  type="submit"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-brand-black text-brand-white font-sans font-medium text-sm hover:bg-brand-charcoal transition-colors duration-300 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Inquiry
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
