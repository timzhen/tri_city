# Tri-City Free Breakfast Program Website

A modern React recreation of the Tri-City Free Breakfast Program website with enhanced styling and user experience.

## Features

- ✨ Modern, responsive design with smooth animations
- 🎨 Enhanced visual styling with gradients and shadows
- 📱 Fully responsive layout for all devices
- ⚡ Built with Vite for fast development and builds
- 🎯 Component-based architecture for maintainability

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Header with logo and navigation
│   ├── Welcome.jsx         # Main welcome content section
│   ├── Sidebar.jsx         # Sidebar container
│   │   └── sidebar/
│   │       ├── Mission.jsx
│   │       ├── Contact.jsx
│   │       ├── Donate.jsx
│   │       └── Wishlist.jsx
│   ├── BottomSections.jsx  # About and Volunteer sections
│   └── Footer.jsx          # Footer with contact info
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Technologies Used

- React 18
- Vite
- CSS3 with modern features (CSS Variables, Flexbox, Grid)
- Google Fonts (Playfair Display, Inter)

## Design Improvements

- Modern color scheme with CSS variables for easy theming
- Smooth hover effects and transitions
- Enhanced typography with Google Fonts
- Improved spacing and visual hierarchy
- Responsive grid layouts
- Subtle animations and shadows for depth
- Better accessibility with semantic HTML

