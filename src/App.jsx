import { lazy, Suspense, useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

const StoreLocator = lazy(() => import("./StoreLocator.jsx"));

const hero =
  "https://hindware.com/_next/image?q=75&url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2Fe912638b-45cf-462f-bf92-858820800535.jpeg&w=1920";
const basin =
  "https://hindware.com/_next/image?q=75&url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2Fa12ba249-d6c4-47c6-a895-ed17468f1b24.jpeg&w=1920";

const categories = [
  ["Bathware", "Complete bathroom solutions for every home", hero, "bathware"],
  ["Taps", "Modern taps that blend design with reliability", basin, "taps"],
  ["Pipes", "Durable plumbing solutions built to last", "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85", "pipes"],
  ["Kitchen", "Functional and refined solutions for your kitchen", "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85", "kitchen"],
  ["Wash Basins", "Stylish, functional essentials for every bathroom", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85", "wash-basins"],
  ["Accessories", "The perfect finishing touches for your space", "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=900&q=85", "accessories"],
];

const faqs = [
  ["What types of sanitaryware products are available?", "At Vardhman Ceramics, we offer an extensive collection of premium-quality sanitaryware products. From water closets to wash basins, and cisterns to urinals, you can find almost everything here."],
  ["What are sanitaryware products?", "Sanitaryware products are fittings and fixtures designed to ensure hygiene and sanitation in bathrooms and restrooms. This includes toilets, washbasins, bathtubs, urinals, and more."],
  ["How to choose a sanitaryware brand?", "Choose a brand known for product quality and post-purchase service. Compare the size, style, design, and material options that suit your requirements."],
  ["What is luxury sanitaryware?", "Luxury sanitaryware combines premium quality, visual appeal, and effortless functionality to enhance the overall look of your bathroom."],
];

function BrandLogo({ light = false }) {
  return <img className={light ? "brand-logo light-logo" : "brand-logo"} src={logo} alt="Vardhman Ceramics" />;
}

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const activeSubniche = categories.find(([, , , slug]) =>
    window.location.pathname.endsWith(`/subniches/${slug}`),
  );

  if (activeSubniche) {
    const [name, detail, image] = activeSubniche;
    return <main className="subniche-page"><header><a className="logo" href="/"><BrandLogo /><span className="brand-name">Vardhman Ceramics</span></a></header><section className="subniche-hero"><img src={image} alt="" /><div><p className="kicker">VARDHMAN CERAMICS</p><h1>{name}</h1><p>{detail}</p><a href="/">← Back to home</a></div></section></main>;
  }

  return <div className="page">
    <div className="topbar"><span>PREMIUM BATHROOM SOLUTIONS</span><span>&bull;</span><span>For assistance call 9529067107 Anuj Shotriya</span><span className="toplinks"><a href="#store-locator">Store Locator</a> &nbsp; | &nbsp; Contact Us</span></div>
    <header>
      <a className="logo" href="#top"><BrandLogo /><span className="brand-name">Vardhman Ceramics</span></a>
      <div className="tools"><button aria-label="Search">⌕</button><button aria-label="Cart">Bag <sup>0</sup></button></div>
    </header>
    <main id="top">
      <section className="hero"><img src={hero} alt="Vardhman Ceramics sanitaryware" /><div className="hero-shade" /><div className="hero-copy"><p>Make every space<br />a statement</p><a href="#categories">Explore collection <b>→</b></a></div></section>
      <section className="collections" id="categories"><div className="section-head"><div><p className="kicker">EXPLORE THE RANGE</p><h2>Designed for the<br /><em>everyday ritual.</em></h2></div><a href="#categories">View all products <b>→</b></a></div><div className="category-grid">{categories.map(([name, detail, image, slug], i) => <a href={`/subniches/${slug}`} className={`category c${i}`} key={name}><img src={image} alt="" /><div><h3>{name}</h3><p>{detail}</p><span>Explore <b>→</b></span></div></a>)}</div></section>
      <section className="faq" id="faqs"><p className="kicker">NEED TO KNOW</p><h2>Sanitaryware FAQs</h2><p className="faq-lede">Got questions? We've already got answers. It's like we can hear you thinking.</p><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? "active" : ""}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>{q}<span>{openFaq === i ? "−" : "+"}</span></button>{openFaq === i && <p>{a}</p>}</div>)}</div></section>
    </main>
    <Suspense fallback={<div className="store-locator-loading" id="store-locator">Loading store locator…</div>}><StoreLocator /></Suspense>
    <footer><div className="footer-top"><a className="logo" href="#top"><BrandLogo light /></a><p>Vardhman Ceramics</p><a href="#top" className="back">Back to top ↑</a></div><div className="footer-links"><a href="#store-locator">Store Locator</a><a href="https://maps.app.goo.gl/snXwvCcB71F3LsRC6" target="_blank" rel="noreferrer">Open in Google Maps</a><a href="tel:9529067107">Call Anuj Shotriya: 9529067107</a></div><div className="copyright">© Vardhman Ceramics. All Rights Reserved.</div></footer>
  </div>;
}

export default App;
