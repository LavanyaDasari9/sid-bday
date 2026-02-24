// Birthday Date
const birthdayDate = new Date('February 25, 2026 00:00:00').getTime();

// DOM Elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const bgMusic = document.getElementById('bg-music');
const slideshowContainer = document.getElementById('slideshow-container');

// Countdown Timer
function updateCountdown() {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerText = days.toString().padStart(2, '0');
  hoursEl.innerText = hours.toString().padStart(2, '0');
  minutesEl.innerText = minutes.toString().padStart(2, '0');
  secondsEl.innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(timerInterval);
    document.querySelector('.hero h1').innerHTML = "HAPPY BIRTHDAY <br><span>RASMALI</span>";
    document.querySelector('.hero p').innerText = "Let the adventures begin!";
    document.querySelector('.countdown-container').style.display = 'none';
  }
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Music Management
let isPlaying = false;
function startMusic() {
  if (!isPlaying && bgMusic) {
    bgMusic.play().then(() => {
      isPlaying = true;
    }).catch(e => console.error("Autoplay prevented:", e));
  }
}

// Start music on interaction
document.addEventListener('click', startMusic, { once: true });
document.addEventListener('touchstart', startMusic, { once: true });

// Image Collage
const images = [
  '/img1.jpeg', '/img2.jpeg', '/img3.jpeg', '/img4.jpeg',
  '/img5.jpeg', '/img6.jpeg', '/img7.jpeg', '/img8.jpeg',
  '/img9.jpeg', '/img10.jpeg', '/img11.jpeg', '/img12.jpeg',
  '/img13.jpeg', '/img14.jpeg', '/img15.jpeg'
];

function initCollage() {
  if (!slideshowContainer) return;
  slideshowContainer.innerHTML = '';

  if (images.length === 0) {
    slideshowContainer.style.background = 'linear-gradient(45deg, #0f172a, #1e1b4b)';
    return;
  }

  // Create many items to fill the screen
  const totalItems = 45; // Increased density
  for (let i = 0; i < totalItems; i++) {
    const item = document.createElement('div');
    item.className = 'collage-item';
    const randomImage = images[Math.floor(Math.random() * images.length)];
    item.style.backgroundImage = `url("${randomImage}")`;
    slideshowContainer.appendChild(item);
  }
}

initCollage();
window.addEventListener('resize', initCollage);
