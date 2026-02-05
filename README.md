# NewsHub - Digital Magazine & News Blog Template

A modern, responsive starter template for news blogs and digital magazines. Built with clean HTML5, CSS3, and vanilla JavaScript.

## Features

### 🎨 Design
- **Modern & Clean UI** - Professional magazine-style layout
- **Responsive Design** - Fully responsive across all devices (desktop, tablet, mobile)
- **Custom Color Scheme** - Unique color palette with CSS custom properties
- **Smooth Animations** - Subtle transitions and hover effects
- **BEM Naming Convention** - Maintainable and scalable CSS architecture

### 📱 Mobile-First
- **Mobile Navigation** - Hamburger menu with slide-in panel
- **Touch-Optimized** - Designed for touch interactions
- **Flexible Grid** - Adapts to different screen sizes
- **Breakpoints** - 1024px, 768px, and 480px responsive breakpoints

### 🧩 Components
- **Sticky Header** - Navigation bar stays visible while scrolling
- **Featured Showcase** - Hero section with main story and secondary features
- **Category Tiles** - Visual navigation for different topics
- **Article Grid** - Flexible grid layout for article cards
- **Sidebar Widgets** - Trending posts, newsletter signup, staff picks
- **Footer** - Multi-column footer with links and social media

### ⚡ JavaScript Features
- Mobile menu toggle with backdrop overlay
- Newsletter form validation
- Smooth scrolling for anchor links
- Page load animations
- Dynamic copyright year

## File Structure

```
News-Blog-Digital-Magazine/
├── index.html          # Main HTML file with semantic structure
├── style.css           # Complete styling with responsive design
├── script.js           # JavaScript functionality
├── assets/
│   └── images/         # Placeholder images (SVG format)
│       ├── hero-main.jpg
│       ├── secondary-*.jpg
│       ├── article-*.jpg
│       └── editors-*.jpg
└── README.md           # This file
```

## Quick Start

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Customize** the content, colors, and images to match your brand

### Local Development

For better development experience, use a local server:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

Then visit `http://localhost:8080` in your browser.

## Customization Guide

### Colors
Modify CSS custom properties in `style.css`:
```css
:root {
    --hue-primary-blue: #1e5f8b;
    --hue-accent-orange: #e85d2a;
    --hue-highlight-gold: #d4a017;
    /* ... more colors */
}
```

### Typography
Change fonts by updating the font-family variables:
```css
:root {
    --typeface-body: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --typeface-display: Georgia, "Times New Roman", serif;
}
```

### Content
1. Edit `index.html` to update text content
2. Replace placeholder images in `assets/images/` with your own
3. Update article titles, descriptions, and metadata

### Layout
- Adjust spacing with `--gap-*` variables
- Modify grid columns in `.publications-grid-container`
- Change breakpoint values in media queries

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **JavaScript (ES6+)** - Vanilla JavaScript modules
- **SVG** - Scalable placeholder images

## Screenshots

### Desktop View
![Desktop View](https://github.com/user-attachments/assets/1c144451-ded1-4087-9aca-fcbd4e6e0bd8)

### Mobile View
![Mobile View](https://github.com/user-attachments/assets/beca18f7-d325-4b7e-a2dd-1f3a733a824a)

### Mobile Navigation
![Mobile Menu](https://github.com/user-attachments/assets/e2fe8e93-0764-4644-bde1-0e3ab1526db1)

## Performance

- Lightweight - No external dependencies
- Fast loading - Optimized CSS and JavaScript
- Semantic HTML - Good for SEO
- Accessible - ARIA labels and semantic elements

## License

This template is free to use for personal and commercial projects.

## Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ for modern web development**
