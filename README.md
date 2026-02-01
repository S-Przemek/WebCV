# WebCV

A lightweight, modular static CV / personal website template built with plain HTML, CSS and JavaScript.

This repository contains a single-page resume/portfolio site that is easy to customize and deploy (for example, via GitHub Pages). The site separates content, templates (partials), styles and scripts so you can edit your CV without touching the core layout.

Live preview
- Open `index.html` in your browser to preview locally.
- For a local web server: `python3 -m http.server 8000` then visit `http://localhost:8000`.

Repository structure
- index.html — site entry point
- Content/ — content files (your resume text, data, etc.)
- Partials/ — reusable HTML partials/templates
- Stylesheets/ — CSS files for layout and theming
- Scripts/ — JavaScript that powers interactions (if any)
- .hintrc — HTMLHint configuration for linting (if you use HTMLHint)

Features
- Simple, dependency-free static site (HTML/CSS/JS)
- Modular content and partials for easy customization
- Ready to deploy on GitHub Pages or any static host

Linting and quality
- A `.hintrc` file is present for HTMLHint configuration. To lint HTML, install HTMLHint and run it against `index.html` or your HTML files.

Deployment
- GitHub Pages: push to the `main` branch and enable Pages in repository settings, using the repository root as the publishing source.

Author / Contact
- Maintained by S-Przemek (GitHub: [S-Przemek](https://github.com/S-Przemek))
