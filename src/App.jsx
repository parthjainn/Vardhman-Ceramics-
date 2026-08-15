import { lazy, Suspense, useEffect } from "react";
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
    <div className="min-h-screen bg-brand-white selection:bg-brand-gold selection:text-white">
      <Header />
      <main id="top">
        <HeroCarousel />
        <MarqueeBand />
        <CollectionsSection />
        <LookbookSection />
        <PartnersMarquee />
      </main>
      <Suspense fallback={<div className="min-h-[180px] grid place-items-center bg-brand-sand text-brand-gray" id="store-locator">Loading map...</div>}>
        <StoreLocator />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
