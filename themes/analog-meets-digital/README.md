# Analog Meets Digital

A sophisticated Hugo theme that bridges vintage analog aesthetics with modern digital design - featuring music-inspired elements, studio equipment styling, and professional typography.

## Philosophy

**Analog Meets Digital** represents the perfect harmony between the warmth of vintage analog equipment and the precision of modern digital design. This theme draws inspiration from recording studios, vinyl records, and professional audio equipment while maintaining contemporary web standards and accessibility.

## Features

### Design & Aesthetics
- **Dual Theme System**: Choose between "Warm Gold" and "Deep Studio" color schemes
- **Music-Inspired Elements**: Rotating vinyl record logo, studio equipment styling
- **Professional Typography**: Carefully selected font combinations for optimal readability
- **Analog Warmth**: Vintage-inspired color palettes with golden accents
- **Modern Precision**: Clean layouts, responsive design, and smooth animations

### Technical Features
- **Fully Responsive**: Seamless experience across all devices
- **Professional Layout**: Optimized for technical blogs and professional content
- **Studio Controls**: Interactive elements inspired by audio equipment
- **Vinyl Record Animations**: Subtle, authentic spinning animations
- **Theme Switching**: Live theme switching without page reload
- **Syntax Highlighting**: Beautiful code presentation
- **SEO Optimized**: Structured data and meta tag optimization

## Installation

1. Add the theme to your Hugo site's `themes` directory:
   ```bash
   git clone https://github.com/evilurge/hugo-theme-analog-meets-digital.git themes/analog-meets-digital
   ```

2. Update your site's configuration file `config.toml`:
   ```toml
   theme = "analog-meets-digital"
   ```

3. Start your Hugo server:
   ```bash
   hugo server
   ```

## Configuration

### Basic Configuration

```toml
[params]
  # Theme color scheme: "warm-gold" or "deep-studio"
  themeColor = "warm-gold"

  # Enable studio mode for enhanced music-inspired elements
  studioMode = true

  # Show theme selector in header
  showThemeSelector = true

  # Layout options
  centerTheme = true
  fullWidthTheme = false

  # Site description
  description = "Your professional blog description"

  # Display build information
  showBuildInfo = true
  themeVersion = "2.0"
```

### Logo Configuration

```toml
[languages.en.params.logo]
  logoText = "Your Site Name"
  logoHomeLink = "/"
  tagline = "Optional tagline text"
```

### Navigation Menu

```toml
[[languages.en.menu.main]]
  identifier = "posts"
  name = "Posts"
  url = "/posts/"

[[languages.en.menu.main]]
  identifier = "about"
  name = "About"
  url = "/about/"
```

## Theme Variants

### Warm Gold (Default)
- Rich golden tones inspired by vintage recording equipment
- Warm, inviting color palette perfect for personal blogs
- Copper accents and professional typography

### Deep Studio
- Muted, professional color scheme
- Inspired by high-end recording studios
- Cooler tones with bronze accents for a sophisticated look

## Design Elements

### Vinyl Record Logo
The signature spinning vinyl record logo with musical note creates an authentic analog feel while maintaining modern web standards.

### Studio Equipment Styling
Navigation and UI elements are inspired by professional audio equipment, featuring:
- Studio indicator lights
- Equipment rack styling
- Professional control layouts
- VU meter inspired accents

### Professional Typography
- **Headlines**: Playfair Display for elegant, readable titles
- **Body Text**: Inter for excellent readability and modern feel
- **Code**: JetBrains Mono for beautiful syntax highlighting

## Custom CSS Classes

The theme provides semantic CSS classes with the `analog-` prefix:

### Layout Classes
- `.analog-container`: Main content container
- `.analog-grid`: Professional grid layout
- `.analog-article`: Styled article container

### Component Classes
- `.analog-button`: Professional button styling
- `.analog-tag`: Tag styling for categories
- `.analog-post-card`: Card styling for post listings
- `.analog-nav`: Navigation component styling

### Theme Classes
- `.analog-logo`: Logo component with vinyl record
- `.analog-theme-selector`: Theme switching controls
- `.studio-indicator`: Studio equipment inspired indicators

## Content Optimization

### Post Layout
- Professional article layout with optimal line length
- Image containers with proper scaling and responsive behavior
- List styling that maintains readability within content boundaries
- Code blocks with syntax highlighting and proper spacing

### Typography Hierarchy
- Clear heading hierarchy with consistent spacing
- Optimized line height and character spacing
- Professional link styling with subtle hover effects

## Browser Support

Analog Meets Digital works in all modern browsers:

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with minimal unused styles
- Efficient font loading with font-display: swap
- Minimal JavaScript for enhanced functionality
- Responsive images with proper sizing

## Accessibility

- ARIA labels for interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly navigation
- High contrast ratios in both themes

## Development

### Local Development
```bash
# Clone the theme
git clone https://github.com/evilurge/hugo-theme-analog-meets-digital.git

# Install dependencies (if needed)
npm install

# Run with Hugo
hugo server --theme=analog-meets-digital
```

### Customization
The theme uses CSS custom properties (variables) for easy customization:

```css
:root {
  --color-primary: #d69e2e;
  --color-secondary: #dd6b20;
  --color-accent: #f6ad55;
  /* ... */
}
```

## Credits

This theme was inspired by:
- Professional recording studio aesthetics
- Vintage analog audio equipment
- Modern web design principles
- The intersection of music and technology

## License

This theme is released under the MIT License. See [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

---

**Developed by [Gilad Maoz (EvilUrge)](https://github.com/evilurge)**

*Where analog warmth meets digital precision.*