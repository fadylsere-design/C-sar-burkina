// script.js
function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

// Exemple : animation sur les boutons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});

// script.js
function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

// Exemple : animation sur les boutons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});


function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}



function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

