# Terminal Requirements - Muhammad Faheem Khan Portfolio

## System Requirements

### Operating System
- **Linux** (Ubuntu 22.04 or later recommended)
- **macOS** (10.15 or later)
- **Windows** (with WSL2 recommended)

### Node.js & Package Manager
- **Node.js**: v18.0.0 or higher (v22.13.0 recommended)
- **pnpm**: v10.4.1 or higher (package manager)
- **npm**: v9.0.0 or higher (alternative to pnpm)

---

## Installation Commands

### 1. Clone or Initialize Project
```bash
# Navigate to project directory
cd /home/ubuntu/portfolio-faheem
```

### 2. Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### 3. Install Additional Packages (Already Included)
```bash
# Core dependencies
pnpm add react react-dom vite tailwindcss framer-motion

# Three.js and 3D animations
pnpm add three @react-three/fiber @react-three/drei

# Typing animation
pnpm add react-type-animation

# UI components and utilities
pnpm add lucide-react clsx tailwind-merge

# Type definitions
pnpm add -D @types/three @types/react @types/react-dom typescript
```

---

## Development Commands

### Start Development Server
```bash
# Using pnpm
pnpm run dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

**Output**: Server starts at `http://localhost:3000`

### Build for Production
```bash
# Using pnpm
pnpm run build

# Using npm
npm run build

# Using yarn
yarn build
```

**Output**: Optimized build in `dist/` directory

### Preview Production Build Locally
```bash
# Using pnpm
pnpm run preview

# Using npm
npm run preview

# Using yarn
yarn preview
```

### Type Checking
```bash
# Using pnpm
pnpm run check

# Using npm
npm run check

# Using yarn
yarn check
```

### Code Formatting
```bash
# Using pnpm
pnpm run format

# Using npm
npm run format

# Using yarn
yarn format
```

---

## Project Structure

```
portfolio-faheem/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroBackground.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── LoadingScreen.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── shared/
│   └── const.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── postcss.config.js
```

---

## Environment Setup

### Node.js Installation

#### Linux (Ubuntu/Debian)
```bash
# Using NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### macOS
```bash
# Using Homebrew
brew install node

# Or using nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 22
nvm use 22
```

#### Windows
```bash
# Using Chocolatey
choco install nodejs

# Or download from https://nodejs.org/
```

### pnpm Installation
```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Verify installation
pnpm --version
```

---

## Key Dependencies & Versions

| Package | Version | Purpose |
|---------|---------|---------|
| React | ^19.2.1 | UI framework |
| Vite | ^7.1.7 | Build tool |
| Tailwind CSS | ^4.1.14 | Styling |
| Framer Motion | ^12.23.22 | Animations |
| Three.js | ^0.183.2 | 3D graphics |
| @react-three/fiber | ^9.5.0 | React Three.js integration |
| @react-three/drei | ^10.7.7 | Three.js utilities |
| react-type-animation | ^3.2.0 | Typing effect |
| Lucide React | ^0.453.0 | Icons |
| TypeScript | 5.6.3 | Type safety |

---

## Common Terminal Tasks

### Clear Cache & Reinstall
```bash
# Remove node_modules and lock files
rm -rf node_modules pnpm-lock.yaml

# Reinstall dependencies
pnpm install
```

### Update Dependencies
```bash
# Check for outdated packages
pnpm outdated

# Update all packages
pnpm update

# Update specific package
pnpm update package-name
```

### Add New Package
```bash
# Add production dependency
pnpm add package-name

# Add development dependency
pnpm add -D package-name
```

### Remove Package
```bash
pnpm remove package-name
```

### Check for Issues
```bash
# Run TypeScript check
pnpm run check

# Format code
pnpm run format
```

---

## Port Configuration

- **Development Server**: `http://localhost:3000`
- **Network Access**: `http://169.254.0.21:3000/` (on local network)

To change the port, modify `vite.config.ts`:
```typescript
export default {
  server: {
    port: 5173, // Change to desired port
    host: true,
  },
}
```

---

## Build & Deployment

### Production Build
```bash
# Build the project
pnpm run build

# Preview the build
pnpm run preview

# Start production server (if using Node.js backend)
pnpm run start
```

### Output Files
- **Frontend**: `dist/` directory
- **Server**: `dist/index.js` (if backend is enabled)

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm run dev -- --port 5173
```

### Clear Vite Cache
```bash
rm -rf node_modules/.vite
pnpm run dev
```

### Memory Issues
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" pnpm run build
```

### TypeScript Errors
```bash
# Check TypeScript configuration
pnpm run check

# Rebuild TypeScript
rm -rf dist && pnpm run build
```

---

## Git Commands

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website setup"
```

### Push to GitHub
```bash
git remote add origin https://github.com/MuhammadFaheemKhan0196/portfolio.git
git branch -M main
git push -u origin main
```

---

## Performance Tips

### Optimize Build Size
```bash
# Analyze bundle size
pnpm add -D vite-plugin-visualizer

# Then add to vite.config.ts and run build
pnpm run build
```

### Enable Source Maps (Development)
```bash
# Already enabled in vite.config.ts for development
pnpm run dev
```

### Minify Production Build
```bash
# Automatically done by Vite during build
pnpm run build
```

---

## Additional Resources

- **Vite Documentation**: https://vitejs.dev/
- **React Documentation**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **Three.js**: https://threejs.org/
- **TypeScript**: https://www.typescriptlang.org/

---

## Quick Start Summary

```bash
# 1. Navigate to project
cd /home/ubuntu/portfolio-faheem

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm run dev

# 4. Open browser
# Visit http://localhost:3000

# 5. Build for production
pnpm run build

# 6. Preview production build
pnpm run preview
```

---

**Last Updated**: March 13, 2026  
**Project**: Muhammad Faheem Khan - Portfolio Website  
**Technology Stack**: React + Vite + Tailwind CSS + Framer Motion + Three.js
