// Surprise button: balloons, confetti, and music unmute
document.getElementById("surpriseBtn").addEventListener("click", () => {
  document.getElementById("bgMusic").muted = false;

  // Balloons
  for (let i = 0; i < 20; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.background = getRandomPurple();
    document.getElementById("balloons").appendChild(balloon);
    setTimeout(() => balloon.remove(), 6000);
  }

  // Confetti
  for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti-piece";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.background = getRandomPurple();
    document.getElementById("confetti").appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
});

function getRandomPurple() {
  const colors = ["#6a0dad", "#8e24aa", "#9c27b0", "#ba68c8", "#b19cd9"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Name shift
const nameMessage = document.getElementById("nameMessage");
let toggle = true;
setInterval(() => {
  nameMessage.textContent = toggle ? "Panda" : "Dalia Dhar";
  toggle = !toggle;
}, 3000);

// Slideshow
const images = ["image/photo1.jpg", "image/photo2.jpg", "image/photo3.jpg"];
const messages = [
  "You are my sunshine 🌸",
  "My forever Panda 🐼",
  "You make my world brighter 💜",
  "Every day with you is magic ✨"
];

let index = 0;
const slideshowImage = document.getElementById("slideshowImage");
const slideshowMessage = document.getElementById("slideshowMessage");

setInterval(() => {
  index = (index + 1) % images.length;
  slideshowImage.src = images[index];
  slideshowMessage.textContent = messages[index % messages.length];
}, 4000);const images = ["image/photo1.jpg", "image/photo2.jpg", "image/photo3.jpg"];

