document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "76px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px 5vw";
  nav.style.background = "rgba(7,7,7,.97)";
  nav.style.flexDirection = "column";
  nav.style.borderBottom = "1px solid #292929";
});

const rows = document.querySelectorAll(".anime-row");
rows.forEach(row => {
  row.addEventListener("mouseenter", () => row.style.transform = "translateX(5px)");
  row.addEventListener("mouseleave", () => row.style.transform = "");
});
