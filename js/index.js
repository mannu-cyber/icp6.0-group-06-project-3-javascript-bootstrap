function drkLight() {
  let elem = document.body;

  elem.dataset.bsTheme = elem.dataset.bsTheme === "light" ? "dark" : "light";

  localStorage.setItem("theme", elem.dataset.bsTheme);
}
document.addEventListener("DOMContentLoaded", function () {
  let elem = document.body;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    elem.dataset.bsTheme = savedTheme;
  }
});


// function top(){
//   gsap.to(, {
//     duration: 0.5, // Animation duration in seconds
//     scrollTo: 0,   // Scroll to the top of the page
//     ease: 'power2.inOut' // Easing function for a smooth transition
//   });
// }