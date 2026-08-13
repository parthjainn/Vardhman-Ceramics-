import { lazy, Suspense, useEffect } from "react";


import { useRevealMotion } from "./hooks";
import { categories } from "./data";
import { Header } from "./components/Header";
import { HeroCarousel } from "./components/HeroCarousel";
import { MarqueeBand } from "./components/MarqueeBand";
import { CollectionsSection } from "./components/CollectionsSection";
import { LookbookSection } from "./components/LookbookSection";
import { PartnersMarquee } from "./components/PartnersMarquee";
import { Footer } from "./components/Footer";
import { SubnichePage } from "./components/SubnichePage";

const StoreLocator = lazy(() => import("./StoreLocator.jsx"));

function App() {
  useRevealMotion();

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const activeSubniche = categories.find(([, , , slug]) =>
    window.location.pathname === `/${slug}` || window.location.pathname === `/items/${slug}`,
  );

  if (window.location.pathname !== "/" && !activeSubniche) {
    window.location.replace("/");
    return null;
  }

  if (activeSubniche) {
    return <SubnichePage category={activeSubniche} />;
  }

  return (
    <div className="min-h-screen pt-[68px] sm:pt-nav-height">
      <Header />
      <main id="top">
        <section className="relative w-full h-[calc(100svh-68px)] sm:h-[calc(100svh-var(--nav-height))] overflow-hidden" aria-label="Hero carousel" data-reveal>
          <HeroCarousel />
        </section>

        <MarqueeBand />
        <CollectionsSection />
        <LookbookSection />
        <PartnersMarquee />
      </main>
      <Suspense fallback={<div className="min-h-[180px] grid place-items-center bg-stone text-muted" id="store-locator">Loading store locator...</div>}>
        <StoreLocator />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
