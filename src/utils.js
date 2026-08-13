export const handleScroll = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/";
  }
};
