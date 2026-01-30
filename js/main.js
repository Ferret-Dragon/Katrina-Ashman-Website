// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default for internal links (not just "#")
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject')?.value || 'No subject',
            message: document.getElementById('message').value
        };

        // Here you would typically send the form data to a server
        // For now, we'll just log it and show an alert
        console.log('Form submitted:', formData);

        alert('Thank you for your message! I will get back to you soon.');

        // Reset the form
        contactForm.reset();
    });
}

// Add active state to navigation links based on current page
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (currentLocation.includes(linkPath) && linkPath !== '/') {
        link.style.color = 'var(--primary-color)';
    }
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// Parallax effect for hero section
const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content-wrapper');

if (heroSection && heroContent) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;

        // Only apply parallax when hero section is visible
        if (scrollPosition < heroHeight) {
            // Background scrolls slower (0.5x speed)
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

            // Content scrolls slightly slower than normal (0.3x speed)
            // This creates the depth effect
            heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });
}

// Image lazy loading fallback for older browsers
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Console message
console.log('%cWelcome to my portfolio!', 'color: #700000; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out my GitHub!', 'color: #0F4210; font-size: 14px;');

// ===================================
// PARTICLE ANIMATION SYSTEM
// ===================================
const canvas = document.getElementById('particles-canvas');

if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationId;

    // Set canvas size
    function setCanvasSize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    setCanvasSize();

    // Handle resize
    window.addEventListener('resize', () => {
        setCanvasSize();
        initParticles();
    });

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around screen
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize particles
    function initParticles() {
        particlesArray = [];
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 8000);

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    // Connect particles with lines
    function connectParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i + 1; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const opacity = (1 - distance / 100) * 0.3;
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesArray.forEach(particle => {
            particle.update();
            particle.draw();
        });

        connectParticles();

        animationId = requestAnimationFrame(animate);
    }

    // Start animation
    initParticles();
    animate();

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
}
