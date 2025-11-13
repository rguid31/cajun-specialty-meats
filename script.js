// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });

        // Close mobile menu when scrolling
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // If menu is open and user scrolls, close it
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }

            lastScrollTop = scrollTop;
        }, false);
    }

    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            const newsletter = document.getElementById('newsletter').checked;

            // Basic validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (replace with actual backend call)
            showFormMessage('Thank you for contacting us! We\'ll get back to you soon.', 'success');

            // Reset form after successful submission
            setTimeout(() => {
                contactForm.reset();
                formMessage.style.display = 'none';
                formMessage.className = 'form-message';
            }, 5000);

            // Log form data (for demonstration - remove in production)
            console.log('Form submitted:', {
                name,
                email,
                phone,
                message,
                newsletter
            });
        });
    }

    // Helper function to show form messages
    function showFormMessage(text, type) {
        if (formMessage) {
            formMessage.textContent = text;
            formMessage.className = `form-message ${type}`;
        }
    }

    // Newsletter Signup Form Handler
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterMessage = document.getElementById('newsletterMessage');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('newsletter-email').value.trim();

            // Basic email validation
            if (!email) {
                showNewsletterMessage('Please enter your email address.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNewsletterMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate newsletter signup (replace with actual backend call)
            showNewsletterMessage('Thank you! You\'ve been successfully subscribed to our mailing list.', 'success');

            // Reset form after successful submission
            setTimeout(() => {
                newsletterForm.reset();
                newsletterMessage.style.display = 'none';
                newsletterMessage.className = 'newsletter-message';
            }, 5000);

            // Log subscription data (for demonstration - remove in production)
            console.log('Newsletter subscription:', { email });
        });
    }

    // Helper function to show newsletter messages
    function showNewsletterMessage(text, type) {
        if (newsletterMessage) {
            newsletterMessage.textContent = text;
            newsletterMessage.className = `newsletter-message ${type}`;
        }
    }

    // Helper function for email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

});
