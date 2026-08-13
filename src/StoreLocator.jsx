import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon in leaflet with bundlers
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
  useEffect(() => {
    const elements = document.querySelectorAll("#store-locator [data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[30px] px-page-pad scroll-mt-[92px]" style={{ background: "linear-gradient(135deg, rgba(29, 28, 24, 0.06) 0 1px, transparent 1px) 0 0 / 28px 28px, #e7e0d2" }} id="store-locator">
      <div className="flex flex-col gap-[clamp(24px,4vw,42px)]">
        <div className="flex justify-between items-end flex-wrap gap-6" data-reveal="copy">
          <h2 className="m-0 text-ink max-w-[700px] text-[clamp(44px,4.6vw,74px)] font-playfair font-semibold leading-[0.98] tracking-normal">Visit the showroom</h2>
          <a className="group inline-flex items-center gap-3 min-h-[46px] px-5 bg-transparent text-charcoal border border-ink/25 rounded origin-center text-[13px] font-bold no-underline transition-all duration-normal hover:bg-charcoal hover:text-porcelain hover:border-charcoal hover:-translate-y-0.5 active:translate-y-[1px] active:scale-95" href={storeMapUrl} target="_blank" rel="noreferrer">
            Open in Google Maps <span aria-hidden="true" className="transition-transform duration-normal group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="relative w-full aspect-[21/9] min-h-[360px] sm:min-h-[430px] lg:min-h-[620px] overflow-hidden bg-porcelain shadow-[0_22px_58px_rgba(38,35,31,0.12)] rounded-[24px] isolate translate-z-0 mask-radial" data-reveal="image">
          <div className="absolute inset-4 z-[1] pointer-events-none border border-porcelain/55 rounded-xl"></div>
          <MapContainer center={position} zoom={18} scrollWheelZoom={false} attributionControl={false} style={{ height: "100%", width: "100%", minHeight: "inherit", zIndex: 1, border: 0, borderRadius: "inherit" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <Marker position={position}>
              <Tooltip permanent direction="top" offset={[0, -20]} className="primary-tooltip">
                Vardhman Ceramics
              </Tooltip>
            </Marker>


          </MapContainer>
        </div>

        <div className="flex justify-between items-end flex-wrap gap-6 mt-3" data-reveal="copy">
          <div>
            <p className="m-[0_0_18px] text-muted font-dm-mono font-medium text-[11px] leading-[1.4] tracking-[0.12em] uppercase">Contact</p>
            <h3 className="m-0 text-[clamp(28px,3vw,36px)] font-playfair font-semibold text-ink">
              Anuj Shotriya
            </h3>
          </div>
          <a className="group inline-flex items-center gap-3 min-h-[46px] px-5 bg-transparent text-charcoal border border-ink/25 rounded origin-center text-[13px] font-bold no-underline transition-all duration-normal hover:bg-charcoal hover:text-porcelain hover:border-charcoal hover:-translate-y-0.5 active:translate-y-[1px] active:scale-95" href="tel:+919529067107">
            Call +91 95290 67107
          </a>
        </div>
      </div>
    </section>
  );
}
