// Dados dos projetos
const projects = [
    {
        title: 'Cloud SysteM',
        description: 'Site com um Design incrível e elegante pra uma Loja de Aplicações',
        technologies: ['Html', 'Css', 'Js'],
        link: 'https://cloud-system.vercel.app/',
        image: 'img/projeto.gif'  // Consider using an SVG
    },
    {
        title: 'Site de Flores',
        description: 'Site com um Designer incrível e elegante com sistema de Api de Whatsapp',
        technologies: ['Html', 'Css', 'Js'],
        link: 'https://buqueartesanais.vercel.app/',
        image: 'img/projeto2.gif'
    },
    {
        title: 'Byte Links',
        description: 'A Byte Links é uma plataforma que permite o encurtamento de qualquer link que você desejar, o deixando mais elegante, sem números malucos e textos gigantes!',
        technologies: ['Html', 'Css', 'JavaScript', 'Node.js'],
        link: 'https://bytelinks.vercel.app/',
        image: 'img/projeto3.gif'
    },
    {
        title: 'Dev Finder',
        description: 'Site com um Design incrível e elegante pra uma Loja de Aplicações',
        technologies: ['Html', 'Css', 'Js' , 'Node.js'],
        link: 'https://dev-finder-user.vercel.app/',
        image: 'img/projeto4.gif'  // Consider using an SVG
    }
];

// Add experience data
const experiences = [
    {
        language: 'HTML5',
        icon: 'fab fa-html5',
        color: '#E34F26',
        description: 'Especialista em HTML, criando estruturas semânticas e acessíveis para web. Domínio em tags semânticas, formulários modernos e boas práticas de marcação.'
    },
    {
        language: 'CSS3',
        icon: 'fab fa-css3-alt',
        color: '#1572B6',
        description: 'Mestre em CSS, desenvolvendo layouts responsivos, animações sofisticadas e design moderno. Expertise em Flexbox, Grid e técnicas avançadas de estilização.'
    },
    {
        language: 'JavaScript',
        icon: 'fab fa-js',
        color: '#F7DF1E',
        description: 'Desenvolvedor JavaScript avançado, criando aplicações interativas e dinâmicas. Experiência com ES6+, manipulação de DOM e desenvolvimento de interfaces complexas.'
    },
    {
        language: 'NodeJs',
        icon: 'fab fa-node-js',
        color: '#339933',
        description: 'Desenvolvedor Node.js avançado, criando bots personalizados e soluções dinâmicas. Experiência em otimização de performance, integração de APIs e desenvolvimento de sistemas escaláveis e eficientes.'
    }
];

function renderExperiences() {
    const experiencesContainer = document.querySelector('.experiences-grid');
    
    experiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.classList.add('experience-item');
        expItem.innerHTML = `
            <div class="experience-icon" style="color: ${exp.color}">
                <i class="${exp.icon}"></i>
                <span>${exp.language}</span>
            </div>
            <div class="experience-description">
                <p>${exp.description}</p>
            </div>
        `;
        
        // Add click event to show/hide description
        expItem.querySelector('.experience-icon').addEventListener('click', () => {
            expItem.classList.toggle('show-description');
        });
        
        experiencesContainer.appendChild(expItem);
    });
}

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">Explorar Projeto</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
        
        // Moon Knight-inspired GSAP animation
        if (window.gsap) {
            window.gsap.fromTo(projectCard, 
                { 
                    opacity: 0, 
                    y: 50, 
                    rotationX: -15 
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                    delay: index * 0.2  // Staggered animation
                }
            );
        }
    });
}

// Initialize both on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderExperiences();
});