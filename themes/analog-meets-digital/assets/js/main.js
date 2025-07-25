/**
 * Analog Digital - Professional Studio JavaScript
 * Sophisticated, music-inspired interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Professional studio initialization
    initializeStudioEnvironment();
    initializeVinylInteractions();
    initializeProfessionalAnimations();
    initializeThemeSelector();
    initializeAccessibilityEnhancements();
});

/**
 * Initialize professional studio environment
 */
function initializeStudioEnvironment() {
    const body = document.body;
    body.classList.add('studio-ready');

    // Professional page load transition
    setTimeout(() => {
        body.classList.add('studio-active');
    }, 150);

    // Professional scroll-based effects
    let ticking = false;
    let scrollProgress = 0;

    function updateScrollEffects() {
        const scrolled = window.scrollY;
        const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress = maxHeight > 0 ? scrolled / maxHeight : 0;

        // Update CSS custom properties for scroll-based effects
        document.documentElement.style.setProperty('--scroll-progress', scrollProgress);

        // Update studio indicators based on scroll
        updateStudioIndicators(scrollProgress);

        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }, { passive: true });
}

/**
 * Initialize vinyl record and music-inspired interactions
 */
function initializeVinylInteractions() {
    const vinylRecords = document.querySelectorAll('.vinyl-record');

    vinylRecords.forEach(vinyl => {
        // Professional hover interaction for vinyl records
        vinyl.addEventListener('mouseenter', function() {
            this.style.animationDuration = '2s';
        });

        vinyl.addEventListener('mouseleave', function() {
            this.style.animationDuration = '8s';
        });
    });

    // Professional title interactions (replacing glitch effects)
    const titles = document.querySelectorAll('.analog-article__title, .analog-post-card__title, h1, h2, h3');

    titles.forEach(title => {
        const originalText = title.textContent;

        // Subtle professional hover effect
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
            this.style.textShadow = '0 2px 8px rgba(214, 158, 46, 0.2)';
        });

        title.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.textShadow = 'none';
        });
    });
}

/**
 * Initialize professional animations and micro-interactions
 */
function initializeProfessionalAnimations() {
    // Professional card hover effects
    const cards = document.querySelectorAll('.analog-post-card, .cyber-post-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Professional button interactions
    const buttons = document.querySelectorAll('.analog-button, .cyber-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });

        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.02)';
        });
    });

    // Professional navigation link effects
    const navLinks = document.querySelectorAll('.analog-nav__link, .cyber-nav__link');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const indicator = this.querySelector('.analog-nav__indicator');
            if (indicator) {
                indicator.style.opacity = '1';
                indicator.style.transform = 'scale(1.2)';
            }
        });

        link.addEventListener('mouseleave', function() {
            const indicator = this.querySelector('.analog-nav__indicator');
            if (indicator) {
                indicator.style.opacity = '0.6';
                indicator.style.transform = 'scale(1)';
            }
        });
    });
}

/**
 * Initialize professional theme selector
 */
function initializeThemeSelector() {
    const themeButtons = document.querySelectorAll('.analog-theme-button');

    themeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const theme = this.dataset.theme;
            switchTheme(theme);
        });
    });
}

/**
 * Professional theme switching functionality
 */
function switchTheme(themeName) {
    // Remove existing theme classes
    document.body.className = document.body.className.replace(/theme-\w+/g, '');

    // Add new theme class
    document.body.classList.add(`theme-${themeName}`);

    // Store theme preference
    localStorage.setItem('analogTheme', themeName);

    // Professional transition effect
    document.body.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 500);

    // Update theme button states
    updateThemeButtonStates(themeName);

    console.log(`Theme switched to: ${themeName}`);
}

/**
 * Update theme button visual states
 */
function updateThemeButtonStates(activeTheme) {
    const themeButtons = document.querySelectorAll('.analog-theme-button');
    themeButtons.forEach(button => {
        const theme = button.dataset.theme;
        if (theme === activeTheme) {
            button.style.borderColor = 'var(--color-primary)';
            button.style.transform = 'scale(1.1)';
        } else {
            button.style.borderColor = 'var(--color-border)';
            button.style.transform = 'scale(1)';
        }
    });
}

/**
 * Update studio indicators based on interaction state
 */
function updateStudioIndicators(progress) {
    const indicators = document.querySelectorAll('.studio-indicator');

    indicators.forEach((indicator, index) => {
        const threshold = (index + 1) * 0.25;
        if (progress >= threshold) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

/**
 * Initialize professional accessibility enhancements
 */
function initializeAccessibilityEnhancements() {
    // Professional keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });

    // Professional focus management
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--color-primary)';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

/**
 * Professional mobile navigation handling
 */
function initializeMobileNavigation() {
    const navToggle = document.getElementById('analog-nav-toggle');
    const navOverlay = document.querySelector('.analog-nav-overlay');

    if (navToggle && navOverlay) {
        navToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('nav-open');
                navOverlay.style.opacity = '1';
                navOverlay.style.visibility = 'visible';
            } else {
                document.body.classList.remove('nav-open');
                navOverlay.style.opacity = '0';
                navOverlay.style.visibility = 'hidden';
            }
        });

        navOverlay.addEventListener('click', function() {
            navToggle.checked = false;
            document.body.classList.remove('nav-open');
            this.style.opacity = '0';
            this.style.visibility = 'hidden';
        });
    }
}

/**
 * Professional VU meter animations
 */
function animateVUMeters() {
    const vuMeters = document.querySelectorAll('.vu-meter');

    vuMeters.forEach(meter => {
        const bars = meter.querySelectorAll('.vu-meter__bar');

        setInterval(() => {
            bars.forEach((bar, index) => {
                const shouldActivate = Math.random() > 0.3;
                const isPeak = Math.random() > 0.8;

                bar.classList.remove('vu-meter__bar--active', 'vu-meter__bar--peak');

                if (shouldActivate) {
                    if (isPeak && index > bars.length - 3) {
                        bar.classList.add('vu-meter__bar--peak');
                    } else {
                        bar.classList.add('vu-meter__bar--active');
                    }
                }
            });
        }, 200 + Math.random() * 300);
    });
}

/**
 * Professional studio equipment simulation
 */
function initializeStudioEquipment() {
    // Initialize VU meters
    animateVUMeters();

    // Initialize studio knobs
    const knobs = document.querySelectorAll('.studio-knob');
    knobs.forEach(knob => {
        let isDragging = false;
        let currentRotation = 0;

        knob.addEventListener('mousedown', function(e) {
            isDragging = true;
            e.preventDefault();
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                currentRotation += e.movementX;
                currentRotation = Math.max(-150, Math.min(150, currentRotation));
                knob.style.transform = `rotate(${currentRotation}deg)`;
            }
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
    });
}

/**
 * Professional performance optimizations
 */
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            // Scroll-based optimizations
            const scrolled = window.scrollY;
            if (scrolled > 100) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        }, 16);
    }, { passive: true });

    // Optimize animations for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-speed', '0.01s');
    }
}

// Initialize all professional features
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileNavigation();
    initializeStudioEquipment();
    optimizePerformance();

    // Load saved theme preference
    const savedTheme = localStorage.getItem('analogTheme');
    if (savedTheme) {
        switchTheme(savedTheme);
    } else {
        // Set default theme
        switchTheme('warm-gold');
    }
});

// Professional window load optimizations
window.addEventListener('load', function() {
    // Remove any loading states
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');

    // Initialize performance observers if supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.analog-post-card, .analog-article').forEach(el => {
            observer.observe(el);
        });
    }
});