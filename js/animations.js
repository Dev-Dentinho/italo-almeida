function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.querySelector('i').classList.toggle('fa-bars');
        mobileMenuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenuToggle.querySelector('i').classList.remove('fa-times');
            mobileMenuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
}

function initPageAnimations() {
    // Check if GSAP is available
    if (window.gsap) {
        // Animação do cabeçalho
        window.gsap.from('header', {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: 'power2.out'
        });

        // Animação da seção inicial
        window.gsap.from('#home .hero-content', {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: 'back.out(1.7)'
        });
    }

    // Usar AOS global se disponível
    if (window.AOS) {
        window.AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
    
    // Smooth Scrolling and Active Nav Highlight
    function initNavigation() {
        const navLinks = document.querySelectorAll('nav ul li a');
        const sections = document.querySelectorAll('section');

        // Smooth Scrolling
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                targetSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        });

        // Active Section Tracking
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
                
                // Add active class to corresponding link
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }

    initNavigation();
    
    function initTypingEffect() {
        const typedElement = document.getElementById('typed-subtitle');
        if (typedElement && window.Typed) {
            new window.Typed('#typed-subtitle', {
                strings: ['Dev Front-End', 'Dev Bots JS', 'Entrega de Alto Nível'],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                backDelay: 2000
            });
        }
    }
    initTypingEffect();
    
    initMobileMenu();
}

// Inicializar animações quando o DOM carregar
document.addEventListener('DOMContentLoaded', initPageAnimations);