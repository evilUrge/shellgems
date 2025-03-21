# Cyber Synth

A futuristic, cyberpunk-inspired Hugo theme with retrowave aesthetics and modern AI elements.

## Features

- Sleek, dark purple color scheme with neon accents
- Futuristic UI with cyberpunk-inspired elements
- Retro gaming aesthetics with optional "hacker mode"
- Tech-centric design that's perfect for developers
- Scan line and CRT effects that evoke nostalgia
- Responsive design for all devices
- Custom shortcodes for tech and music-related content
- Multiple color schemes (Neon Purple, Synthwave)
- Mobile-friendly navigation

## Installation

1. Add the theme to your Hugo site's `themes` directory:
   ```
   git clone https://github.com/yourusername/hugo-theme-cyber-synth.git themes/cyber-synth
   ```

2. Update your site's configuration file `config.toml`:
   ```toml
   theme = "cyber-synth"
   ```

## Configuration

The theme offers several configuration options in your `config.toml`:

```toml
[params]
  # Available theme colors: "neon-purple" or "synthwave"
  themeColor = "neon-purple"

  # Enable hacker mode for retro gaming aesthetic
  hacker = true

  # Center content
  centerTheme = true

  # Full width layout
  fullWidthTheme = false

  # Site description
  description = "Your site description here"
```

## Special Effects

The theme includes several special effects:

- **Glitch Effect**: Hover over titles to see a text scramble animation
- **Scan Lines**: A subtle CRT effect across the entire site
- **Loading Screen**: A retro-style loading screen when the page loads
- **Mouse Parallax**: Subtle movement of elements based on mouse position

## Custom Classes

The theme includes special CSS classes for various content types:

- `.cyber-button`: Styled button with hover effects
- `.cyber-tag`: Tag styling for categories and tags
- `.cyber-article`: Styled article container
- `.cyber-post-card`: Styled card for post listings

## Browser Support

Cyber Synth works in all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Credits

This theme was inspired by cyberpunk aesthetics, retrowave visuals, and the terminal theme by panr.

## License

This theme is released under the MIT license.