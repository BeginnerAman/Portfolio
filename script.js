// ============================================
// All Public Projects Data
// ============================================

const projectsData = [
    // Chat Applications
    {
        name: "Chat Application",
        category: "chat",
        icon: "💬",
        description: "A real-time chat application for instant messaging and communication",
        url: "https://github.com/BeginnerAman/chat"
    },
    {
        name: "ChatX",
        category: "chat",
        icon: "💭",
        description: "Advanced chat platform with multiple features and user-friendly interface",
        url: "https://github.com/BeginnerAman/chatx"
    },
    {
        name: "Advanced Chat X",
        category: "chat",
        icon: "🗨️",
        description: "Next-generation chat application with enhanced functionalities",
        url: "https://github.com/BeginnerAman/advchat_x"
    },
    {
        name: "Group Chatting",
        category: "chat",
        icon: "👥",
        description: "Multi-user group chat application for team communication",
        url: "https://github.com/BeginnerAman/groupchatting"
    },
    {
        name: "Advanced Group Chat",
        category: "chat",
        icon: "🤝",
        description: "Enhanced group chatting platform with advanced features",
        url: "https://github.com/BeginnerAman/agroupchat"
    },

    // Games
    {
        name: "Typing Game",
        category: "game",
        icon: "⌨️",
        description: "Improve your typing speed and accuracy with this fun game",
        url: "https://github.com/BeginnerAman/typing_game"
    },
    {
        name: "Typing Game 2",
        category: "game",
        icon: "🎮",
        description: "Second version of the typing game with new challenges",
        url: "https://github.com/BeginnerAman/typing2"
    },
    {
        name: "Game Project",
        category: "game",
        icon: "🕹️",
        description: "Interactive game project with engaging gameplay",
        url: "https://github.com/BeginnerAman/game"
    },

    // Utility Tools
    {
        name: "Milk Price Calculator",
        category: "utility",
        icon: "🥛",
        description: "Calculate milk prices with ease and convenience",
        url: "https://github.com/BeginnerAman/Milk_Price_Calculator"
    },
    {
        name: "Price Tool",
        category: "utility",
        icon: "💰",
        description: "General purpose price calculation and comparison tool",
        url: "https://github.com/BeginnerAman/price"
    },
    {
        name: "Compare Price",
        category: "utility",
        icon: "🔄",
        description: "Compare prices across different products and services",
        url: "https://github.com/BeginnerAman/compare_price"
    },
    {
        name: "Vote Platform",
        category: "utility",
        icon: "🗳️",
        description: "Create and manage voting polls for decision making",
        url: "https://github.com/BeginnerAman/vote"
    },
    {
        name: "Vote Roast",
        category: "utility",
        icon: "⭐",
        description: "Fun voting platform with roasting functionality",
        url: "https://github.com/BeginnerAman/Vote-Roast"
    },
    {
        name: "Movie Recommendation",
        category: "utility",
        icon: "🎬",
        description: "Smart movie recommendation system based on preferences",
        url: "https://github.com/BeginnerAman/movie_recommendation"
    },

    // Special Projects
    {
        name: "Happy Birthday",
        category: "special",
        icon: "🎂",
        description: "Interactive birthday greeting and celebration platform",
        url: "https://github.com/BeginnerAman/Happy_Birthday"
    },
    {
        name: "Happy Birthday - Neha",
        category: "special",
        icon: "🎉",
        description: "Special birthday project dedicated to Neha",
        url: "https://github.com/BeginnerAman/Happy_Birthday-Neha"
    },
    {
        name: "Happy Birthday - Sarika",
        category: "special",
        icon: "🎊",
        description: "Personalized birthday greeting for Sarika",
        url: "https://github.com/BeginnerAman/Happy_Birthday_Sarika"
    },
    {
        name: "Ayush Birthday",
        category: "special",
        icon: "🎈",
        description: "Special birthday celebration project for Ayush",
        url: "https://github.com/BeginnerAman/Ayush-Birthday"
    },
    {
        name: "Friend Connection",
        category: "special",
        icon: "👫",
        description: "Application to connect and manage friendships",
        url: "https://github.com/BeginnerAman/friend"
    },
    {
        name: "Portfolio",
        category: "special",
        icon: "🖼️",
        description: "My professional portfolio showcasing all my projects",
        url: "https://github.com/BeginnerAman/Portfolio"
    },

    // Profile & Other
    {
        name: "BeginnerAman Profile",
        category: "profile",
        icon: "👤",
        description: "My GitHub profile repository with personal information",
        url: "https://github.com/BeginnerAman/BeginnerAman"
    },
    {
        name: "Project S",
        category: "profile",
        icon: "📦",
        description: "Special project collection and showcase",
        url: "https://github.com/BeginnerAman/s"
    },
    {
        name: "Project F",
        category: "profile",
        icon: "🔧",
        description: "Experimental project with various features",
        url: "https://github.com/BeginnerAman/f"
    },
    {
        name: "Project P",
        category: "profile",
        icon: "⚙️",
        description: "Development project with advanced functionality",
        url: "https://github.com/BeginnerAman/p"
    },
    {
        name: "Project H",
        category: "profile",
        icon: "🚀",
        description: "High-performance project with optimized code",
        url: "https://github.com/BeginnerAman/h"
    }
];

// ============================================
// DOM Elements
// ============================================

const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// ============================================
// Functions
// ============================================

// Render projects based on filter
function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filter);

    filteredProjects.forEach((project, index) => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
        
        // Add animation delay
        setTimeout(() => {
            card.style.animation = 'fadeIn 0.6s ease forwards';
            card.style.opacity = '0';
        }, index * 50);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-icon">${project.icon}</div>
        <h3 class="project-name">${project.name}</h3>
        <span class="project-category">${getCategoryName(project.category)}</span>
        <p class="project-description">${project.description}</p>
        <a href="${project.url}" class="project-link" target="_blank">
            <i class="fab fa-github"></i>
            View Repository
            <i class="fas fa-arrow-right"></i>
        </a>
    `;
    return card;
}

// Get readable category name
function getCategoryName(category) {
    const categoryNames = {
        'chat': 'Chat App',
        'game': 'Game',
        'utility': 'Utility',
        'special': 'Special',
        'profile': 'Profile'
    };
    return categoryNames[category] || category;
}

// Filter button click handlers
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    
    // Add animation to sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// ============================================
// Active Link Highlighting
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Responsive Mobile Menu
// ============================================

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ============================================
// Scroll to Top on Page Load
// ============================================

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});
