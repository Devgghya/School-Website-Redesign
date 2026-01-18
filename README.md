# The Himalayan Public School - Modern Website Redesign

A premium, modern, and accessible website redesign for The Himalayan Public School featuring a student-centric architecture, immersive visuals, and responsive interactive elements.

## 🎯 Project Overview

This project is a complete redesign of The Himalayan Public School's website, built with modern web technologies to provide an engaging and accessible user experience. The site features smooth animations, responsive design, and interactive components that showcase the school's values and offerings.

## 🚀 Features

- **Modern UI/UX** - Clean, contemporary design with smooth animations powered by Framer Motion
- **Responsive Design** - Mobile-first approach ensuring perfect display on all devices
- **Component-Based Architecture** - Reusable React components for maintainability
- **Interactive Elements** - Engaging hero section, stats display, and news/events showcase
- **Student-Centric Design** - Dedicated student zone with relevant resources
- **Accessibility First** - Built with accessibility standards in mind

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Routing**: React Router v7
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Styling**: CSS

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository
```bash
git clone https://github.com/yourusername/School-Website-Redesign.git
cd School-Website-Redesign
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables (if needed)
```bash
# Create a .env.local file with any required API keys
VITE_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
├── components/          # Reusable React components
│   ├── Hero.tsx        # Hero section component
│   ├── Navbar.tsx      # Navigation bar
│   ├── Features.tsx    # Features showcase
│   ├── Stats.tsx       # Statistics display
│   ├── NewsEvents.tsx  # News and events section
│   ├── ContactFAB.tsx  # Contact floating action button
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   └── StudentZone.tsx # Student zone page
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## 🔨 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (output in `dist/` folder)
- `npm run preview` - Preview production build locally

## 📝 Pages

### Home Page
The main landing page featuring:
- Hero section with school branding
- Key features and highlights
- Statistics about the school
- News and upcoming events
- Contact information

### Student Zone
A dedicated area for students with:
- Relevant resources and information
- Quick access to important links
- Student-specific content

## 🚀 Deployment

The project includes a deployment guide for Infinity Free hosting. See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🎨 Customization

### Colors and Styling
Modify component CSS files directly to customize colors and styling to match school branding.

### Content
Update component files to change text, images, and information to reflect school details.

### API Integration
The project is configured to work with environment variables for API integration (e.g., Gemini API).

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for The Himalayan Public School.

## 👨‍💻 Development

### Code Quality
The project uses TypeScript for type safety and better development experience.

### Performance
- Vite provides fast development and optimized production builds
- React 19 ensures efficient rendering
- Framer Motion handles animations smoothly

## 🤝 Contributing

For internal development, follow these guidelines:
1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For issues or questions about the website redesign, please contact the development team.

---

Built with ❤️ for The Himalayan Public School
