import { useState } from "react";
import "./App.css";

const hero =
  "https://hindware.com/_next/image?q=75&url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2Fe912638b-45cf-462f-bf92-858820800535.jpeg&w=1920";
const basin =
  "https://hindware.com/_next/image?q=75&url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2Fa12ba249-d6c4-47c6-a895-ed17468f1b24.jpeg&w=1920";

const categories = [
  ["Water Closets", "Comfortable, efficient toileting solutions", hero],
  ["Wash Basins", "Stylish, functional essentials for every bathroom", basin],
  [
    "Bath Tubs",
    "Stylish comfort & relaxation for your bathroom retreat",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Urinals",
    "Hygienic, water-efficient commercial solutions",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Cisterns & Flushing Valves",
    "Powerful flushing with water efficiency",
    "https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Accessories",
    "The perfect sanitaryware add-ons",
    "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=900&q=85",
  ],
];

const faqs = [
  [
    "What types of sanitaryware products are available?",
    "At Hindware, we offer an extensive collection of premium-quality sanitaryware products. From water closets to wash basins, and cisterns to urinals, you can find almost everything here.",
  ],
  [
    "What are sanitaryware products?",
    "Sanitaryware products are fittings and fixtures designed to ensure hygiene and sanitation in bathrooms and restrooms. This includes toilets, washbasins, bathtubs, urinals, and more.",
  ],
  [
    "How to choose a sanitaryware brand?",
    "Choose a brand known for product quality and post-purchase service. Compare the size, style, design, and material options that suit your requirements.",
  ],
  [
    "What is luxury sanitaryware?",
    "Luxury sanitaryware combines premium quality, visual appeal, and effortless functionality to enhance the overall look of your bathroom.",
  ],
];

function App() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <div className="page">
      <div className="topbar">
        <span>INDIA'S LEADING BATHROOM SOLUTIONS BRAND</span>
        <span>•</span>
        <span>For assistance call 1800 103 7575</span>
        <span className="toplinks">
          Store Locator &nbsp;&nbsp; | &nbsp;&nbsp; Contact Us
        </span>
      </div>
      <header>
        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          <i />
          <i />
        </button>
        <a className="logo" href="#top">
          hindware<span>®</span>
        </a>
        <nav className={menu ? "open" : ""}>
          <a href="#categories">Bathware</a>
          <a href="#categories">Tiles & Surfaces</a>
          <a href="#categories">Kitchen</a>
          <a href="#categories">Appliances</a>
          <a href="#smart">Smart Products</a>
        </nav>
        <div className="tools">
          <button aria-label="Search">⌕</button>
          <button aria-label="Account">♙</button>
          <button aria-label="Cart">
            Bag <sup>0</sup>
          </button>
        </div>
      </header>
      <main id="top">
        <div className="crumb">
          Home <span>/</span> Bathware <span>/</span> Sanitaryware
        </div>
        <section className="intro">
          <div>
            <p className="kicker">BATHWARE</p>
            <h1>Sanitaryware</h1>
            <p className="lede">
              Elegant, durable solutions for every bathroom
            </p>
          </div>
          <p className="intro-copy">
            Discover thoughtfully designed sanitaryware that pairs contemporary
            aesthetics with exceptional comfort and lasting performance.
          </p>
        </section>
        <section className="hero">
          <img src={hero} alt="Hindware sanitaryware" />
          <div className="hero-shade" />
          <div className="hero-copy">
            <p>
              Make every space
              <br />a statement
            </p>
            <a href="#categories">
              Explore collection <b>→</b>
            </a>
          </div>
        </section>
        <section className="collections" id="categories">
          <div className="section-head">
            <div>
              <p className="kicker">EXPLORE THE RANGE</p>
              <h2>
                Designed for the
                <br />
                <em>everyday ritual.</em>
              </h2>
            </div>
            <a href="#categories">
              View all products <b>→</b>
            </a>
          </div>
          <div className="category-grid">
            {categories.map(([name, detail, image], i) => (
              <a href="#faqs" className={"category c" + i} key={name}>
                <img src={image} alt="" />
                <div>
                  <h3>{name}</h3>
                  <p>{detail}</p>
                  <span>
                    Explore <b>→</b>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section className="statement" id="smart">
          <div>
            <p className="kicker">HINDWARE SANITARYWARE</p>
            <h2>
              Where design
              <br />
              meets <em>wellbeing.</em>
            </h2>
            <p>
              Every product is made to bring a sense of ease, beauty, and
              enduring quality to your bathroom.
            </p>
            <a href="#faqs">
              Discover Hindware <b>→</b>
            </a>
          </div>
          <div className="statement-art">
            <img src={basin} alt="Designer wash basin" />
          </div>
        </section>
        <section className="faq" id="faqs">
          <p className="kicker">NEED TO KNOW</p>
          <h2>Sanitaryware FAQs</h2>
          <p className="faq-lede">
            Got questions? We've already got answers. It's like we can hear you
            thinking.
          </p>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <div
                className={"faq-item " + (openFaq === i ? "active" : "")}
                key={q}
              >
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {q}
                  <span>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <a className="logo light" href="#top">
            hindware<span>®</span>
          </a>
          <p>Creating beautiful, functional spaces since 1960.</p>
          <a href="#top" className="back">
            Back to top ↑
          </a>
        </div>
        <div className="footer-cols">
          <div>
            <b>EXPLORE</b>
            <a>Bathware</a>
            <a>Tiles & Surfaces</a>
            <a>Kitchen Appliances</a>
          </div>
          <div>
            <b>ABOUT HINDWARE</b>
            <a>About the Company</a>
            <a>Store Locator</a>
            <a>Contact Us</a>
          </div>
          <div>
            <b>STAY UPDATED</b>
            <p>Be the first to know about the latest collections.</p>
            <div className="email">
              Email address <span>→</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          © Hindware Limited. All Rights Reserved.{" "}
          <span>Privacy Policy &nbsp; Terms of Use</span>
        </div>
      </footer>
    </div>
  );
}
export default App;
