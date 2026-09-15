// ===============================
// CHANGE THIS DATE TO YOUR REAL DATE
// Example: "2025-06-14T20:00:00"
// ===============================
const startDate = new Date("2026-09-10T20:00:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCounter() {
  const now = new Date();
  const diff = Math.max(0, now - startDate);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = days.toLocaleString();
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);

// Reveal elements when they enter the viewport
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Floating hearts
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.innerHTML = Math.random() > 0.35 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 22) + "px";
  heart.style.animationDuration = (6 + Math.random() * 7) + "s";
  heart.style.animationDelay = Math.random() * 2 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 700);

// Sparkles
const sparklesContainer = document.getElementById("sparkles-container");

for (let i = 0; i < 45; i++) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * 100 + "%";
  sparkle.style.top = Math.random() * 100 + "%";
  sparkle.style.animationDelay = Math.random() * 2 + "s";
  sparkle.style.opacity = Math.random();
  sparklesContainer.appendChild(sparkle);
}

// Love modal
const loveButton = document.getElementById("loveButton");
const closeModal = document.getElementById("closeModal");
const loveModal = document.getElementById("loveModal");
const modalBackdrop = document.getElementById("modalBackdrop");

function openLoveModal() {
  loveModal.classList.add("active");
  modalBackdrop.classList.add("active");

  // Burst of hearts
  for (let i = 0; i < 25; i++) {
    setTimeout(createHeart, i * 45);
  }
}

function closeLoveModal() {
  loveModal.classList.remove("active");
  modalBackdrop.classList.remove("active");
}

loveButton.addEventListener("click", openLoveModal);
closeModal.addEventListener("click", closeLoveModal);
modalBackdrop.addEventListener("click", closeLoveModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLoveModal();
});

// Smoothly close Bootstrap mobile menu after clicking a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navMenu");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
