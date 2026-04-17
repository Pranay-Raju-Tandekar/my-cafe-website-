/* ============================================================
   PLACE BAKEHOUSE & COFFEE — JavaScript
   ============================================================ */

/* ---------- NAV SCROLL ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---------- MOBILE MENU ---------- */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ---------- MENU DATA ---------- */
const menuData = {
  coffee: [
    {
      name: 'Signature Espresso',
      desc: 'Rich, bold, and perfectly extracted — our house espresso is the soul of every cup.',
      price: '₹120',
      img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80'
    },
    {
      name: 'Velvet Latte',
      desc: 'Silky steamed milk meets our single-origin espresso in a beautifully balanced cup.',
      price: '₹160',
      img: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&q=80'
    },
    {
      name: 'Cold Brew Reserve',
      desc: 'Steeped for 18 hours, served over ice — smooth, dark, and deeply satisfying.',
      price: '₹180',
      img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80'
    },
    {
      name: 'Honey Oat Cappuccino',
      desc: 'Creamy oat milk, a drizzle of wildflower honey, and our finest espresso blend.',
      price: '₹190',
      img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80'
    }
  ],
  bakery: [
    {
      name: 'Butter Croissant',
      desc: 'Flaky, golden, and impossibly buttery — baked fresh every morning before sunrise.',
      price: '₹90',
      img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80'
    },
    {
      name: 'Sourdough Loaf',
      desc: 'Long-fermented, hand-shaped, and baked in a stone oven for a perfect crust.',
      price: '₹220',
      img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80'
    },
    {
      name: 'Cinnamon Roll',
      desc: 'Soft, pillowy dough swirled with cinnamon sugar and finished with cream cheese glaze.',
      price: '₹130',
      img: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80'
    },
    {
      name: 'Almond Danish',
      desc: 'Laminated pastry filled with almond cream and topped with toasted flaked almonds.',
      price: '₹140',
      img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80'
    }
  ],
  desserts: [
    {
      name: 'Belgian Waffle',
      desc: 'Crisp on the outside, fluffy within — served with seasonal fruit and whipped cream.',
      price: '₹200',
      img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80'
    },
    {
      name: 'Dark Chocolate Tart',
      desc: 'A buttery shell filled with intense 70% dark chocolate ganache. Pure indulgence.',
      price: '₹180',
      img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80'
    },
    {
      name: 'Tiramisu',
      desc: 'Classic Italian layers of espresso-soaked ladyfingers and mascarpone cream.',
      price: '₹210',
      img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80'
    },
    {
      name: 'Mango Cheesecake',
      desc: 'Creamy no-bake cheesecake with a fresh Alphonso mango topping on a biscuit base.',
      price: '₹190',
      img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80'
    }
  ],
  snacks: [
    {
      name: 'Avocado Toast',
      desc: 'Smashed avocado on sourdough with chilli flakes, lemon zest, and microgreens.',
      price: '₹220',
      img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&q=80'
    },
    {
      name: 'Grilled Panini',
      desc: 'Pressed ciabatta with mozzarella, sun-dried tomatoes, and fresh basil pesto.',
      price: '₹240',
      img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80'
    },
    {
      name: 'Granola Bowl',
      desc: 'House-made granola with Greek yoghurt, seasonal berries, and a honey drizzle.',
      price: '₹170',
      img: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&q=80'
    },
    {
      name: 'Cheese Bruschetta',
      desc: 'Toasted baguette slices with ricotta, cherry tomatoes, and fresh herbs.',
      price: '₹160',
      img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80'
    }
  ]
};

/* ---------- RENDER MENU ---------- */
const menuGrid = document.getElementById('menuGrid');
const tabs = document.querySelectorAll('.tab');

function renderMenu(cat) {
  menuGrid.innerHTML = '';
  menuData[cat].forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu__card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="menu__card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="menu__card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <span class="menu__card-price">${item.price}</span>
      </div>
    `;
    menuGrid.appendChild(card);
    // stagger fade-in
    requestAnimationFrame(() => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity .4s ${i * 0.08}s ease, transform .4s ${i * 0.08}s ease`;
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.cat);
  });
});

renderMenu('coffee');

/* ---------- SCROLL REVEAL ---------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ---------- GALLERY LIGHTBOX ---------- */
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbClose  = document.getElementById('lbClose');

document.querySelectorAll('.gallery__item').forEach(item => {
  item.addEventListener('click', () => {
    lbImg.src = item.dataset.src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lbImg.src = '';
}

lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* ---------- TESTIMONIAL SLIDER ---------- */
const slider    = document.getElementById('testiSlider');
const dotsWrap  = document.getElementById('testiDots');
const cards     = slider.querySelectorAll('.testi__card');
let current     = 0;
let autoTimer;

function getVisible() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function buildDots() {
  dotsWrap.innerHTML = '';
  const total = Math.ceil(cards.length / getVisible());
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'testi__dot' + (i === current ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  }
}

function goTo(idx) {
  const visible = getVisible();
  const total   = Math.ceil(cards.length / visible);
  current = (idx + total) % total;
  const cardWidth = cards[0].offsetWidth + 28; // gap
  slider.style.transform = `translateX(-${current * visible * cardWidth}px)`;
  dotsWrap.querySelectorAll('.testi__dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
}

function autoPlay() {
  autoTimer = setInterval(() => {
    const total = Math.ceil(cards.length / getVisible());
    goTo((current + 1) % total);
  }, 4000);
}

buildDots();
autoPlay();

slider.addEventListener('mouseenter', () => clearInterval(autoTimer));
slider.addEventListener('mouseleave', autoPlay);
window.addEventListener('resize', () => { buildDots(); goTo(0); });

/* ---------- CONTACT FORM ---------- */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    form.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
    formSuccess.classList.add('show');
    setTimeout(() => formSuccess.classList.remove('show'), 4000);
  }, 1200);
});

/* ---------- SMOOTH ANCHOR SCROLL ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
