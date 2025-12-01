# Anthony Santo - Portfolio

Professional portfolio website showcasing my experience as a Senior Cloud & DevOps Engineer.

## Live Site

Visit the live portfolio: [https://psychotic-nightmare.github.io/portfolio/](https://psychotic-nightmare.github.io/portfolio/)

## Tech Stack

- **Framework:** React Router v7
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## Project Structure

```
portfolio/
├── src/
│   └── app/          # Main application code
├── public/
│   └── images/       # Technology logos and assets
└── .github/
    └── workflows/    # GitHub Actions deployment workflow
```

## Local Development

```bash
cd portfolio
npm install --legacy-peer-deps
npm run dev
```

The site will be available at `http://localhost:4000`

## Build

```bash
npm run build
```

Build output is in `build/client/` for static deployment.

## Deployment

Deployment is automated via GitHub Actions. Every push to `main` automatically:
1. Builds the static site
2. Deploys to GitHub Pages

## License

This portfolio is personal and proprietary.

## Contact

- **Email:** asanto92@outlook.com
- **Location:** South Florida
- **LinkedIn:** [View Profile](https://www.linkedin.com/in/your-profile)

---
