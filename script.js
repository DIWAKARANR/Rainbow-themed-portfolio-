document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Intersection Observer for section animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });

    // Rainbow cursor trail effect
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);

    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        cursorTrail.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 1000);
    });

    // Rainbow text animation for headings
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        const text = heading.textContent;
        heading.textContent = '';
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.animationDelay = `${i * 0.1}s`;
            heading.appendChild(span);
        }
    });

    // Rainbow wave effect
    const wave = document.createElement('div');
    wave.className = 'rainbow-wave';
    document.body.appendChild(wave);

    function createWave() {
        const waveSegment = document.createElement('div');
        waveSegment.className = 'wave-segment';
        wave.appendChild(waveSegment);

        const duration = Math.random() * 2 + 1;
        const width = Math.random() * 50 + 50;
        const left = Math.random() * 100;

        waveSegment.style.animation = `waveAnim ${duration}s linear`;
        waveSegment.style.width = `${width}px`;
        waveSegment.style.left = `${left}%`;

        waveSegment.addEventListener('animationend', () => {
            waveSegment.remove();
        });
    }

    setInterval(createWave, 200);
});
