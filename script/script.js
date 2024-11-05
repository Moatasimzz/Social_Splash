document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling effect for the navbar
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
});
// Adding animations to sections when scrolled into view
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from(entry.target, {
                duration: 1,
                y: 50,
                opacity: 1,
                ease: "power1.out",
            });
            entry.target.classList.add('section-visible'); // Add visible class
            entry.target.classList.remove('section-hidden'); // Remove hidden class
        } else {
            entry.target.classList.add('section-hidden'); // Add hidden class
            entry.target.classList.remove('section-visible'); // Remove visible class
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
    section.classList.add('section-visible'); // Initialize as visible
});
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    document.getElementById('contact-form').reset();
});
});
