// Mobile Navigation Controller
const MobileNavigationController = (() => {
    let menuState = false;
    
    const init = () => {
        const toggleButton = document.getElementById('mobileMenuActivator');
        const navPanel = document.getElementById('mainNavPanel');
        const overlay = createOverlayElement();
        
        if (!toggleButton || !navPanel) return;
        
        toggleButton.addEventListener('click', () => {
            menuState = !menuState;
            updateMenuDisplay(toggleButton, navPanel, overlay);
        });
        
        overlay.addEventListener('click', () => {
            menuState = false;
            updateMenuDisplay(toggleButton, navPanel, overlay);
        });
        
        // Close on escape key
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape' && menuState) {
                menuState = false;
                updateMenuDisplay(toggleButton, navPanel, overlay);
            }
        });
    };
    
    const createOverlayElement = () => {
        const overlayDiv = document.createElement('div');
        overlayDiv.className = 'nav-backdrop-overlay';
        document.body.appendChild(overlayDiv);
        return overlayDiv;
    };
    
    const updateMenuDisplay = (button, panel, overlay) => {
        if (menuState) {
            button.classList.add('activated');
            panel.classList.add('visible');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            button.classList.remove('activated');
            panel.classList.remove('visible');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    
    return { init };
})();

// Newsletter Form Handler
const NewsletterManager = (() => {
    const init = () => {
        const form = document.getElementById('emailSubscriptionForm');
        if (!form) return;
        
        form.addEventListener('submit', handleSubmission);
    };
    
    const handleSubmission = (evt) => {
        evt.preventDefault();
        const emailInput = evt.target.querySelector('input[type="email"]');
        
        if (emailInput && validateEmailFormat(emailInput.value)) {
            displaySuccessMessage(evt.target);
            emailInput.value = '';
        } else {
            displayErrorMessage(evt.target);
        }
    };
    
    const validateEmailFormat = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };
    
    const displaySuccessMessage = (formElement) => {
        const msg = document.createElement('div');
        msg.className = 'subscription-notification success-state';
        msg.textContent = 'Successfully subscribed! Check your inbox.';
        formElement.appendChild(msg);
        
        setTimeout(() => msg.remove(), 4000);
    };
    
    const displayErrorMessage = (formElement) => {
        const msg = document.createElement('div');
        msg.className = 'subscription-notification error-state';
        msg.textContent = 'Please provide a valid email address.';
        formElement.appendChild(msg);
        
        setTimeout(() => msg.remove(), 4000);
    };
    
    return { init };
})();

// Smooth Scroll Behavior for Links
const SmoothScrollHandler = (() => {
    const init = () => {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        internalLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });
    };
    
    const handleLinkClick = (evt) => {
        const targetId = evt.currentTarget.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            evt.preventDefault();
            const offsetPosition = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    return { init };
})();

// Article Card Interaction Enhancement
const ArticleInteractionEnhancer = (() => {
    const init = () => {
        const articleCards = document.querySelectorAll('.publication-card');
        articleCards.forEach(card => {
            card.addEventListener('mouseenter', () => addSmoothTransition(card));
        });
    };
    
    const addSmoothTransition = (element) => {
        element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    };
    
    return { init };
})();

// Page Load Animation Controller
const PageLoadAnimator = (() => {
    const init = () => {
        window.addEventListener('load', () => {
            document.body.classList.add('content-loaded');
            animateElements();
        });
    };
    
    const animateElements = () => {
        const animatableItems = document.querySelectorAll('.publication-card, .trending-article-item');
        
        animatableItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 50);
        });
    };
    
    return { init };
})();

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    MobileNavigationController.init();
    NewsletterManager.init();
    SmoothScrollHandler.init();
    ArticleInteractionEnhancer.init();
    PageLoadAnimator.init();
});

// Dynamic date updater for copyright year
const updateCopyrightYear = () => {
    const yearElement = document.getElementById('copyrightYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
};

updateCopyrightYear();
