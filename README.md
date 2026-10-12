# Modern Developer Portfolio Website Template

A modern, high-performance, and beautifully crafted personal portfolio template built with **React**, **Vite**, and **Tailwind CSS**. 

Designed for software engineers, full-stack developers, UI/UX designers, and tech creators who want a polished web presence they can personalize in under 5 minutes.

---

## ✨ Key Features

- **⚡ Blazing Fast**: Powered by Vite and React 19 for instant HMR and optimized production builds.
- **🎨 Tailwind CSS v4**: Utility-first styling with modern responsive layouts and glassmorphism accents.
- **🌓 Dark & Light Mode**: Built-in theme switcher with smooth transitions, persistent `localStorage`, and system preference detection.
- **🎯 Single Configuration File**: Personalize everything—bio, skills, projects, timeline, and contact information—via `src/data/portfolioData.js`. No need to touch deep component logic.
- **💻 Interactive Terminal**: Terminal preview card showcasing your core stack, interests, and command output with one-click JSON copy.
- **📂 Categorized Projects & Modal**: Filter projects by discipline (Full Stack, Frontend, Mobile, AI) with interactive detail modals, GitHub links, and live previews.
- **⏳ Career & Education Timeline**: Interactive filterable milestone timeline with achievements and tech tags.
- **💌 Interactive Contact Form**: Form validation, simulated feedback state, copy-to-clipboard email action, and mailto fallback.
- **📱 Fully Responsive**: Flawless experience across mobile phones, tablets, and wide desktop screens.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be created inside the `dist/` directory.

---

## 🛠️ How to Customize Your Portfolio

All website content is driven by **`src/data/portfolioData.js`**.

### 1. Personal & Social Details
Open `src/data/portfolioData.js` and modify the `personal` and `socials` objects:
```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title (e.g. Senior Frontend Engineer)",
    tagline: "Your personal motto or focus...",
    avatar: "https://your-image-url.com/avatar.jpg",
    location: "City, Country (Remote / On-site)",
    email: "your.email@example.com",
    resumeUrl: "https://link-to-your-resume.pdf",
    status: {
      available: true,
      text: "Available for new opportunities"
    }
  },
  // ...
};
```

### 2. Skills
Add or modify skills under `skillsCategories`:
```javascript
skillsCategories: [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Crafting fast, accessible, responsive interfaces",
    skills: [
      { name: "React / Next.js", level: "Expert", percentage: 95 },
      { name: "TypeScript", level: "Expert", percentage: 90 },
      // Add more skills...
    ]
  }
]
```

### 3. Projects
Add your own projects under `projects`:
```javascript
projects: [
  {
    id: "my-project",
    title: "Project Name",
    category: "Full Stack", // "Frontend" | "Full Stack" | "Mobile" | "AI"
    featured: true,
    description: "Short 1-2 sentence overview.",
    longDescription: "Detailed breakdown of the architecture, stack, and results.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/...",
    liveUrl: "https://myproject.com",
    githubUrl: "https://github.com/username/project",
    metrics: "Over 5,000 monthly active users",
    highlights: [
      "Key feature or engineering accomplishment 1",
      "Key feature or engineering accomplishment 2"
    ]
  }
]
```

### 4. Experience & Education Timeline
Update your work history and degrees in `timeline`:
```javascript
timeline: [
  {
    id: "job-1",
    type: "work", // "work" or "education"
    role: "Senior Software Engineer",
    organization: "Company Name",
    period: "2023 - Present",
    location: "San Francisco, CA",
    description: "Brief overview of what you worked on.",
    achievements: [
      "Reduced latency by 40%...",
      "Led migration from JavaScript to TypeScript..."
    ],
    skills: ["React", "Node.js", "Docker"]
  }
]
```

---

## 🚢 Deployment

### Deploy to Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect Vite and run `npm run build`.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/your-repo-name/'`.
2. Run `npm run build`.
3. Deploy the `dist` directory using `gh-pages` or a GitHub Action.

---

## 📝 License
MIT License. Feel free to use and adapt this template for your personal or commercial portfolio!
