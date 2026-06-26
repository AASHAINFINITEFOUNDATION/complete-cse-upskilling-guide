const dropdowns = document.querySelectorAll(".dropdown-btn");
dropdowns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("show");
  });
});
