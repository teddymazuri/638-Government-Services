// Main JavaScript for 638 Government Services Website

// ===== Configuration =====
const CONFIG = {
    siteName: "638 Government Services",
    currentYear: new Date().getFullYear(),
    pages: [
        { name: "Home", path: "index.html" },
        { name: "What We Offer", path: "services.html" },
        { name: "About Us", path: "about.html" },
        { name: "How We Work", path: "process.html" },
        { name: "Contact", path: "contact.html" }
    ],
    contactInfo: {
        phone: "+1 (555) 638-GOVT",
        email: "procurement@638govservices.com",
        address: "123 Government Way, Washington, DC 20001"
    }
};

// ===== IMMEDIATE NAVIGATION LOADING =====
// Load navigation immediately when script runs
(function loadNavigationImmediately() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Generate navigation HTML
    const navHTML = `
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <i class="fas fa-shield-alt me-2"></i>
                    <span class="brand-main">638</span>
                    <span class="brand-accent">GOV SERVICES</span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'index.html' ? 'active' : ''}" 
                               href="index.html" 
                               ${currentPage === 'index.html' ? 'aria-current="page"' : ''}>
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'services.html' ? 'active' : ''}" 
                               href="services.html" 
                               ${currentPage === 'services.html' ? 'aria-current="page"' : ''}>
                                What We Offer
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'about.html' ? 'active' : ''}" 
                               href="about.html" 
                               ${currentPage === 'about.html' ? 'aria-current="page"' : ''}>
                                About Us
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'process.html' ? 'active' : ''}" 
                               href="process.html" 
                               ${currentPage === 'process.html' ? 'aria-current="page"' : ''}>
                                How We Work
                            </a>
                        </li>
                        <!--
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'contact.html' ? 'active' : ''}" 
                               href="contact.html" 
                               ${currentPage === 'contact.html' ? 'aria-current="page"' : ''}>
                                Contact
                            </a>
                        </li>
                        -->
                        <li class="nav-item ms-lg-3">
                            <a class="btn btn-primary" href="contact.html">Get Started</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    
    // Insert navigation at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Initialize scroll effect immediately
    initNavigationScroll();
})();

// ===== MAIN INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Load footer and other components
    loadFooter();
    loadBackToTop();
    loadPrivacyModal();
    
    // Initialize all components
    initializeDynamicComponents();
    initContactForm();
    initScrollAnimations();
    initAccessibilityFeatures();
    initHeroAnimations();
    initPerformanceOptimization();
    initErrorHandling();
    checkBrowserCompatibility();
});

// ===== Footer =====
function loadFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="footer-brand">
                            <h3>638 <span>GOV SERVICES</span></h3>
                            <p>Delivering excellence in public service through technological innovation and strategic partnership.</p>
                        </div>

                        <div class="social-links mt-4">
                            <a href="#" class="social-link" aria-label="LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="Twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="YouTube">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-4 mb-5 mb-md-0">
                        <h5>Services</h5>
                        <ul class="footer-links">
                            <li><a href="services.html#federal">Federal Consulting</a></li>
                            <li><a href="services.html#state">State Modernization</a></li>
                            <li><a href="services.html">County Operations</a></li>
                            <li><a href="services.html">Smart Cities</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-4 mb-5 mb-md-0">
                        <h5>Company</h5>
                        <ul class="footer-links">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="process.html">How We Work</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-4">
                        <h5>Stay Updated</h5>
                        <p class="mb-3">Subscribe to our government insights newsletter.</p>

                        <form class="newsletter-form" id="newsletterForm">
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="Your work email" required aria-label="Email for newsletter">
                                <button class="btn btn-primary" type="submit">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <hr class="footer-divider">

                <div class="footer-bottom">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="mb-0">&copy; ${CONFIG.currentYear} 638 Government Services. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-md-end">
                            <p class="mb-0">Compliant with FISMA, NIST, and FedRAMP standards</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// ===== Back to Top Button =====
function loadBackToTop() {
    const backToTopHTML = `
        <button id="backToTop" class="back-to-top" aria-label="Back to top">
            <i class="fas fa-chevron-up"></i>
        </button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', backToTopHTML);
}

// ===== Privacy Modal =====
function loadPrivacyModal() {
    const modalHTML = `
        <div class="modal fade" id="privacyModal" tabindex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="privacyModalLabel">Privacy Policy</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h6>Government Data Protection</h6>
                        <p>638 Government Services is committed to protecting the privacy and security of government data. We adhere to all federal, state, and local regulations regarding data protection and privacy.</p>
                        
                        <h6 class="mt-4">Information Collection</h6>
                        <p>We collect only information necessary to provide government services, including agency contact information and project requirements. All information is handled in accordance with government security standards.</p>
                        
                        <h6 class="mt-4">Data Security</h6>
                        <p>We implement security measures compliant with FISMA, NIST, and FedRAMP standards to protect against unauthorized access, alteration, disclosure, or destruction of government information.</p>
                        
                        <h6 class="mt-4">Contact</h6>
                        <p>For privacy-related inquiries, contact our security team at security@638govservices.com</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// ===== Initialize Dynamic Components =====
function initializeDynamicComponents() {
    // Initialize back to top button
    initBackToTopButton();
    
    // Initialize newsletter form
    initNewsletterForm();
    
    // Initialize tooltips
    initTooltips();
    
    // Update current year in any remaining elements
    updateCurrentYear();
}

// ===== Navigation Scroll Effect =====
function initNavigationScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    // Check initial scroll position
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, href);
                
                // Close mobile navbar if open
                const navbarCollapse = document.querySelector('.navbar-collapse.show');
                if (navbarCollapse && bootstrap && bootstrap.Collapse) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

// ===== Back to Top Button =====
function initBackToTopButton() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) return;
    
    // Check initial scroll position
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Newsletter Form =====
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            showNewsletterMessage('Please enter your email address.', 'warning');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNewsletterMessage('Please enter a valid email address.', 'warning');
            return;
        }
        
        // Simulate subscription
        const button = this.querySelector('button');
        const originalHtml = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        button.disabled = true;
        
        setTimeout(() => {
            showNewsletterMessage('Thank you for subscribing to our government insights newsletter!', 'success');
            emailInput.value = '';
            button.innerHTML = originalHtml;
            button.disabled = false;
        }, 1000);
    });
    
    function showNewsletterMessage(message, type) {
        // Create or get message container
        let messageContainer = document.querySelector('.newsletter-message');
        if (!messageContainer) {
            messageContainer = document.createElement('div');
            messageContainer.className = 'newsletter-message mt-2';
            newsletterForm.parentNode.appendChild(messageContainer);
        }
        
        messageContainer.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show small" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            const alert = messageContainer.querySelector('.alert');
            if (alert && alert.parentNode) {
                const bsAlert = bootstrap ? new bootstrap.Alert(alert) : null;
                if (bsAlert) {
                    bsAlert.close();
                } else {
                    alert.remove();
                }
            }
        }, 5000);
    }
}

// ===== Tooltips =====
function initTooltips() {
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl, {
                trigger: 'hover focus'
            });
        });
    }
}

// ===== Update Current Year =====
function updateCurrentYear() {
    const currentYearElements = document.querySelectorAll('[data-current-year]');
    
    currentYearElements.forEach(element => {
        element.textContent = CONFIG.currentYear;
    });
    
    // Also update any hardcoded years in the page
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText && footerText.textContent.includes('2023')) {
        footerText.textContent = footerText.textContent.replace('2023', CONFIG.currentYear);
    }
}

// ===== Contact Form Submission =====
function initContactForm() {
    const contactForm = document.getElementById('governmentContactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: document.getElementById('contactFirstName')?.value.trim() || '',
            lastName: document.getElementById('contactLastName')?.value.trim() || '',
            title: document.getElementById('contactTitle')?.value.trim() || '',
            agency: document.getElementById('contactAgency')?.value.trim() || '',
            email: document.getElementById('contactEmail')?.value.trim() || '',
            phone: document.getElementById('contactPhone')?.value.trim() || '',
            serviceInterest: document.getElementById('serviceInterest')?.value || '',
            projectDescription: document.getElementById('projectDescription')?.value.trim() || ''
        };
        
        // Validate form
        const requiredFields = ['firstName', 'lastName', 'title', 'agency', 'email', 'serviceInterest', 'projectDescription'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        
        if (missingFields.length > 0) {
            showFormMessage('Please fill in all required fields.', 'danger');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormMessage('Please enter a valid government email address.', 'danger');
            return;
        }
        
        // Phone validation (if provided)
        if (formData.phone) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
            if (!phoneRegex.test(cleanPhone)) {
                showFormMessage('Please enter a valid phone number.', 'danger');
                return;
            }
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Log form data (in production, send to server)
            console.log('Government Inquiry Submitted:', {
                ...formData,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            });
            
            // Show success message
            showFormMessage('Thank you for your inquiry! Our government procurement team will contact you within 24 business hours. A confirmation has been sent to your email.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
            // Scroll to message
            if (formMessage) {
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            
        }, 1500);
    });
    
    function showFormMessage(message, type) {
        if (!formMessage) return;
        
        formMessage.textContent = message;
        formMessage.className = `alert alert-${type} alert-dismissible fade show`;
        formMessage.classList.remove('d-none');
        
        // Add close button if not present
        if (!formMessage.querySelector('.btn-close')) {
            const closeButton = document.createElement('button');
            closeButton.type = 'button';
            closeButton.className = 'btn-close';
            closeButton.setAttribute('data-bs-dismiss', 'alert');
            closeButton.setAttribute('aria-label', 'Close');
            formMessage.appendChild(closeButton);
        }
        
        // Auto-hide message after 8 seconds
        setTimeout(() => {
            if (bootstrap) {
                const alert = bootstrap.Alert.getInstance(formMessage);
                if (alert) {
                    alert.close();
                } else if (formMessage.classList.contains('show')) {
                    formMessage.classList.remove('show');
                    setTimeout(() => formMessage.classList.add('d-none'), 150);
                }
            } else {
                if (formMessage.classList.contains('show')) {
                    formMessage.classList.remove('show');
                    setTimeout(() => formMessage.classList.add('d-none'), 150);
                }
            }
        }, 8000);
    }
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Service cards animation
    const serviceObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card').forEach(card => {
        serviceObserver.observe(card);
    });
    
    // Process steps animation
    const processObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 200);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.process-step').forEach(step => {
        processObserver.observe(step);
    });
    
    // Feature items animation
    const featureObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 150);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        featureObserver.observe(item);
    });
    
    // Stat items animation
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatIcons();
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statObserver.observe(heroStats);
    }
}

function animateStatIcons() {
    const icons = document.querySelectorAll('.stat-item i');
    icons.forEach((icon, index) => {
        icon.style.transform = 'scale(0)';
        icon.style.opacity = '0';
        
        setTimeout(() => {
            icon.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            icon.style.transform = 'scale(1)';
            icon.style.opacity = '1';
        }, index * 200);
    });
}

// ===== Accessibility Features =====
function initAccessibilityFeatures() {
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu on Escape
        if (e.key === 'Escape') {
            const isMenuOpen = document.querySelector('.navbar-collapse.show');
            if (isMenuOpen && bootstrap && bootstrap.Collapse) {
                const bsCollapse = new bootstrap.Collapse(isMenuOpen);
                bsCollapse.hide();
            }
            
            // Close any open modal
            const openModal = document.querySelector('.modal.show');
            if (openModal && bootstrap && bootstrap.Modal) {
                const modal = bootstrap.Modal.getInstance(openModal);
                if (modal) modal.hide();
            }
        }
        
        // Trap focus in mobile menu when open
        if (e.key === 'Tab') {
            const menu = document.querySelector('.navbar-collapse.show');
            if (menu) {
                const focusableElements = menu.querySelectorAll(
                    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                
                if (focusableElements.length === 0) return;
                
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
    
    // Add ARIA labels to interactive elements
    const backToTop = document.getElementById('backToTop');
    if (backToTop && !backToTop.hasAttribute('aria-label')) {
        backToTop.setAttribute('aria-label', 'Back to top');
    }
    
    // Improve form accessibility
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            if (!input.id) {
                const name = input.name || input.type || 'input';
                input.id = `${name}-${Math.random().toString(36).substr(2, 9)}`;
            }
            
            const label = form.querySelector(`label[for="${input.id}"]`);
            if (!label && !input.getAttribute('aria-label')) {
                const placeholder = input.getAttribute('placeholder');
                if (placeholder) {
                    input.setAttribute('aria-label', placeholder);
                }
            }
        });
    });
    
    // Lazy loading for images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            if (img.dataset.src) {
                img.loading = 'lazy';
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
        });
    }
}

// ===== Hero Animations =====
function initHeroAnimations() {
    // Animate hero title on load
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.8s ease-out';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Animate hero text
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroText.style.transition = 'all 0.8s ease-out 0.2s';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Animate hero buttons
    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroButtons.style.transition = 'all 0.8s ease-out 0.4s';
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 700);
    }
}

// ===== Performance Optimization =====
function initPerformanceOptimization() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            // Delayed scroll actions if needed
        }, 100);
    });

    // Intersection Observer for lazy loading images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===== Browser Compatibility Checks =====
function checkBrowserCompatibility() {
    const isIE = !!document.documentMode;
    const isOldEdge = !isIE && !!window.StyleMedia;
    
    if (isIE || isOldEdge) {
        console.warn('Browser compatibility warning: Consider updating to a modern browser for best experience.');
        
        // Show a subtle message to users
        const compatibilityWarning = document.createElement('div');
        compatibilityWarning.className = 'alert alert-warning alert-dismissible fade show m-3';
        compatibilityWarning.style.position = 'fixed';
        compatibilityWarning.style.bottom = '0';
        compatibilityWarning.style.right = '0';
        compatibilityWarning.style.left = '0';
        compatibilityWarning.style.zIndex = '1050';
        compatibilityWarning.style.maxWidth = '600px';
        compatibilityWarning.style.margin = '0 auto';
        compatibilityWarning.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-exclamation-triangle me-2"></i>
                <div class="flex-grow-1">
                    For the best experience, please use a modern browser like Chrome, Firefox, or Edge.
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        
        document.body.appendChild(compatibilityWarning);
        
        // Auto-dismiss after 10 seconds
        setTimeout(() => {
            if (compatibilityWarning.parentNode) {
                if (bootstrap && bootstrap.Alert) {
                    const alert = new bootstrap.Alert(compatibilityWarning);
                    alert.close();
                } else {
                    compatibilityWarning.remove();
                }
            }
        }, 10000);
    }
}

// ===== Error Handling =====
function initErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('Error occurred:', e.error);
        // You could send this to an error tracking service here
    });
    
    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
    });
}

// Make functions available globally if needed
window.loadDynamicComponents = {
    loadNavigationImmediately,
    loadFooter,
    loadBackToTop,
    loadPrivacyModal
};
