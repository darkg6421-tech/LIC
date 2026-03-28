// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            policyInterest: document.getElementById('policyInterest').value,
            message: document.getElementById('message').value
        };
        
        // Here you can add your form submission logic
        // For now, we'll show a success message
        alert(`Thank you ${formData.name} for reaching out!\n\nI will contact you soon regarding ${formData.policyInterest || 'LIC policies'}.\n\n- Pokhan Singh Faujdar\nLIC Agent Code: 11658196`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Add animation to cards
document.querySelectorAll('.policy-card, .achievement-card, .testimonial-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Sticky header on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Display current year in footer
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
}

// WhatsApp click handler
document.querySelectorAll('.social-icon .fa-whatsapp').forEach(icon => {
    icon.parentElement.addEventListener('click', (e) => {
        e.preventDefault();
        const phone = '919413113431';
        const message = encodeURIComponent('Hello Pokhan Singh ji, I am interested in LIC policies. Please contact me.');
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    });
});

// Phone number click handler
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Track phone number click if needed
        console.log('Phone number clicked');
    });
});

// Add tooltips for policy cards
document.querySelectorAll('.policy-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize AOS-like animations
window.addEventListener('load', () => {
    // Show all elements after load
    document.querySelectorAll('section, .policy-card, .achievement-card, .testimonial-card').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});
