// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
    theme: {
        extend: {
            // Add any custom theme extensions here if needed
        }
    },
    plugins: [
        function ({ addUtilities }) {
            const rotateXUtilities = {};
            const rotateYUtilities = {};
            const rotateZUtilities = {};
            const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];

            // Generate rotate-x utilities
            rotateValues.forEach((value) => {
                rotateXUtilities[`.rotate-x-${value}`] = {
                    '--tw-rotate-x': `${value}deg`,
                    transform: `
                        translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
                        rotateX(var(--tw-rotate-x, 0))
                        rotateY(var(--tw-rotate-y, 0))
                        rotateZ(var(--tw-rotate-z, 0))
                        skewX(var(--tw-skew-x, 0))
                        skewY(var(--tw-skew-y, 0))
                        scaleX(var(--tw-scale-x, 1))
                        scaleY(var(--tw-scale-y, 1))
                    `.replace(/\s+/g, ' ').trim(),
                };
                if (value !== 0) {
                    rotateXUtilities[`.-rotate-x-${value}`] = {
                        '--tw-rotate-x': `-${value}deg`,
                        transform: `
                            translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
                            rotateX(var(--tw-rotate-x, 0))
                            rotateY(var(--tw-rotate-y, 0))
                            rotateZ(var(--tw-rotate-z, 0))
                            skewX(var(--tw-skew-x, 0))
                            skewY(var(--tw-skew-y, 0))
                            scaleX(var(--tw-scale-x, 1))
                            scaleY(var(--tw-scale-y, 1))
                        `.replace(/\s+/g, ' ').trim(),
                    };
                }
            });

            // Generate rotate-y utilities
            rotateValues.forEach((value) => {
                rotateYUtilities[`.rotate-y-${value}`] = {
                    '--tw-rotate-y': `${value}deg`,
                    transform: `
                        translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
                        rotateX(var(--tw-rotate-x, 0))
                        rotateY(var(--tw-rotate-y, 0))
                        rotateZ(var(--tw-rotate-z, 0))
                        skewX(var(--tw-skew-x, 0))
                        skewY(var(--tw-skew-y, 0))
                        scaleX(var(--tw-scale-x, 1))
                        scaleY(var(--tw-scale-y, 1))
                    `.replace(/\s+/g, ' ').trim(),
                };
                if (value !== 0) {
                    rotateYUtilities[`.-rotate-y-${value}`] = {
                        '--tw-rotate-y': `-${value}deg`,
                        transform: `
                            translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
                            rotateX(var(--tw-rotate-x, 0))
                            rotateY(var(--tw-rotate-y, 0))
                            rotateZ(var(--tw-rotate-z, 0))
                            skewX(var(--tw-skew-x, 0))
                            skewY(var(--tw-skew-y, 0))
                            scaleX(var(--tw-scale-x, 1))
                            scaleY(var(--tw-scale-y, 1))
                        `.replace(/\s+/g, ' ').trim(),
                    };
                }
            });

            // Generate rotate-z utilities
            rotateValues.forEach((value) => {
                rotateZUtilities[`.rotate-z-${value}`] = {
                    '--tw-rotate-z': `${value}deg`,
                    transform: `
                        translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
                        rotateX(var(--tw-rotate-x, 0))
                        rotateY(var(--tw-rotate-y, 0))
                        rotateZ(var(--tw-rotate-z, 0))
                        skewX(var(--tw-skew-x, 0))
                        skewY(var(--tw-skew-y, 0))
                        scaleX(var(--tw-scale-x, 1))
                        scaleY(var(--tw-scale-y, 1))
                    `.replace(/\s+/g, ' ').trim(),
                };
                if (value !== 0) {
                    rotateZUtilities[`.-rotate-z-${value}`] = {
                        '--tw-rotate-z': `-${value}deg`,
                        transform: `
                            translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
                            rotateX(var(--tw-rotate-x, 0))
                            rotateY(var(--tw-rotate-y, 0))
                            rotateZ(var(--tw-rotate-z, 0))
                            skewX(var(--tw-skew-x, 0))
                            skewY(var(--tw-skew-y, 0))
                            scaleX(var(--tw-scale-x, 1))
                            scaleY(var(--tw-scale-y, 1))
                        `.replace(/\s+/g, ' ').trim(),
                    };
                }
            });

            // Perspective utilities
            const perspectiveUtilities = {
                ".perspective-none": { perspective: "none" },
                ".perspective-dramatic": { perspective: "100px" },
                ".perspective-near": { perspective: "300px" },
                ".perspective-normal": { perspective: "500px" },
                ".perspective-midrange": { perspective: "800px" },
                ".perspective-distant": { perspective: "1200px" },
            };

            // Transform style utilities
            const transformStyleUtilities = {
                ".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
                ".transform-style-flat": { "transform-style": "flat" },
            };

            addUtilities({
                ...rotateXUtilities,
                ...rotateYUtilities,
                ...rotateZUtilities,
                ...perspectiveUtilities,
                ...transformStyleUtilities,
            });
        }
    ]
};

// Simple parallax effect for the giant text
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const outlines = document.querySelectorAll('.text-outline');
    outlines.forEach((el, index) => {
        const speed = 0.15 * (index + 1);
        el.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    });
});

// Venue Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('explore-venue-btn');
    const modal = document.getElementById('venue-modal');
    const closeBtn = document.getElementById('close-venue-btn');
    const content = document.getElementById('venue-image-container');

    if (btn && modal && closeBtn) {
        btn.addEventListener('click', () => {
            modal.classList.remove('opacity-0', 'pointer-events-none');
            setTimeout(() => content.classList.remove('scale-95'), 50);
        });

        const close = () => {
            content.classList.add('scale-95');
            modal.classList.add('opacity-0', 'pointer-events-none');
        };

        closeBtn.addEventListener('click', close);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) close();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') close();
        });
    }
});

// Projects Carousel Logic
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('projects-carousel');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');

    if (carousel && prevBtn && nextBtn) {
        // Scroll amount: card width (approx 400px) + gap (32px)
        const scrollAmount = 432;

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
});
