const imagesData = [
  {
    url: 'images/DSC_0205.png',
    title: 'Golden Hour',
    location: 'Kelowna, BC'
  },
  {
    url: 'images/DSC_0206.png',
    title: 'Buhangin',
    location: 'Kelowna, BC'
  },
  {
    url: 'images/DSC_0210.png',
    title: 'Bridge over Troubled(?) Water',
    location: 'William R. Bennett Bridge, Kelowna, BC'
  },
  {
    url: 'images/DSC_0212.png',
    title: 'Paramount',
    location: 'Kelowna, BC'
  },
  {
    url: 'images/DSC_0309.png',
    title: 'Let There Be Light',
    location: 'Knox Mountain overlooking Kelowna'
  },
  {
    url: 'images/DSC_0319.png',
    title: 'No Stopping Now',
    location: 'Knox Mountain Apex Trail'
  },
  {
    url: 'images/DSC_0333.png',
    title: 'Stone of David',
    location: 'Knox Mountain Apex Trail'
  },
  {
    url: 'images/DSC_0339.png',
    title: 'Refiners Fire',
    location: 'Knox Mountain'
  },
  {
    url: 'images/DSC_0364.png',
    title: 'Still Water',
    location: 'Pauls Tomb'
  },
  {
    url: 'images/DSC_0372.png',
    title: 'I Can Climb Anything',
    location: 'Pauls Tomb'
  },
  {
    url: './images/IMG_9520.JPG',
    title: 'To Find Something Real',
    location: 'Vancouver, BC'
  },
  {
    url: './images/DSC_0361.png',
    title: 'Into the Distance',
    location: 'Pauls Tomb'
  }
];

// Shuffle function stays same
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const grid = document.getElementById('grid');
const shuffledImages = shuffle(imagesData);

shuffledImages.forEach((imgData, index) => {
  const div = document.createElement('div');
  div.classList.add('photo', 'hidden');

  const img = document.createElement('img');
  img.src = imgData.url;
  img.alt = imgData.title;
  img.setAttribute('data-title', imgData.title);
  img.setAttribute('data-location', imgData.location);

  div.appendChild(img);
  grid.appendChild(div);
});

// Scroll reveal observer (same as before)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

setTimeout(() => {
  document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
}, 50);

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxLocation = document.getElementById('lightbox-location');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxLink = document.getElementById('lightbox-link');


// Open lightbox when clicking an image
grid.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName === 'IMG' && target.parentElement.classList.contains('photo')) {
    lightboxImg.src = target.src;
    lightboxImg.alt = target.alt;
    lightboxTitle.textContent = target.getAttribute('data-title') || '';
    lightboxLocation.textContent = target.getAttribute('data-location') || '';
    lightbox.classList.add('show');
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }
});

// Close lightbox on close button
lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('show');
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
});

// Close lightbox on click outside content
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightboxClose.click();
  }
});

// Optional: close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('show')) {
    lightboxClose.click();
  }
});
