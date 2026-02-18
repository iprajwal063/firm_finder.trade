# 🎯 FirmFinder Premium - Interactive Design Edition

Professional prop trading firm comparison platform with interactive premium UI/UX design.

## ✨ Features

- 📊 20+ Prop Firms Directory
- 🎨 Interactive Premium Design (Option 3)
- 🔘 Animated "Get Funded" Buttons
- 💫 Smooth Hover & Tap Animations
- 📱 Fully Responsive Design
- 🌙 Dark Fintech Theme
- 🎯 Advanced Filtering & Sorting
- 📈 Compare Tool
- ⚡ Fast Performance

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (Animations)
- Vite
- React Router v6
- React Three Fiber (3D Background)

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
firmfinder-premium/
├── src/
│   ├── pages/          # 11 full pages
│   ├── components/     # Reusable components
│   ├── data/          # Prop firms data
│   ├── App.tsx        # Main app
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── package.json       # Dependencies
└── ...config files
```

## 🎨 Design System

### Colors
- **Background:** Dark (hsl(0, 0%, 4%))
- **Accent:** Orange (hsl(15, 100%, 50%))
- **Text:** Light shades

### Typography
- Font: Space Grotesk
- Responsive sizes

### Animations
- Framer Motion for smooth transitions
- Hover effects on buttons
- Card glow animations
- Page transitions

## 📝 Pages Included

1. **Homepage** - Hero with 3D background
2. **Prop Firms** - Directory with filters
3. **Firm Details** - Interactive CTA section
4. **Compare** - Multi-firm comparison
5. **Blog** - News and updates
6. **About** - Company information
7. **Contact** - Contact form
8. **Privacy** - Privacy policy
9. **Terms** - Terms of service
10. **Disclaimer** - Legal disclaimer
11. **404** - Not found page

## 🔑 Key Features

### Interactive Premium Design
- ✨ Animated buttons with smooth transitions
- 🎯 Expandable FAQ accordion
- 💳 Beautiful CTA sections
- 📊 Interactive benefit pills
- 🌟 Professional card layouts

### Responsive Design
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

### Performance
- Fast load times
- Optimized animations
- Efficient rendering
- Code splitting

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- GitHub Pages
- Self-hosted VPS

## 📊 Data

20 prop firms included with:
- Company info
- Ratings & reviews
- Trading details
- Account sizes
- Profit splits
- Platform support

## 🎯 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
accent: {
  500: 'hsl(15, 100%, 50%)', // Change this
}
```

### Add Firms
Edit `src/data/propFirms.ts`:
```typescript
{
  id: 21,
  name: "Your Firm",
  // ... other details
}
```

### Update Navigation
Edit `src/components/Header.tsx`:
```typescript
const navItems = [
  // Add new items here
]
```

## 📞 Support

For issues or questions:
1. Check the code comments
2. Review the documentation
3. Test in development mode

## 📄 License

All rights reserved - FirmFinder Premium Edition

---

**Built with ❤️ for traders**

Made to help traders find their perfect prop firm!
