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

const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const body = document.body;

toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

function fullimg() {
  const imge = document.getElementById("imgelem");
  imge.style.display = "flex";
}
