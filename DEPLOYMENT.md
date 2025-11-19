# Deployment Instructions

## Prerequisites
Make sure you have the following installed:
- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Dependencies
Install all required dependencies by running:
```bash
npm install
```

### Required Dependencies:
- **React & Core**: react, react-dom, react-router-dom
- **Build Tools**: vite, typescript, @vitejs/plugin-react-swc
- **UI Framework**: tailwindcss, tailwindcss-animate, postcss, autoprefixer
- **UI Components**: @radix-ui/* (accordion, alert-dialog, avatar, button, etc.)
- **Styling**: class-variance-authority, clsx, tailwind-merge
- **Icons**: lucide-react
- **Forms**: react-hook-form, @hookform/resolvers, zod
- **Notifications**: sonner
- **Email**: @emailjs/browser
- **State Management**: @tanstack/react-query
- **Utilities**: date-fns, cmdk, input-otp, next-themes, vaul

## Build for Production
```bash
npm run build
```

## Local Development
```bash
npm run dev
```

## Deploy to Static Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting service
3. Configure your hosting to serve `index.html` as the fallback for all routes

## Common Hosting Services:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repo or upload the `dist` folder
- **GitHub Pages**: Upload `dist` contents to your gh-pages branch
- **Any static hosting**: Upload `dist` folder contents

## Troubleshooting
- If you see a white screen, ensure all assets are loading correctly
- Check browser console for any errors
- Verify the base path is set correctly in vite.config.ts