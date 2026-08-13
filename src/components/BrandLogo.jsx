import logo from "../assets/logo.png";

export function BrandLogo({ light = false }) {
  return (
    <img
      className={`w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] block rounded-full object-cover bg-transparent shadow-none transition-transform duration-normal group-hover:rotate-[15deg] group-hover:scale-105 ${light ? "filter-none" : ""}`}
      src={logo}
      alt="Vardhman Ceramics"
    />
  );
}
