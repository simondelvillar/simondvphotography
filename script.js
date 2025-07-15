const imagesData = [
  {
    url: 'images/webp/DSC_0205.webp',
    title: 'Golden Hour',
    location: 'Kelowna, BC'
  },
  {
    url: 'images/webp/DSC_0206.webp',
    title: 'Buhangin',
    location: 'Kelowna, BC'
  },
  {
    url: 'images/webp/DSC_0210.webp',
    title: 'Bridge over Troubled(?) Water',
    location: 'William R. Bennett Bridge, Kelowna, BC'
  },
  {
    url: 'images/webp/DSC_0212.webp',
    title: 'Paramount',
    location: 'Kelowna, BC'
  },
  {
    url: 'images/webp/DSC_0309.webp',
    title: 'Let There Be Light',
    location: 'Knox Mountain overlooking Kelowna'
  },
  {
    url: 'images/webp/DSC_0319.webp',
    title: 'No Stopping Now',
    location: 'Knox Mountain Apex Trail'
  },
  {
    url: 'images/webp/DSC_0333.webp',
    title: 'Stone of David',
    location: 'Knox Mountain Apex Trail'
  },
  {
    url: 'images/webp/DSC_0339.webp',
    title: 'Refiners Fire',
    location: 'Knox Mountain'
  },
  {
    url: 'images/webp/DSC_0364.webp',
    title: 'Still Water',
    location: 'Pauls Tomb'
  },
  {
    url: 'images/webp/DSC_0372.webp',
    title: 'I Can Climb Anything',
    location: 'Pauls Tomb'
  },
  {
    url: './images/webp/IMG_9520.webp',
    title: 'To Find Something Real',
    location: 'Vancouver, BC'
  },
  {
    url: './images/webp/DSC_0361.webp',
    title: 'Into the Distance',
    location: 'Pauls Tomb'
  },
  {
    url: './images/webp/DSC_0250.webp',
    title: 'Rocks',
    location: 'Myra Canyon'
  },
  {
    url: './images/webp/DSC_0185.jpg',
    title: 'Locked In',
    location: 'Okanagan Freestyle Fencing'
  },
  {
    url: './images/webp/DSC_0267.jpg',
    title: 'Touche',
    location: 'Okanagan Freestyle Fencing'
  },
  {
    url: './images/webp/DSC_0294.jpg',
    title: 'Coach Luis',
    location: 'Okanagan Freestyle Fencing'
  },
  {
    url: './images/webp/DSC_0872.webp',
    title: 'Cougar',
    location: 'Automobiles and Caffeine'
  },
  {
    url: './images/webp/DSC_0895.webp',
    title: 'Subaru',
    location: 'Automobiles and Caffeine'
  },
  {
    url: './images/webp/DSC_0898.webp',
    title: 'Camaro',
    location: 'Automobiles and Caffeine'
  },
  {
    url: './images/webp/DSC_0900.webp',
    title: 'Datsun',
    location: 'Automobiles and Caffeine'
  },
  {
    url: './images/webp/DSC_0921.webp',
    title: 'Brougham Cadillac',
    location: 'Automobiles and Caffeine'
  },
  {
    url: './images/webp/DSC_0933.webp',
    title: 'Fiat',
    location: 'Automobiles and Caffeine'
  },
  {
    url: './images/webp/DSC_0935.webp',
    title: 'France Escrime',
    location: 'Okanagan Freestyle Fencing'
  },
  {
    url: './images/webp/DSC_0954.webp',
    title: 'Eric Boisse',
    location: 'Okanagan Freestyle Fencing'
  },
  {
    url: './images/webp/DSC_0956.webp',
    title: 'Fleche',
    location: 'Okanagan Freestyle Fencing'
  },
  {
    url: './images/webp/DSC_0958.webp',
    title: 'Lucas Pang',
    location: 'Okanagan Freestyle Fencing'
  },
  {
    url: './images/webp/DSC_0973.webp',
    title: 'Anthony Costantini',
    location: 'Okanagan Freestyle Fencing'
  },
  {
    url: './images/webp/DSC_0988.webp',
    title: 'Coach Eric and Anthony',
    location: 'Okanagan Freestyle Fencing'
  },
  {
    url: './images/webp/DSC_1013.webp',
    title: 'Coach Eric Lesson',
    location: 'Okanagan Freestyle Fencing'
  },
  {
    url: './images/webp/DSC_1034.webp',
    title: 'Golden Car',
    location: 'Kelowna, BC'
  },
  {
    url: './images/webp/DSC_1035.webp',
    title: 'Horizon Konbini',
    location: 'Kelowna, BC'
  },
  {
    url: './images/webp/DSC_1036.webp',
    title: 'Cool Cars',
    location: 'Automobiles and Caffeine'
  },
  {
    url: './images/webp/DSC_1039.webp',
    title: 'Nissan GT-R',
    location: 'Automobiles and Caffeine'
  },
  {
    url: './images/webp/DSC_1045.webp',
    title: 'Nissan GT-R',
    location: 'Automobiles and Caffeine'
  },
  {
    url: './images/webp/DSC_1054.webp',
    title: 'Ilford Car',
    location: 'Kelowna, BC'
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
  img.loading = 'lazy';

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


const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });