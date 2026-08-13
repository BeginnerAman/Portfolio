# Aman Vishwakarma (BeginnerAman) - Developer Portfolio

A beautiful, responsive portfolio website showcasing all public projects and work. Built with modern web technologies and AI assistance.

**Live Preview**: [GitHub Pages](https://BeginnerAman.github.io/Portfolio) *(Deploy using GitHub Pages settings)*

**Repository**: [BeginnerAman/Portfolio](https://github.com/BeginnerAman/Portfolio)

---

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Project Filtering** - Filter projects by category (Chat Apps, Games, Utilities, Special)
- **Smooth Animations** - Beautiful fade-in and scroll animations
- **Easy Project Management** - Add/remove projects in seconds
- **Dark Theme** - Modern dark UI with gradient accents
- **Social Links** - Connect on GitHub, Twitter, LinkedIn, Instagram
- **Mobile-Friendly Navigation** - Hamburger menu for mobile devices
- **Lucide Icons** - Professional SVG icons for a clean, modern look

---

## How to Use

### View the Portfolio

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BeginnerAman/Portfolio.git
   cd Portfolio
   ```

2. **Open in browser**:
   - Simply open `index.html` in your browser
   - Or use Live Server extension in VS Code

### Deploy on GitHub Pages

1. Go to repository Settings > Pages
2. Select `main` branch
3. Your portfolio will be live at: `https://BeginnerAman.github.io/Portfolio`

---

## How to Manage Projects

### ADD a New Project

Edit `script.js` and find the `projectsData` array, then add:

```javascript
{
    name: "Your Project Name",
    category: "chat",       // chat, game, utility, webapp, birthday
    icon: "icon-name",      // Lucide icon name (e.g., "message-circle")
    description: "Brief description of your project",
    url: "https://github.com/BeginnerAman/your-repo"
}
```

Refresh the page and your project appears instantly.

---

### REMOVE a Project

1. Find the project in `script.js`
2. Delete the entire object
3. Save the file

That's all! No other changes needed.

---

### Categories Available

| Category | Usage | Examples |
|----------|-------|----------|
| `chat` | Chat applications | Chat App, Group Chat |
| `game` | Games and puzzles | Typing Game, Quiz |
| `utility` | Tools and calculators | Data Wizard, Resume Forge |
| `webapp` | Web applications | LuxeStay Hotel, Garden Groves |
| `birthday` | Special projects | Birthday Pages |

---

## Project Structure

```
Portfolio/
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── script.js        # Project data and interactions
└── README.md        # This file
```

---

## Customization

### Update Personal Info

Edit in `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-title">Hi, I'm <span class="gradient-text">BeginnerAman</span></h1>

<!-- Contact Info -->
<p>your.email@example.com</p>

<!-- Social Links -->
<a href="https://github.com/YOUR-USERNAME">GitHub</a>
<a href="https://twitter.com/YOUR-HANDLE">Twitter</a>
```

### Change Colors

Edit in `styles.css`:

```css
:root {
    --accent-primary: #6c5ce7;      /* Main color */
    --accent-secondary: #a29bfe;    /* Accent color */
}
```

---

## AI Assistance

This entire portfolio was built with **AI** assistance, providing:
- Optimized code structure
- Modern design patterns
- Responsive layouts
- Smooth animations
- Best practices implementation

---

## Portfolio Stats

- **Total Projects**: 27+
- **Categories**: 5 (Chat, Games, Utilities, Web Apps, Birthday)
- **Built with**: HTML5, CSS3, JavaScript
- **Icons**: Lucide Icons (SVG)
- **Design**: Modern Dark Theme with Gradients

---

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling, animations, gradients
- **JavaScript** - Dynamic project loading, interactions
- **Lucide Icons** - Professional SVG icon library
- **Font Awesome** - Additional icons
- **Google Fonts** - Inter font family

---

## Features Overview

### Filter System
Click filter buttons to view projects by category:
- All Projects
- Chat Apps
- Games
- Utilities
- Web Apps
- Birthday

### Responsive Navigation
- Fixed navbar with smooth scroll
- Hamburger menu for mobile
- Active link highlighting

### Animations
- Fade-in effects on scroll
- Hover animations on cards
- Smooth transitions throughout

### Mobile Optimization
- Fully responsive design
- Touch-friendly buttons
- Optimized for all screen sizes

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

Free to use and modify. Credit to **AI** for assistance.

---

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Project search functionality
- [ ] Blog section
- [ ] Contact form integration
- [ ] Performance optimization

---

## Tips

1. **Use Lucide icons for projects** - Professional SVG icons look much better
2. **Keep descriptions short** - Better readability
3. **Use descriptive names** - Helps visitors understand projects
4. **Update contact info** - Make it easy to reach you
5. **Maintain GitHub links** - Ensure they point to active repos

---

## Support

For issues or suggestions, create an issue in the repository or reach out via the contact section.

---

**Made with care by Aman Vishwakarma (BeginnerAman)**
*Powered by AI Assistance*

---

Last Updated: August 2, 2026
