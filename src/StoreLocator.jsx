const storeMapUrl = "https://maps.app.goo.gl/snXwvCcB71F3LsRC6";
const storeMapEmbedUrl =
  "https://www.google.com/maps?q=25.3517862,74.6390341&z=17&output=embed";

export default function StoreLocator() {
  return (
    <section className="store-locator" id="store-locator">
      <div className="store-locator-copy">
        <p className="kicker">VISIT US</p>
        <h2>Locate a store</h2>
        <p>Find Vardhman Ceramics on Google Maps and plan your visit.</p>
        <a href={storeMapUrl} target="_blank" rel="noreferrer">Open in Google Maps <b>→</b></a>
      </div>
      <iframe title="Vardhman Ceramics store location" src={storeMapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
    </section>
  );
}
