import { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
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
    const elements = document.querySelectorAll(".store-locator [data-reveal]");

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
    <section className="store-locator" id="store-locator">
      <div className="locator-inner">
        <div className="locator-header" data-reveal="copy">
          <h2>Visit the showroom</h2>
          <a className="primary-link" href={storeMapUrl} target="_blank" rel="noreferrer">
            Open in Google Maps <span aria-hidden="true" className="arrow">→</span>
          </a>
        </div>

        <div className="locator-map" data-reveal="image">
          <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: "100%", width: "100%", zIndex: 1 }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position} />
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
