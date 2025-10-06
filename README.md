# BannerCreator

> Simple banner/ad generator web app — create image banners from text, templates and assets.  
> (A pragmatic little tool for producing social / ad banners quickly. Yes, it exists because someone needed it.)

---

## Quick summary

**What this is:** A web-based Banner Generator that lets you compose banners using templates, text, and images, then export the result as an image.  
**Tech stack (detected):** JavaScript, TypeScript, SCSS, HTML.  
**Status:** Prototype / hobby project. No releases.

---

## Features

- Create banners from templates or blank canvas
- Add headings, subtext, and image assets
- Basic typographic control (size, alignment)
- Export canvas/banner as PNG (or other formats, if supported)
- Built with common web tooling for easy dev workflow

---

## Getting started (developer)

> These commands assume you have Node.js and npm installed. If the repo uses `yarn`, substitute accordingly.

```bash
# 1. Clone the repo (if you haven't)
git clone https://github.com/bmanish55/BannerCreator.git
cd Banner-Generator-master

# 2. Install dependencies
npm install

# 3. Development server
# If package.json provides a start script:
npm start

# Or use a simple static server if no script:
npx http-server . -o

# 4. Build for production (if provided)
npm run build
