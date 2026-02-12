# Femboy Lifestyle Hub - Quick Start Guide

## 🚀 To View the Website

### Option 1: Open Directly in Browser
1. Extract the `femboy-lifestyle-hub` folder
2. Navigate to the folder
3. Double-click `index.html`
4. The site will open in your default browser

### Option 2: Using a Local Server (Recommended for Testing)
```bash
# Using Python 3
cd femboy-lifestyle-hub
python -m http.server 8000

# Using Node.js
npx http-server
```

Then open: `http://localhost:8000`

## 🎯 Key Features to Test

1. **Theme Toggle**: Click the moon/sun icon in the top-right navbar
2. **Language Toggle**: Click "العربية" button to switch to Arabic
3. **Navigation**: Explore the dropdown menus in the navbar
4. **Mobile View**: Resize your browser or use mobile device
5. **Page Routing**: Click any link - notice the smooth SPA navigation

## 📖 Content Overview

The website contains **30+ comprehensive pages** covering:

### Fashion (8 pages)
- Complete guides for skirts, hoodies, thigh highs, accessories
- Shopping guide with privacy tips (Amazon Locker explained)
- Sizing conversions (US/EU/Asian)
- DIY modification tutorials
- Advanced tools section

### Beauty (6 pages)
- Skincare routines
- Makeup tutorials
- Hair removal methods

### HRT & Health (6 pages)
⚠️ **Important**: Starts with medical disclaimer
- HRT basics with medication brands (Estrofem, Progynova, Climara, etc.)
- Detailed 0-24 month timeline
- Mental health resources

### Lifestyle (4 pages)
- Coming out safety
- Dating and online safety
- Community finding

### Resources (3 pages)
- Comprehensive glossary (Egg, Boymoding, Chaser, etc.)
- FAQ with crisis hotlines
- Contact page

## 🌟 Technical Highlights

- **Pure Vanilla JavaScript** - No frameworks or dependencies
- **Single Page Application** - Fast, smooth navigation
- **Fully Responsive** - Works on all devices
- **Accessibility** - WCAG compliant
- **Offline Capable** - No external dependencies after initial load

## 🎨 Customization

### Change Colors
Edit `assets/css/style.css` - look for `:root` CSS variables:
```css
:root {
    --color-primary: #FFC0CB;    /* Change this */
    --color-secondary: #E6E6FA;  /* And this */
}
```

### Add More Pages
Edit `assets/js/main.js` and add to the `pages` object:
```javascript
pages.newpage = {
    en: `<div class="container">Your content</div>`,
    ar: `<div class="container">المحتوى الخاص بك</div>`
};
```

### Add Languages
Add to `translations` object in `main.js`:
```javascript
translations.es = {
    site_title: "Centro de Estilo de Vida Femboy",
    // ... more translations
};
```

## 📱 Mobile Testing

The site is mobile-first. Test by:
1. Resizing browser to < 768px width
2. Using browser DevTools mobile emulation
3. Accessing from actual mobile device

Mobile features:
- Hamburger menu
- Touch-friendly dropdowns
- Optimized card layouts
- Responsive typography

## 🔍 File Structure

```
femboy-lifestyle-hub/
├── index.html              # Main entry point
├── README.md              # Full documentation
├── QUICK_START.md         # This file
└── assets/
    ├── css/
    │   └── style.css      # All styling
    ├── js/
    │   ├── main.js        # SPA router & core
    │   ├── pages-content.js
    │   ├── health-pages.js
    │   └── remaining-pages.js
    └── images/            # Add your images here
```

## 🌐 Deployment

### GitHub Pages
1. Create GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select "Deploy from branch" → main → root
5. Your site will be live at `username.github.io/repo-name`

### Netlify (Drag & Drop)
1. Go to netlify.com
2. Drag the entire `femboy-lifestyle-hub` folder into deploy zone
3. Site goes live immediately with custom URL

### Any Web Host
Simply upload all files via FTP to your web hosting public_html folder.

## ⚠️ Important Notes

1. **Medical Disclaimer**: The HRT section includes mandatory disclaimer - this is educational content only
2. **Privacy**: Site includes guides on discreet shopping (Amazon Locker, etc.)
3. **18+ Content**: Some advanced sections discuss adult topics appropriately
4. **No Server Required**: Everything runs client-side - no backend needed

## 🐛 Troubleshooting

**Navigation not working?**
- Make sure all JS files are loaded (check browser console)
- Ensure files are in correct directory structure

**Styles not loading?**
- Check that `assets/css/style.css` path is correct
- Clear browser cache

**Mobile menu stuck open?**
- Refresh page
- Check browser console for JavaScript errors

## 💡 Pro Tips

1. **Dark Mode**: Automatically saves preference
2. **Language Preference**: Persists across sessions
3. **Smooth Scrolling**: Enabled by default
4. **Fast Navigation**: SPA means no page reloads
5. **Print-Friendly**: Content can be printed (Ctrl/Cmd + P)

## 📞 Support

For questions:
- Read the comprehensive FAQ page
- Check the full README.md
- Review the Glossary for terminology

---

**Enjoy exploring the Femboy Lifestyle Hub!** 🌈✨

This comprehensive resource was created with love for the community.
