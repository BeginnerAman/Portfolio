// ============================================================
// Developer Portfolio - Main JavaScript
// ============================================================

// ── Project Data ─────────────────────────────────────────────
const projectsData = [
  // ─── FEATURED / FLAGSHIP PROJECT ───
  {
    name: 'A-Drop — Offline File Sharing',
    category: 'utility',
    icon: 'share-2',
    description: 'Ultra-fast, 100% offline local file sharing between Windows PC & Mobile via Wi-Fi Hotspot & USB Tethering. AirDrop alternative for Windows.',
    language: 'JavaScript',
    liveUrl: 'https://beginneraman.github.io/a-drop/',
    repoUrl: 'https://github.com/BeginnerAman/a-drop'
  },

  // ─── Chat & Messaging Apps ───
  {
    name: 'Group Messaging Platform',
    category: 'chat',
    icon: 'users',
    description: 'Collaborative group messaging app for team communication',
    language: 'JavaScript',
    liveUrl: 'https://beginneraman.github.io/group-messaging-platform/',
    repoUrl: 'https://github.com/BeginnerAman/group-messaging-platform'
  },

  // ─── Games & Fun ───
  {
    name: 'Roast & Reveal',
    category: 'game',
    icon: 'flame',
    description: 'Fun roasting game that reveals hilarious facts about your friends',
    language: 'JavaScript',
    liveUrl: 'https://beginneraman.github.io/roast-and-reveal/',
    repoUrl: 'https://github.com/BeginnerAman/roast-and-reveal'
  },
  {
    name: 'Roast & Guess',
    category: 'game',
    icon: 'target',
    description: 'Interactive guessing game with roast-style challenges',
    language: 'HTML',
    liveUrl: 'https://beginneraman.github.io/roast-and-guess/',
    repoUrl: 'https://github.com/BeginnerAman/roast-and-guess'
  },
  {
    name: 'Party Roast Multiplayer',
    category: 'game',
    icon: 'party-popper',
    description: 'Multiplayer party game with roasting rounds for group fun',
    language: 'JavaScript',
    liveUrl: 'https://beginneraman.github.io/party-roast-multiplayer/',
    repoUrl: 'https://github.com/BeginnerAman/party-roast-multiplayer'
  },
  {
    name: 'Speed Typer Pro',
    category: 'game',
    icon: 'keyboard',
    description: 'Test your typing speed with challenging texts and leaderboards',
    language: 'JavaScript',
    liveUrl: 'https://beginneraman.github.io/speed-typer-pro/',
    repoUrl: 'https://github.com/BeginnerAman/speed-typer-pro'
  },
  {
    name: 'Fake Hacker Terminal',
    category: 'game',
    icon: 'terminal',
    description: 'Realistic hacker terminal simulator for fun and pranks',
    language: 'JavaScript',
    liveUrl: 'https://beginneraman.github.io/fake-hacker-terminal/',
    repoUrl: 'https://github.com/BeginnerAman/fake-hacker-terminal'
  },
  {
    name: 'Best Friend Match Quiz',
    category: 'game',
    icon: 'heart-handshake',
    description: 'Find out who your best friend really is with this fun quiz',
    language: 'HTML',
    liveUrl: 'https://beginneraman.github.io/best-friend-match-quiz/',
    repoUrl: 'https://github.com/BeginnerAman/best-friend-match-quiz'
  },
  {
    name: 'Catch Me If You Can',
    category: 'game',
    icon: 'footprints',
    description: 'Exciting chase game with BFF mode for competitive fun',
    language: 'HTML',
    liveUrl: 'https://beginneraman.github.io/catch-me-if-you-can-bff/',
    repoUrl: 'https://github.com/BeginnerAman/catch-me-if-you-can-bff'
  },
  {
    name: 'Typing Game',
    category: 'game',
    icon: 'gamepad-2',
    description: 'Classic typing game to improve your typing accuracy and speed',
    language: 'JavaScript',
    liveUrl: 'https://beginneraman.github.io/typing_game/',
    repoUrl: 'https://github.com/BeginnerAman/typing_game'
  },

  // ─── Utility & Tools ───
  {
    name: 'Dairy Price Calculator',
    category: 'utility',
    icon: 'calculator',
    description: 'Calculate dairy product prices with smart rate computation',
    language: 'HTML',
    liveUrl: 'https://beginneraman.github.io/dairy-price-calculator/',
    repoUrl: 'https://github.com/BeginnerAman/dairy-price-calculator'
  },
  {
    name: 'Resume Forge Pro',
    category: 'utility',
    icon: 'file-text',
    description: 'Professional resume builder with modern templates and easy customization',
    language: 'JavaScript',
    liveUrl: 'https://beginneraman.github.io/resume-forge-pro/',
    repoUrl: 'https://github.com/BeginnerAman/resume-forge-pro'
  },
  {
    name: 'Data Wizard Hub',
    category: 'utility',
    icon: 'database',
    description: 'Powerful data management and visualization hub for analytics',
    language: 'JavaScript',
    liveUrl: 'https://beginneraman.github.io/data-wizard-hub/',
    repoUrl: 'https://github.com/BeginnerAman/data-wizard-hub'
  },

  // ─── Web Apps & Websites ───
  {
    name: 'LuxeStay Hotel',
    category: 'webapp',
    icon: 'building-2',
    description: 'Premium hotel booking website with elegant design and features',
    language: 'JavaScript',
    liveUrl: 'https://luxe-stay-hotel-weld.vercel.app',
    repoUrl: 'https://github.com/BeginnerAman/LuxeStay-Hotel'
  },
  {
    name: 'Garden Groves Banquet',
    category: 'webapp',
    icon: 'trees',
    description: 'Beautiful banquet hall and event venue showcase website',
    language: 'CSS',
    liveUrl: 'https://beginneraman.github.io/garden-groves-banquet-bar/',
    repoUrl: 'https://github.com/BeginnerAman/garden-groves-banquet-bar'
  },
  {
    name: 'Aman Playlist Hub',
    category: 'webapp',
    icon: 'music',
    description: 'Curated YouTube playlist showcase with modern, sleek interface',
    language: 'JavaScript',
    liveUrl: 'https://beginneraman.github.io/aman-playlist-hub/',
    repoUrl: 'https://github.com/BeginnerAman/aman-playlist-hub'
  },

  // ─── Birthday & Special ───
  {
    name: 'Birthday Wishes - Ayush',
    category: 'birthday',
    icon: 'cake',
    description: 'Interactive birthday celebration page for Ayush',
    language: 'HTML',
    liveUrl: 'https://beginneraman.github.io/birthday-wishes-ayush/',
    repoUrl: 'https://github.com/BeginnerAman/birthday-wishes-ayush'
  },
  {
    name: 'Happy Birthday - N',
    category: 'birthday',
    icon: 'gift',
    description: 'Special animated birthday greeting with stunning effects',
    language: 'CSS',
    liveUrl: 'https://beginneraman.github.io/happy_birthday-n/',
    repoUrl: 'https://github.com/BeginnerAman/happy_birthday-n'
  }
];


// ── DOM Element References ───────────────────────────────────
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


// ============================================================
// Category Name Mapping
// ============================================================

/**
 * Returns a human-readable label for a given category key.
 * @param {string} category - The category identifier
 * @returns {string} Readable category name
 */
function getCategoryName(category) {
  const names = {
    chat: 'Chat App',
    game: 'Game',
    utility: 'Utility',
    webapp: 'Web App',
    birthday: 'Birthday Special'
  };
  return names[category] || category;
}


// ============================================================
// Project Card Creation
// ============================================================

/**
 * Creates a single project card DOM element.
 * Uses Lucide icons instead of emojis for a professional look.
 *
 * @param {Object} project - Project data object
 * @returns {HTMLElement} The constructed card element
 */
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';

  // ── Card Header ──
  const header = document.createElement('div');
  header.className = 'card-header';

  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'card-icon';

  const iconEl = document.createElement('i');
  iconEl.setAttribute('data-lucide', project.icon);
  iconWrapper.appendChild(iconEl);

  const badge = document.createElement('span');
  badge.className = 'tech-badge';
  badge.textContent = project.language;

  header.appendChild(iconWrapper);
  header.appendChild(badge);

  // ── Card Body ──
  const body = document.createElement('div');
  body.className = 'card-body';

  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = project.name;

  const desc = document.createElement('p');
  desc.className = 'card-description';
  desc.textContent = project.description;

  body.appendChild(title);
  body.appendChild(desc);

  // ── Card Footer ──
  const footer = document.createElement('div');
  footer.className = 'card-footer';

  // Live Demo button (only when a live URL exists)
  if (project.liveUrl) {
    const liveLink = document.createElement('a');
    liveLink.href = project.liveUrl;
    liveLink.className = 'btn-live';
    liveLink.target = '_blank';
    liveLink.rel = 'noopener noreferrer';

    const liveIndicator = document.createElement('span');
    liveIndicator.className = 'live-indicator';

    liveLink.appendChild(liveIndicator);
    liveLink.appendChild(document.createTextNode(' Live Demo'));
    footer.appendChild(liveLink);
  }

  // Source / GitHub button (always present)
  const sourceLink = document.createElement('a');
  sourceLink.href = project.repoUrl;
  sourceLink.className = 'btn-source';
  sourceLink.target = '_blank';
  sourceLink.rel = 'noopener noreferrer';

  const ghIcon = document.createElement('i');
  ghIcon.className = 'fab fa-github';

  sourceLink.appendChild(ghIcon);
  sourceLink.appendChild(document.createTextNode(' Source'));
  footer.appendChild(sourceLink);

  // ── Assemble Card ──
  card.appendChild(header);
  card.appendChild(body);
  card.appendChild(footer);

  // ── Make entire card clickable for live projects ──
  if (project.liveUrl) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      const isSourceClick = e.target.closest('.btn-source');
      if (!isSourceClick) {
        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
      }
    });
  }

  return card;
}


// ============================================================
// Render Projects into the Grid
// ============================================================

/**
 * Renders project cards into the grid, optionally filtered by category.
 * Cards appear with a staggered fade-in animation.
 *
 * @param {string} filter - Category to filter by, or 'all'
 */
function renderProjects(filter = 'all') {
  // Clear existing cards
  projectsGrid.innerHTML = '';

  // Determine which projects to show
  const filtered = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  // Build each card with staggered animation delay
  filtered.forEach((project, index) => {
    const card = createProjectCard(project);

    // Start invisible for the animation
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    projectsGrid.appendChild(card);

    // Stagger the fade-in so cards cascade into view
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });

  // Initialize Lucide icons after DOM is updated
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}


// ============================================================
// Filter Button Handlers
// ============================================================

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Swap the active state
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Re-render with the chosen filter
    const filter = btn.getAttribute('data-filter') || 'all';
    renderProjects(filter);
  });
});


// ============================================================
// Hamburger / Mobile Menu
// ============================================================

if (hamburger && navMenu) {
  // Toggle mobile menu open / close
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when any navigation link inside it is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}


// ============================================================
// Smooth Scrolling for Anchor Links
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return; // skip bare "#" links

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ============================================================
// Intersection Observer – Fade-In Sections on Scroll
// ============================================================

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

// Observe every <section> on the page
document.querySelectorAll('section').forEach(section => {
  sectionObserver.observe(section);
});


// ============================================================
// Active Nav-Link Highlighting on Scroll
// ============================================================

/**
 * Highlights the nav link whose section is currently in view.
 */
function highlightActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  const scrollPos = window.scrollY + 100; // small offset for header height

  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightActiveNavLink);


// ============================================================
// Close Mobile Menu on Resize (desktop breakpoint)
// ============================================================

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navMenu) {
    navMenu.classList.remove('active');
  }
});


// ============================================================
// Initialisation
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Render all projects on first load
  renderProjects('all');

  // Scroll to top so the hero section is in view
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
