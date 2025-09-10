// Main JavaScript for Nursing Volunteer Community Website (Static Version)

// Static data for stories and search functionality
const stories = {
    1: {
        id: 1,
        title: "Healing Hearts in Haiti",
        author: "Sarah Johnson",
        location: "Port-au-Prince, Haiti",
        date_created: "2024-01-15",
        content: `My three-month volunteer experience at a rural clinic in Haiti transformed my perspective on healthcare. Working with limited resources, I learned to be resourceful and creative in patient care.

The clinic served a community of over 5,000 people with just two rooms and basic medical supplies. Despite the challenges, the resilience and gratitude of the patients inspired me daily. I helped treat everything from minor infections to complex medical conditions.

One of my most memorable experiences was helping deliver a baby during a power outage using only flashlights. The mother's courage and the family's joy reminded me why I became a nurse in the first place.

This experience taught me that healing isn't just about advanced technology or perfect conditions - it's about compassion, dedication, and the human connection between caregiver and patient. I returned home with a renewed sense of purpose and a deeper appreciation for the impact nurses can make worldwide.`
    },
    2: {
        id: 2,
        title: "Emergency Response in Nepal",
        author: "Michael Chen",
        location: "Kathmandu, Nepal",
        date_created: "2023-12-08",
        content: `Following the 2023 earthquake, I joined an emergency medical team in Nepal. The experience of providing critical care in disaster zones taught me invaluable lessons about resilience and rapid response healthcare.

Our team set up field hospitals in affected areas, treating injured survivors and providing ongoing medical care. Working 16-hour shifts in challenging conditions, we managed to save countless lives and provide comfort to those who had lost everything.

The coordination between international aid workers and local healthcare providers was remarkable. Despite language barriers and cultural differences, our shared commitment to healing created an immediate bond.

I witnessed the incredible strength of the Nepali people as they rebuilt their communities while caring for each other. Children would smile despite their injuries, and families would share their limited food with our medical team.

This mission reinforced my belief that nursing is a universal language of care that transcends borders and circumstances.`
    },
    3: {
        id: 3,
        title: "Maternal Care in Kenya",
        author: "Emma Rodriguez",
        location: "Nairobi, Kenya",
        date_created: "2023-11-22",
        content: `Working in a maternity ward in Kenya opened my eyes to the challenges faced by mothers in underserved communities. Every birth was a celebration of life and hope, despite the difficult circumstances.

The hospital served rural communities where many women traveled for hours to reach proper medical care. I assisted with over 200 deliveries during my six-month stay, each one a unique story of strength and determination.

One particular case that touched my heart was a young mother who walked 15 miles in labor to reach our facility. Her baby was born healthy, and seeing her relief and joy reminded me of the vital importance of accessible maternal healthcare.

I also had the opportunity to train local birth attendants in proper hygiene and emergency procedures. Teaching these skills to community members ensures that the impact of our work continues long after international volunteers leave.

The experience deepened my understanding of global health disparities and inspired me to continue advocating for maternal health rights worldwide.`
    },
    4: {
        id: 4,
        title: "Community Health in Philippines",
        author: "David Park",
        location: "Manila, Philippines",
        date_created: "2023-10-05",
        content: `Establishing a community health program in urban slums of Manila taught me about the power of preventive care and health education in transforming communities.

Our team worked with local leaders to identify the most pressing health needs in the community. We discovered that simple interventions like clean water access and basic hygiene education could prevent many common illnesses.

I led weekly health education sessions covering topics from nutrition to disease prevention. Seeing families implement these practices and witnessing improvements in community health outcomes was incredibly rewarding.

One of our most successful initiatives was training community health workers to provide basic medical care and health education to their neighbors. This sustainable approach ensures ongoing impact even after volunteer programs end.

The warmth and hospitality of the Filipino people made this experience unforgettable. Despite facing significant challenges, their positive attitude and strong community bonds created an environment where meaningful change was possible.`
    },
    5: {
        id: 5,
        title: "Disaster Relief in Turkey",
        author: "Aisha Hassan",
        location: "Ankara, Turkey",
        date_created: "2023-09-12",
        content: `The 2023 earthquake response in Turkey was one of the most challenging yet rewarding experiences of my nursing career. Coordinating triage operations in disaster zones required quick thinking and emotional resilience.

Working with an international relief team, we provided emergency medical care to earthquake survivors. The scale of destruction was overwhelming, but the coordinated response from healthcare workers worldwide gave me hope.

I managed a field clinic that treated hundreds of patients daily, from minor injuries to major trauma cases. The experience taught me to work efficiently under pressure while maintaining compassionate care.

The strength of earthquake survivors was inspiring. Many had lost their homes but still expressed gratitude for the medical care they received. Some even volunteered to help other survivors despite their own injuries.

This mission highlighted the importance of international cooperation in disaster response and the critical role nurses play in emergency healthcare delivery.`
    },
    6: {
        id: 6,
        title: "Pediatric Care in Guatemala",
        author: "Carlos Montenegro",
        location: "Guatemala City, Guatemala",
        date_created: "2023-08-18",
        content: `Six months working with malnourished children in Guatemala changed my understanding of global health inequities. Every small improvement felt like a major victory.

The pediatric ward treated children suffering from severe malnutrition and preventable diseases. Many families traveled from remote villages seeking help for their children, often arriving after dangerous delays.

I worked closely with nutritionists to develop feeding programs and taught parents about proper nutrition using locally available foods. Seeing children regain their health and energy was the most rewarding aspect of this experience.

One child, Maria, arrived severely malnourished at 18 months old. Through weeks of careful treatment and her mother's dedication, she transformed into a healthy, happy toddler. Her recovery symbolized hope for the entire community.

This experience reinforced my commitment to pediatric nursing and inspired me to continue working in resource-limited settings where skilled nurses can make the greatest impact.`
    }
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('Nursing Volunteer Community - Static Website Loaded');
    
    // Initialize components
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeModals();
    initializeFormValidation();
    
    // Page-specific initializations
    const currentPage = getCurrentPage();
    if (currentPage === 'index') {
        initializeHomepage();
    } else if (currentPage === 'stories') {
        initializeStoriesPage();
    } else if (currentPage === 'search') {
        initializeSearchPage();
    } else if (currentPage === 'about') {
        initializeAboutPage();
    }
});

// Get current page from URL
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    return page;
}

// Navigation enhancements
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Highlight active navigation link
    const currentPage = getCurrentPage();
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if ((currentPage === 'index' && href === 'index.html') ||
            href === `${currentPage}.html`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Smooth navbar transition
    navbar.style.transition = 'transform 0.3s ease-in-out';
}

// Scroll effects for animations
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger effect for card grids
                if (entry.target.classList.contains('row')) {
                    const cards = entry.target.querySelectorAll('.card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('section, .card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations
function initializeAnimations() {
    // Counter animation for stats
    const counters = document.querySelectorAll('[data-count]');
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            const suffix = counter.textContent.includes('+') ? '+' : '';
            const prefix = counter.textContent.includes('K') ? 'K' : '';
            counter.textContent = Math.floor(current) + prefix + suffix;
        }, 20);
    };
    
    // Auto-detect and animate counters
    counters.forEach(counter => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(counter);
    });
}

// Modal enhancements
function initializeModals() {
    // Add loading states to modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function() {
            this.querySelector('.modal-body').style.minHeight = '200px';
        });
        
        modal.addEventListener('hidden.bs.modal', function() {
            this.querySelector('.modal-body').style.minHeight = 'auto';
        });
    });
    
    // Story modal functionality
    const storyButtons = document.querySelectorAll('.story-btn, .story-read-btn');
    storyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const storyId = this.getAttribute('data-story-id');
            if (storyId) {
                loadStoryModal(storyId);
            }
        });
    });
}

// Load story in modal (static version)
function loadStoryModal(storyId) {
    const modal = document.getElementById('storyModal') || document.getElementById('storyDetailModal');
    if (!modal) return;
    
    const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
    const titleElement = modal.querySelector('.modal-title');
    const bodyElement = modal.querySelector('.modal-body');
    
    // Show loading state
    titleElement.textContent = 'Loading Story...';
    bodyElement.innerHTML = `
        <div class="text-center py-4">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3 text-muted">Loading story details...</p>
        </div>
    `;
    
    modalInstance.show();
    
    // Simulate loading delay then load static data
    setTimeout(() => {
        const story = stories[storyId];
        if (story) {
            titleElement.textContent = story.title;
            bodyElement.innerHTML = `
                <div class="story-detail">
                    <div class="story-meta mb-4 p-3 bg-light rounded">
                        <div class="row">
                            <div class="col-md-6">
                                <small class="text-muted">
                                    <i class="fas fa-user me-1"></i>
                                    <strong>${story.author}</strong>
                                </small>
                            </div>
                            <div class="col-md-6">
                                <small class="text-muted">
                                    <i class="fas fa-map-marker-alt me-1"></i>
                                    ${story.location}
                                </small>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-12">
                                <small class="text-muted">
                                    <i class="fas fa-calendar me-1"></i>
                                    ${new Date(story.date_created).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="story-content">
                        ${story.content.split('\n').map(paragraph => 
                            paragraph.trim() ? `<p>${paragraph}</p>` : ''
                        ).join('')}
                    </div>
                </div>
            `;
        } else {
            titleElement.textContent = 'Story Not Found';
            bodyElement.innerHTML = `
                <div class="alert alert-warning">
                    <i class="fas fa-exclamation-triangle me-2"></i>
                    <strong>Story not found.</strong><br>
                    The requested story could not be loaded.
                </div>
            `;
        }
    }, 500);
}

// Form validation enhancements
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!this.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            this.classList.add('was-validated');
        });
        
        // Real-time validation feedback
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.checkValidity()) {
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                } else {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                }
            });
        });
    });
}

// Homepage specific functionality
function initializeHomepage() {
    // Auto-play statistics animation - already handled by counter animation
    
    // Hero section parallax effect
    const heroSection = document.querySelector('.bg-primary');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroSection.style.transform = `translateY(${parallax}px)`;
        });
    }
}

// Stories page specific functionality
function initializeStoriesPage() {
    // Story card hover effects
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Share functionality for stories modal
    const shareBtn = document.getElementById('shareStoryBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: document.getElementById('storyDetailTitle').textContent,
                    url: window.location.href
                });
            } else {
                // Fallback - copy to clipboard
                navigator.clipboard.writeText(window.location.href).then(() => {
                    this.innerHTML = '<i class="fas fa-check me-2"></i>Link Copied!';
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-share me-2"></i>Share Story';
                    }, 2000);
                });
            }
        });
    }
}

// Search page specific functionality
function initializeSearchPage() {
    const searchForm = document.getElementById('searchForm');
    const opportunitiesGrid = document.getElementById('opportunitiesGrid');
    const resultsCount = document.getElementById('resultsCount');
    const activeFilters = document.getElementById('activeFilters');
    const filterTags = document.getElementById('filterTags');
    const clearFilters = document.getElementById('clearFilters');
    const noResults = document.getElementById('noResults');
    
    if (!searchForm) return;
    
    // Search form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch();
    });
    
    // Auto-search on filter change
    const filterInputs = searchForm.querySelectorAll('input, select');
    filterInputs.forEach(input => {
        input.addEventListener('change', performSearch);
        if (input.type === 'text') {
            let timeout;
            input.addEventListener('input', function() {
                clearTimeout(timeout);
                timeout = setTimeout(performSearch, 500);
            });
        }
    });
    
    // Clear filters functionality
    clearFilters.addEventListener('click', function() {
        searchForm.reset();
        performSearch();
    });
    
    // Opportunity details modal
    const detailsButtons = document.querySelectorAll('.details-btn');
    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.opportunity-card');
            showOpportunityDetails(card);
        });
    });
    
    function performSearch() {
        const formData = new FormData(searchForm);
        const location = formData.get('location')?.toLowerCase() || '';
        const category = formData.get('category') || '';
        const commitment = formData.get('commitment') || '';
        
        const opportunities = opportunitiesGrid.querySelectorAll('.opportunity-card');
        let visibleCount = 0;
        
        opportunities.forEach(card => {
            const cardLocation = card.getAttribute('data-location') || '';
            const cardCategory = card.getAttribute('data-category') || '';
            const cardCommitment = card.getAttribute('data-commitment') || '';
            
            const matchesLocation = !location || cardLocation.toLowerCase().includes(location);
            const matchesCategory = !category || cardCategory === category;
            const matchesCommitment = !commitment || cardCommitment === commitment;
            
            if (matchesLocation && matchesCategory && matchesCommitment) {
                card.classList.remove('hidden');
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.classList.add('hidden');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        // Update results count
        resultsCount.textContent = visibleCount;
        
        // Show/hide no results message
        if (visibleCount === 0) {
            noResults.classList.remove('d-none');
        } else {
            noResults.classList.add('d-none');
        }
        
        // Update active filters display
        updateActiveFilters(location, category, commitment);
    }
    
    function updateActiveFilters(location, category, commitment) {
        const hasFilters = location || category || commitment;
        
        if (hasFilters) {
            activeFilters.classList.remove('d-none');
            clearFilters.classList.remove('d-none');
            
            let tagsHTML = '';
            if (location) {
                tagsHTML += `<span class="badge bg-info"><i class="fas fa-map-marker-alt me-1"></i>${location}</span>`;
            }
            if (category) {
                tagsHTML += `<span class="badge bg-success"><i class="fas fa-tag me-1"></i>${category}</span>`;
            }
            if (commitment) {
                tagsHTML += `<span class="badge bg-warning"><i class="fas fa-clock me-1"></i>${commitment}</span>`;
            }
            filterTags.innerHTML = tagsHTML;
        } else {
            activeFilters.classList.add('d-none');
            clearFilters.classList.add('d-none');
        }
    }
    
    function showOpportunityDetails(card) {
        const modal = document.getElementById('opportunityModal');
        const modalTitle = document.getElementById('opportunityModalTitle');
        const modalBody = document.getElementById('opportunityModalBody');
        const applyButton = document.getElementById('applyButton');
        
        // Extract data from the card
        const title = card.querySelector('.card-title').textContent;
        const organization = card.querySelector('.fa-building').parentElement.querySelector('strong').textContent;
        const location = card.querySelector('.fa-map-marker-alt').parentElement.textContent.trim().replace(/.*\s/, '');
        const commitment = card.querySelector('.fa-clock').parentElement.textContent.trim().replace(/.*\s/, '');
        const posted = card.querySelector('.fa-calendar').parentElement.textContent.trim().replace('Posted ', '');
        const description = card.querySelector('.card-text').textContent;
        const requirements = card.querySelector('.requirements-preview p')?.textContent || 'No specific requirements listed.';
        const applyLink = card.querySelector('.btn-primary').getAttribute('href');
        
        // Update modal content
        modalTitle.textContent = title;
        
        modalBody.innerHTML = `
            <div class="opportunity-details">
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h6 class="text-muted mb-2">Organization</h6>
                        <p class="fw-bold">${organization}</p>
                    </div>
                    <div class="col-md-6">
                        <h6 class="text-muted mb-2">Location</h6>
                        <p>${location}</p>
                    </div>
                </div>
                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h6 class="text-muted mb-2">Commitment Type</h6>
                        <p>${commitment}</p>
                    </div>
                    <div class="col-md-6">
                        <h6 class="text-muted mb-2">Date Posted</h6>
                        <p>${posted}</p>
                    </div>
                </div>
                
                <div class="mb-4">
                    <h6 class="text-muted mb-2">Description</h6>
                    <p>${description}</p>
                </div>
                
                <div class="mb-4">
                    <h6 class="text-muted mb-2">Requirements</h6>
                    <p>${requirements}</p>
                </div>
            </div>
        `;
        
        // Update apply button
        applyButton.setAttribute('href', applyLink);
    }
    
    // Opportunity card hover effects
    const opportunityCards = document.querySelectorAll('.opportunity-card');
    opportunityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
}

// About page specific functionality
function initializeAboutPage() {
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            // Create mailto link
            const mailtoLink = `mailto:contact@nursevolunteer.org?subject=${encodeURIComponent(subject || 'Contact Form Submission')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                this.reset();
            }, 3000);
        });
    }
}

// Utility function for smooth scrolling
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Error handling for operations
function handleError(error, fallbackMessage = 'An error occurred') {
    console.error('Error:', error);
    
    // Show user-friendly error message
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-warning alert-dismissible fade show position-fixed';
    alertDiv.style.top = '20px';
    alertDiv.style.right = '20px';
    alertDiv.style.zIndex = '9999';
    alertDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle me-2"></i>
        ${fallbackMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Initialize tooltips if Bootstrap tooltips are needed
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Call tooltip initialization
initializeTooltips();

// Export functions for use in other scripts if needed
window.NursingVolunteerApp = {
    loadStoryModal,
    smoothScrollTo,
    handleError,
    stories
};