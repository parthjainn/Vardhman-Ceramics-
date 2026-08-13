import { lazy, Suspense, useEffect, useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

const StoreLocator = lazy(() => import("./StoreLocator.jsx"));

const handleScroll = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/";
  }
};

const hero =
  "https://hindware.com/_next/image?q=75&url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2Fe912638b-45cf-462f-bf92-858820800535.jpeg&w=1920";
const basin =
  "https://hindware.com/_next/image?q=75&url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2Fa12ba249-d6c4-47c6-a895-ed17468f1b24.jpeg&w=1920";

const categories = [
  ["Bathware", "Curated sanitaryware, vanities, and daily-use bathroom essentials.", hero, "bathware"],
  ["Taps", "Architectural fittings with restrained silhouettes and dependable finish.", basin, "taps"],
  [
    "Pipes",
    "Concealed infrastructure selected for strength, consistency, and service life.",
    "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=85",
    "pipes",
  ],
  [
    "Kitchen",
    "Functional sinks and fixtures for clean, durable kitchen planning.",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    "kitchen",
  ],
  [
    "Wash Basins",
    "Countertop and wall-hung forms for compact and statement bathrooms.",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    "wash-basins",
  ],
  [
    "Accessories",
    "Precise finishing pieces that make a bathroom feel complete.",
    "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1000&q=85",
    "accessories",
  ],
];





function BrandLogo({ light = false }) {
  return (
    <img
      className={light ? "brand-logo light-logo" : "brand-logo"}
      src={logo}
      alt="Vardhman Ceramics"
    />
  );
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">→</span>;
}

function Header() {
  return (
    <>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Vardhman Ceramics home" onClick={(e) => handleScroll(e, "top")}>
          <BrandLogo />
          <span className="brand-name">Vardhman Ceramics</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#collections" onClick={(e) => handleScroll(e, "collections")}>Collections</a>
          <a href="#store-locator" onClick={(e) => handleScroll(e, "store-locator")}>Visit</a>
        </nav>
        <a className="header-cta" href="#store-locator" onClick={(e) => handleScroll(e, "store-locator")}>
          Plan visit <Arrow />
        </a>
      </header>
    </>
  );
}

function useRevealMotion() {
  useEffect(() => {
    const animated = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      animated.forEach((element) => element.classList.add("is-visible"));
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    animated.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function SubnichePage({ category }) {
  const [name, detail, image] = category;

  return (
    <main className="subniche-page">
      <Header />
      <section className="subniche-hero" data-reveal>
        <img src={image} alt={`${name} collection at Vardhman Ceramics`} data-reveal="image" />
        <div data-reveal="copy">
          <p className="kicker">Collection</p>
          <h1>{name}</h1>
          <p>{detail}</p>
          <a className="text-link" href="/">
            Back to home <Arrow />
          </a>
        </div>
      </section>
    </main>
  );
}

const heroSlides = [
  { src: hero, alt: "Premium bathroom sanitaryware display" },
  { src: basin, alt: "Designer wash basin collection" },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1920&q=85",
    alt: "Modern bathroom interior design",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85",
    alt: "Contemporary kitchen fixtures",
  },
];

function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-media" data-reveal="image">
      {heroSlides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className={`carousel-slide ${i === active ? "carousel-slide--active" : ""}`}
        />
      ))}
      <div className="carousel-bottom">
        <div className="carousel-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === active ? "carousel-dot--active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <a className="carousel-explore" href="#collections" onClick={(e) => handleScroll(e, "collections")}>
          Explore <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

function App() {
  useRevealMotion();
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const activeSubniche = categories.find(([, , , slug]) =>
    window.location.pathname.endsWith(`/subniches/${slug}`),
  );

  if (activeSubniche) {
    return <SubnichePage category={activeSubniche} />;
  }

  return (
    <div className="page">
      <Header />
      <main id="top">
        <section className="hero" aria-label="Hero carousel" data-reveal>
          <HeroCarousel />
        </section>

        <section className="marquee-band" aria-label="Store strengths" data-reveal>
          <span>Material guidance</span>
          <span>Local service</span>
          <span>Premium sanitaryware</span>
          <span>Finish coordination</span>
        </section>

        <section className="collections" id="collections">
          <div className="section-head" data-reveal>
            <p className="kicker">Explore the range</p>
            <h2>Start with the room, then select every detail with discipline.</h2>
            <a className="text-link" href="#store-locator" onClick={(e) => handleScroll(e, "store-locator")}>
              Talk to the studio <Arrow />
            </a>
          </div>
          <div className="category-grid">
            {categories.map(([name, detail, image, slug], index) => (
              <a
                href={`/subniches/${slug}`}
                className="category"
                key={name}
                data-reveal="image"
                style={{ "--reveal-delay": `${index * 70}ms` }}
              >
                <img src={image} alt={`${name} products`} />
                <div className="category-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="category-copy">
                  <h3>{name}</h3>
                  <p>{detail}</p>
                  <span>View collection <Arrow /></span>
                </div>
              </a>
            ))}
          </div>
        </section>




      </main>
      <Suspense fallback={<div className="store-locator-loading" id="store-locator">Loading store locator...</div>}>
        <StoreLocator />
      </Suspense>
      <footer>
        <div className="footer-content">
          <a className="logo" href="#top" aria-label="Back to Vardhman Ceramics top" onClick={(e) => handleScroll(e, "top")}>
            <BrandLogo light />
            <span className="brand-name footer-brand">Vardhman Ceramics</span>
          </a>
          <div className="copyright">© Vardhman Ceramics. All rights reserved.</div>
          <a href="#top" className="back" onClick={(e) => handleScroll(e, "top")}>Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
