/**
 * Cyber Synth - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Add glitch effect to title
  const glitchTitles = document.querySelectorAll('.cyber-article__title, .cyber-heading');

  glitchTitles.forEach(title => {
    const originalText = title.textContent;

    title.addEventListener('mouseover', function() {
      let iterations = 0;

      const interval = setInterval(() => {
        title.textContent = originalText
          .split('')
          .map((letter, index) => {
            if (index < iterations) {
              return originalText[index];
            }

            return String.fromCharCode(
              Math.floor(Math.random() * 26) + 65
            );
          })
          .join('');

        if (iterations >= originalText.length) {
          clearInterval(interval);
          title.textContent = originalText;
        }

        iterations += 1 / 3;
      }, 30);
    });
  });

  // Cyberpunk-style parallax effect
  window.addEventListener('mousemove', function(e) {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

    document.documentElement.style.setProperty('--mouse-x', moveX + 'px');
    document.documentElement.style.setProperty('--mouse-y', moveY + 'px');

    const scanLines = document.querySelector('.scan-lines');
    if (scanLines) {
      scanLines.style.transform = `translate(${moveX * 0.1}px, ${moveY * 0.1}px)`;
    }
  });

  // Add loading animation
  const addLoadingEffect = () => {
    const body = document.body;

    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.classList.add('loading-overlay');

    const loadingText = document.createElement('div');
    loadingText.classList.add('loading-text');
    loadingText.textContent = 'LOADING...';

    loadingOverlay.appendChild(loadingText);
    body.appendChild(loadingOverlay);

    // Remove loading overlay after everything is loaded
    setTimeout(() => {
      loadingOverlay.style.opacity = '0';

      setTimeout(() => {
        body.removeChild(loadingOverlay);
      }, 500);
    }, 1000);
  };

  addLoadingEffect();
});