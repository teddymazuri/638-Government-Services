// Main JavaScript for 638 Government Services Website

// ===== Active Navigation State =====
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
    });
    
    // Add active class to current page link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Check for exact match
        if (linkHref === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
        // Check for index/home page
        else if ((currentPage === '' || currentPage === 'index.html') && 
                    (linkHref === 'index.html' || linkHref === './' || linkHref === '/')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
        // Check for partial matches (for hash links on home page)
        else if (currentPage === 'index.html' && linkHref.startsWith('#')) {
            // Home page sections - don't mark as active
        }
    });
}

// Call this function in DOMContentLoaded

document.addEventListener('DOMContentLoaded', function() {
    // ===== Initialize Components =====
    initNavigation();
    initBackToTop();
    initContactForm();
    initScrollAnimations();
    initNewsletterForm();
    initAccessibilityFeatures();
    initCurrentYear();
    initTooltips();
    initHeroAnimations();

    // ===== Navigation Scroll Effect =====
    function initNavigation() {
        const navbar = document.querySelector('.navbar');
        
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
                    if (navbarCollapse) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    // ===== Back to Top Button =====
    function initBackToTop() {
        const backToTopButton = document.getElementById('backToTop');
        
        if (!backToTopButton) return;
        
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

    // ===== Contact Form Submission =====
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');
        
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value.trim(),
                lastName: document.getElementById('lastName').value.trim(),
                agency: document.getElementById('agency').value.trim(),
                email: document.getElementById('email').value.trim(),
                serviceType: document.getElementById('serviceType').value,
                message: document.getElementById('message').value.trim()
            };
            
            // Validate form
            if (!formData.firstName || !formData.lastName || !formData.agency || !formData.email || !formData.message) {
                showFormMessage('Please fill in all required fields.', 'danger');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormMessage('Please enter a valid email address.', 'danger');
                return;
            }
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            submitButton.disabled = true;
            
            // Simulate API call (replace with actual API integration)
            setTimeout(() => {
                // Log form data (in production, send to server)
                console.log('Form submitted:', {
                    ...formData,
                    timestamp: new Date().toISOString()
                });
                
                // Show success message
                showFormMessage('Thank you! Your inquiry has been submitted. Our procurement team will contact you within 24 hours.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Send confirmation email (would be server-side in production)
                simulateConfirmationEmail(formData);
                
                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
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
                const alert = bootstrap.Alert.getInstance(formMessage);
                if (alert) {
                    alert.close();
                } else if (formMessage.classList.contains('show')) {
                    formMessage.classList.remove('show');
                    setTimeout(() => formMessage.classList.add('d-none'), 150);
                }
            }, 8000);
        }
        
        function simulateConfirmationEmail(formData) {
            console.log('Confirmation email would be sent to:', formData.email);
            // In production, implement actual email sending logic here
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

    // ===== Newsletter Form =====
    function initNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        
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
            let messageContainer = newsletterForm.querySelector('.newsletter-message');
            if (!messageContainer) {
                messageContainer = document.createElement('div');
                messageContainer.className = 'newsletter-message mt-2';
                newsletterForm.appendChild(messageContainer);
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
                if (alert) {
                    const bsAlert = new bootstrap.Alert(alert);
                    bsAlert.close();
                }
            }, 5000);
        }
    }

    // ===== Accessibility Features =====
    function initAccessibilityFeatures() {
        // Add keyboard navigation support
        document.addEventListener('keydown', function(e) {
            // Close mobile menu on Escape
            if (e.key === 'Escape') {
                const isMenuOpen = document.querySelector('.navbar-collapse.show');
                if (isMenuOpen) {
                    const bsCollapse = new bootstrap.Collapse(isMenuOpen);
                    bsCollapse.hide();
                }
                
                // Close any open modal
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
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
        if (backToTop) {
            backToTop.setAttribute('aria-label', 'Back to top');
        }
        
        // Improve form accessibility
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (!input.id) {
                    const name = input.name || input.type;
                    input.id = `${name}-${Math.random().toString(36).substr(2, 9)}`;
                }
                
                const label = form.querySelector(`label[for="${input.id}"]`);
                if (!label && input.getAttribute('aria-label')) {
                    input.setAttribute('aria-label', input.getAttribute('aria-label'));
                }
            });
        });
        
        // Lazy loading for images
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        }
    }

    // ===== Current Year for Footer =====
    function initCurrentYear() {
        const currentYearElements = document.querySelectorAll('[data-current-year]');
        const currentYear = new Date().getFullYear();
        
        currentYearElements.forEach(element => {
            element.textContent = currentYear;
        });
        
        // Also update any hardcoded years in the footer
        const footerText = document.querySelector('.footer-bottom p');
        if (footerText && footerText.textContent.includes('2023')) {
            footerText.textContent = footerText.textContent.replace('2023', currentYear);
        }
    }

    // ===== Initialize Tooltips =====
    function initTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl, {
                trigger: 'hover focus'
            });
        });
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

    // ===== Form Validation Helpers =====
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validatePhone(phone) {
        const re = /^[\+]?[1-9][\d]{0,15}$/;
        return re.test(phone.replace(/[\s\-\(\)]/g, ''));
    }

    // ===== Error Handling =====
    window.addEventListener('error', function(e) {
        console.error('Error occurred:', e.error);
        // You could send this to an error tracking service here
    });

    // ===== Browser Compatibility Checks =====
    function checkBrowserCompatibility() {
        const isIE = !!document.documentMode;
        const isOldEdge = !isIE && !!window.StyleMedia;
        
        if (isIE || isOldEdge) {
            console.warn('Browser compatibility warning: Consider updating to a modern browser for best experience.');
            // You could show a polite message to users here
        }
    }
    
    checkBrowserCompatibility();

    // ===== Service Worker Registration (Optional) =====
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // You can register a service worker here for PWA capabilities
            // navigator.serviceWorker.register('/sw.js');
        });
    }

    // ===== Print Styles Enhancement =====
    window.addEventListener('beforeprint', function() {
        // Add print-specific classes or styles
        document.body.classList.add('printing');
    });
    
    window.addEventListener('afterprint', function() {
        // Remove print-specific classes
        document.body.classList.remove('printing');
    });
});