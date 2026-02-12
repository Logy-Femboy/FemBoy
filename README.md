# Femboy Lifestyle Hub

A comprehensive, static website providing educational resources for the femboy community covering fashion, beauty, health, and lifestyle.

## 🌟 Features

- **30+ Pages** of comprehensive content
- **Single Page Application (SPA)** architecture with client-side routing
- **Bilingual Support** (English & Arabic) with full RTL/LTR capability
- **Theme Toggle** (Light/Dark mode) with persistent preferences
- **Fully Responsive** design (Mobile-first approach)
- **Zero Dependencies** - Pure HTML5, CSS3, and Vanilla JavaScript
- **Accessible** - WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
femboy-lifestyle-hub/
├── index.html                      # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css              # Master stylesheet
│   ├── js/
│   │   ├── main.js                # Core SPA router, i18n, theme
│   │   ├── pages-content.js       # Fashion & advanced content
│   │   ├── health-pages.js        # HRT & health content
│   │   └── remaining-pages.js     # Beauty, lifestyle, resources
│   └── images/                    # Image assets (placeholder)
└── README.md                      # This file
```

## 🎨 Design Philosophy

- **Pastel Aesthetic**: Pink (#FFC0CB), Lavender (#E6E6FA), Soft Blue (#C5E3F6)
- **Custom Fonts**: Quicksand (body), Comfortaa (headings)
- **Smooth Animations**: CSS transitions and keyframe animations
- **Card-based Layouts**: Modern, clean component design
- **Gradient Accents**: Subtle gradient overlays and borders

## 📚 Content Sections

### 1. Getting Started (3 pages)
- Home / Landing page
- About Us / Mission
- Comprehensive beginner's guide

### 2. Fashion (8 pages)
- Skirts & Dresses guide
- Oversized Hoodies styling
- Thigh Highs comprehensive guide
- Accessories overview
- Where to Shop (including privacy tips)
- Sizing Guide (US/EU/Asian conversions)
- DIY & Modifications
- Advanced Feminization Tools (tucking, waist training, body-positive tools)

### 3. Beauty & Makeup (6 pages)
- Basic Skincare routine
- Natural Makeup tutorial
- Eye Makeup techniques
- Contouring guide
- Shaving & Hair Removal methods
- Laser Hair Removal information

### 4. HRT & Health (6 pages)
- Medical Disclaimer (required reading)
- HRT Basics (estrogen, anti-androgens, delivery methods)
- Detailed Transition Timeline (0-24+ months)
- Mental Health resources
- Diet & Fitness for feminization
- Voice Training basics

### 5. Social & Lifestyle (4 pages)
- Coming Out tips and safety
- Dating Safety guidelines
- Online Safety & privacy
- Finding Community resources

### 6. Resources (3 pages)
- Comprehensive Glossary of Terms
- Useful Links collection
- Detailed FAQ

### 7. Contact (1 page)
- Contact information and community links

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely client-side

### Installation

1. Download or clone the repository
2. Open `index.html` in any web browser
3. That's it! No build process or dependencies needed.

### Deployment

Can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server (Apache, Nginx)

## 🌐 Internationalization (i18n)

The site supports English and Arabic with:
- **Language Toggle**: Button in navbar switches languages
- **RTL Support**: Full right-to-left layout for Arabic
- **Persistent Preference**: Language choice saved to localStorage
- **Comprehensive Translations**: All UI elements and navigation translated

To add more languages:
1. Add language code to `translations` object in `main.js`
2. Translate all keys in the new language object
3. Add page content for that language in each page object

## 🎨 Theming

### Color Customization

Edit CSS variables in `assets/css/style.css`:

```css
:root {
    --color-primary: #FFC0CB;      /* Main pink accent */
    --color-secondary: #E6E6FA;    /* Lavender */
    --color-accent: #B4A7D6;       /* Accent purple */
    --color-soft-blue: #C5E3F6;    /* Soft blue */
    /* ... more variables ... */
}
```

### Dark Mode

Dark theme automatically adjusts all colors. Customize in:

```css
.theme-dark {
    --color-primary: #D896A3;
    /* ... other dark mode colors ... */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## ⚠️ Important Notes

### Medical Disclaimer
The HRT & Health section contains a mandatory disclaimer page. All medical information is for educational purposes only and does not constitute medical advice. Users are directed to consult healthcare professionals.

### Content Maturity
Some sections discuss adult topics (HRT, body modification tools) appropriate for 18+ audiences. The site includes appropriate warnings and context.

### Privacy & Safety
Multiple sections include privacy guidance, particularly:
- Amazon Hub/Locker for discreet delivery
- Online safety best practices
- Coming out safety considerations

## 🛠️ Technical Details

### SPA Router
- Hash-based routing (`#page-name`)
- `navigate()` function handles all page transitions
- Automatic scroll-to-top on navigation
- Mobile menu auto-closes on route change

### State Management
```javascript
const app = {
    currentLang: 'en',      // Current language
    currentTheme: 'light',  // Current theme
    currentPage: 'home'     // Current route
};
```

### LocalStorage Usage
- `theme`: 'light' or 'dark'
- `lang`: 'en' or 'ar'

## 🤝 Contributing

This is an educational resource. To contribute:
1. Ensure medical information is accurate and cites sources
2. Maintain non-judgmental, inclusive tone
3. Follow existing code style and structure
4. Test across multiple browsers and devices

## 📄 License

This project is for educational purposes. Please attribute if reusing content.

## 🙏 Acknowledgments

Created with love for the femboy community. Special thanks to all community members who share their experiences and knowledge.

## 📞 Support

For questions or issues:
- Check the FAQ page first
- Reach out via the Contact page
- Join community discussion spaces

---

**Note**: This site provides educational information only. Always consult qualified professionals for medical, legal, or mental health advice.
