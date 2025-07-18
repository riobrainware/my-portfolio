// Contoh: highlight navigasi saat scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=> {
  let fromTop = window.scrollY + window.innerHeight/3;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if(
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
