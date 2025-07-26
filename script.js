// Floating hearts animation
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("floating-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";
    body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 400);
});

// Gallery lightbox popup
document.addEventListener("DOMContentLoaded", () => {
  const galleryDiv = document.getElementById("gallery");
  if (!galleryDiv) return;

  galleryDiv.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      openLightbox(e.target.src);
    }
  });
});

function openLightbox(imgSrc) {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.style.position = "fixed";
  lightbox.style.top = 0;
  lightbox.style.left = 0;
  lightbox.style.width = "100vw";
  lightbox.style.height = "100vh";
  lightbox.style.background = "rgba(0,0,0,0.8)";
  lightbox.style.display = "flex";
  lightbox.style.alignItems = "center";
  lightbox.style.justifyContent = "center";
  lightbox.style.cursor = "pointer";
  lightbox.style.zIndex = 2000;

  const img = document.createElement("img");
  img.src = imgSrc;
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  img.style.borderRadius = "15px";
  img.style.boxShadow = "0 0 30px #ff3366aa";

  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  lightbox.addEventListener("click", () => {
    document.body.removeChild(lightbox);
  });
}

// Music controls
document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const playPauseBtn = document.getElementById("music-play-pause");
  const volumeSlider = document.getElementById("music-volume");

  if (bgMusic) {
    bgMusic.volume = 0.3;
    bgMusic.loop = true;
    bgMusic.autoplay = true;
    bgMusic.muted = false;
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
      if (bgMusic.paused) {
        bgMusic.play();
        playPauseBtn.textContent = "⏸️";
      } else {
        bgMusic.pause();
        playPauseBtn.textContent = "▶️";
      }
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      bgMusic.volume = e.target.value;
    });
  }
});
