# ShellGems_

My personal tech blog featuring cloud computing, AI, coding, and development insights - powered by the custom **Analog Meets Digital** Hugo theme.


## About This Blog

**ShellGems** is my professional tech blog where I share insights about:
- ☁️ **Cloud Computing**: Firebase, AWS, serverless architectures
- 🤖 **AI & Development**: Modern development workflows, AI tools, automation
- 🛠️ **DevOps & Tools**: CI/CD, deployment strategies, developer productivity
- 🎮 **Gaming & Hardware**: ITX builds, gaming setups, hardware reviews
- 🎵 **Music & Tech**: Where technology meets creativity

## Technical Stack

- **Generator**: [Hugo](https://gohugo.io/) static site generator
- **Theme**: Custom **Analog Meets Digital** theme (vintage aesthetics meets modern design)
- **Content**: All posts written in Markdown
- **Deployment**: Automated via Cloudflare Pages
- **CI/CD**: Continuous deployment pipeline with build validation

## Repository Structure

```
├── content/               # Blog posts and pages (Markdown)
├── themes/analog-meets-digital/  # Custom Hugo theme
├── static/               # Images, favicon, assets
├── config.toml          # Hugo configuration
├── wrangler.toml       # Cloudflare Pages config
└── README.md           # This file
```

## Theme: Analog Meets Digital

This blog features a custom-built Hugo theme that bridges vintage analog aesthetics with modern digital design:

### Design Philosophy
- **Analog Warmth**: Inspired by vintage recording equipment and vinyl records
- **Digital Precision**: Modern typography, responsive design, clean layouts
- **Music-Inspired**: Rotating vinyl logo, studio equipment styling
- **Professional**: Optimized for technical content and readability

### Key Features
- Dual color schemes (Warm Gold / Deep Studio)
- Responsive design with mobile-first approach
- Syntax highlighting for code blocks
- Professional typography hierarchy
- Studio equipment inspired UI elements
- Theme switching capabilities

## Development

### Local Development
```bash
# Clone the repository
git clone https://github.com/evilUrge/shellgems.git
cd shellgems

# Run Hugo development server
hugo server --theme=analog-meets-digital

# Visit http://localhost:1313
```

### Adding Content
```bash
# Create a new post
hugo new posts/my-new-post.md

# Edit the post in your favorite editor
# Posts are located in content/posts/
```

## Deployment

This blog uses Cloudflare Pages for automated deployment:

1. **Commit & Push**: Push to `master` branch
2. **Cloudflare Pages**: Automatically builds and deploys the site
3. **Edge Network**: Serves content from Cloudflare's global edge network

The deployment pipeline includes:
- Hugo site generation with `hugo --minify`
- Automatic asset optimization
- Global CDN distribution
- Instant cache invalidation

## Live Site

Visit the blog at: **[www.evilurge.com](https://www.evilurge.com)**

---

**Developed by [Gilad Maoz](https://github.com/evilurge)**
*Where shell scripts become gems, and analog meets digital.*
