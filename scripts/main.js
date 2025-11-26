const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('nav ul');
const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"], nav a[href="uploads/cv.pdf"]'));

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((lnk) => lnk.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  {
    rootMargin: '-80px 0px -60% 0px',
  }
);

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    navLinks.forEach((lnk) => lnk.classList.remove('active'));
    navLinks[navLinks.length - 1].classList.add('active');
  }
});

sections.forEach((section) => observer.observe(section));

document.querySelector('#year').textContent = new Date().getFullYear();

const themeButtons = document.querySelectorAll('.theme-toggle');
const root = document.documentElement;
const STORAGE_KEY = 'preferred-theme';

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  root.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
  themeButtons.forEach((btn) => {
    const label = btn.querySelector('.theme-label');
    if (label) label.textContent = theme === 'dark' ? 'Dark' : 'Light';
  });
};

const preferredTheme = () => {
  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (e) {}
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

let currentTheme = preferredTheme();
applyTheme(currentTheme);

themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    try {
      localStorage.setItem(STORAGE_KEY, currentTheme);
    } catch (e) {}
  });
});

// Publication media upgrader: swap to <video> when data-media-type="video".
document.querySelectorAll('.pub-item').forEach((card) => {
  const type = card.dataset.mediaType;
  if (type !== 'video') return;
  const src = card.dataset.mediaSrc;
  const poster = card.dataset.poster;
  if (!src) return;
  const container = card.querySelector('.pub-figure');
  if (!container) return;
  container.innerHTML = '';
  const video = document.createElement('video');
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.src = src;
  if (poster) video.poster = poster;
  container.appendChild(video);
});
