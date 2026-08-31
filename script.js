// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transform = '';
                bar.style.opacity = '';
            }
        });
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--bg-white)';
            navbar.style.backdropFilter = '';
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    
    function highlightActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveLink);

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showNotification('Mohon lengkapi semua field!', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Format email tidak valid!', 'error');
                return;
            }
            
            // Simulate form submission (in real implementation, this would send to a server)
            showNotification('Pesan berhasil dikirim! Saya akan segera menghubungi Anda.', 'success');
            contactForm.reset();
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;

        // Set background color based on type
        switch(type) {
            case 'success':
                notification.style.background = '#10b981';
                break;
            case 'error':
                notification.style.background = '#ef4444';
                break;
            case 'info':
            default:
                notification.style.background = '#3b82f6';
                break;
        }

        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe portfolio items and achievement cards
    document.querySelectorAll('.portfolio-item, .achievement-card').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Typing animation for hero title
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50);
            }
        }

        // Start typing animation after page loads
        setTimeout(typeWriter, 500);
    }

    // Counter animation for achievements (if needed in future)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Add hover effect to cards
    document.querySelectorAll('.portfolio-item, .achievement-card, .profile-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - scrolled / 600;
        }
    });

    // Initialize tooltips (if needed)
    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', function(e) {
                const tooltipText = this.getAttribute('data-tooltip');
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = tooltipText;
                tooltip.style.cssText = `
                    position: absolute;
                    background: #333;
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 14px;
                    z-index: 1000;
                    pointer-events: none;
                    white-space: nowrap;
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    margin-bottom: 10px;
                `;
                
                this.appendChild(tooltip);
            });
            
            element.addEventListener('mouseleave', function() {
                const tooltip = this.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            });
        });
    }

    // Initialize
    initTooltips();

    // Console welcome message
    console.log('%c🎓 E-Portofolio PPG Prajabatan', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cTerima kasih telah mengunjungi portofolio saya!', 'color: #64748b; font-size: 14px;');
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Reflection Slider Functionality
let currentSlide = 0;
const slides = [
    {
        title: "Pembelajaran PPL Terbimbing",
        content: "Selama mengikuti tahapan Praktik Pengalaman Lapangan (PPL) Terbimbing dari awal hingga akhir, saya memperoleh banyak pengalaman dan pembelajaran yang sangat berharga sebagai peserta PPG calon guru. Saya belajar bagaimana merencanakan pembelajaran yang baik, menyusun perangkat ajar, mengelola kelas, serta membangun komunikasi yang positif dengan murid. Selain itu, saya juga memahami pentingnya menciptakan suasana belajar yang aktif, menyenangkan, dan berpusat pada murid agar tujuan pembelajaran dapat tercapai secara optimal. Pengalaman ini membantu saya untuk lebih memahami peran dan tanggung jawab seorang guru profesional, khususnya dalam pembelajaran PJOK.",
        highlights: []
    },
    {
        title: "Pengalaman & Solusi",
        content: "Dalam pelaksanaan PPL Terbimbing, terdapat beberapa pengalaman yang cukup menantang, seperti menghadapi karakter murid yang beragam, menjaga fokus dan kedisiplinan murid saat pembelajaran berlangsung, serta menyesuaikan metode pembelajaran agar semua murid dapat terlibat aktif. Tantangan lainnya adalah mengatur waktu pembelajaran agar seluruh kegiatan dapat terlaksana dengan efektif. Untuk mengatasi hal tersebut, saya berusaha menggunakan pendekatan yang lebih komunikatif dan humoris, memberikan motivasi kepada murid, serta memanfaatkan model dan media pembelajaran yang lebih menarik agar suasana kelas menjadi lebih kondusif dan interaktif.",
        highlights: []
    },
    {
        title: "Umpan Balik & Saran",
        content: "Melalui diskusi refleksi akhir, saya juga memperoleh berbagai umpan balik dan saran konstruktif dari dosen pembimbing maupun guru pamong. Saya disarankan untuk lebih meningkatkan pengelolaan kelas, memperkuat variasi metode pembelajaran, serta lebih percaya diri dalam menyampaikan materi. Selain itu, saya juga diarahkan untuk lebih memperhatikan kebutuhan dan karakteristik setiap murid agar pembelajaran menjadi lebih efektif dan inklusif. Umpan balik tersebut menjadi bahan evaluasi dan motivasi bagi saya untuk terus memperbaiki kemampuan mengajar pada tahap PPL selanjutnya, yaitu PPL Mandiri, sehingga saya dapat menjadi guru yang lebih profesional, kreatif, dan adaptif dalam proses pembelajaran.",
        highlights: []
    }
];

function showSlide(index) {
    const slideContainer = document.querySelector('.slide-container');
    const indicators = document.querySelectorAll('.indicator');
    
    // Clear existing content
    slideContainer.innerHTML = '';
    
    // Create new slide
    const slide = slides[index];
    const slideHTML = `
        <div class="slide active">
            <div class="slide-header">
                <div class="slide-icon">
                    <i class="fas fa-lightbulb"></i>
                </div>
                <div class="slide-meta">
                    <h3>${slide.title}</h3>
                </div>
            </div>
            <div class="slide-content">
                <p>${slide.content}</p>
                <div class="slide-highlights">
                    ${slide.highlights.map(highlight => `
                        <div class="highlight-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${highlight}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    slideContainer.innerHTML = slideHTML;
    
    // Update indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto-play functionality
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Philosophy Slider Functions
let currentPhilosophySlide = 0;
const philosophySlides = document.querySelectorAll('.philosophy-slide');
const philosophyIndicators = document.querySelectorAll('.philosophy-indicator');

function showPhilosophySlide(index) {
    if (!philosophySlides.length) return;
    
    // Hide all slides
    philosophySlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (philosophyIndicators[i]) philosophyIndicators[i].classList.remove('active');
    });
    
    // Show current slide
    philosophySlides[index].classList.add('active');
    if (philosophyIndicators[index]) philosophyIndicators[index].classList.add('active');
}

function changePhilosophySlide(direction) {
    if (!philosophySlides.length) return;
    
    currentPhilosophySlide += direction;
    
    // Wrap around
    if (currentPhilosophySlide >= philosophySlides.length) {
        currentPhilosophySlide = 0;
    } else if (currentPhilosophySlide < 0) {
        currentPhilosophySlide = philosophySlides.length - 1;
    }
    
    showPhilosophySlide(currentPhilosophySlide);
}

function goToPhilosophySlide(index) {
    currentPhilosophySlide = index;
    showPhilosophySlide(currentPhilosophySlide);
}

// Gallery Slider Functions
let currentGallerySlide = 0;
const gallerySlides = document.querySelectorAll('.gallery-slide');
const galleryIndicators = document.querySelectorAll('.indicator');

function showGallerySlide(index) {
    // Hide all slides
    gallerySlides.forEach((slide, i) => {
        slide.classList.remove('active');
        galleryIndicators[i].classList.remove('active');
    });
    
    // Show current slide
    gallerySlides[index].classList.add('active');
    galleryIndicators[index].classList.add('active');
}

function changeGallerySlide(direction) {
    currentGallerySlide += direction;
    
    // Wrap around
    if (currentGallerySlide >= gallerySlides.length) {
        currentGallerySlide = 0;
    } else if (currentGallerySlide < 0) {
        currentGallerySlide = gallerySlides.length - 1;
    }
    
    showGallerySlide(currentGallerySlide);
}

function goToGallerySlide(index) {
    currentGallerySlide = index;
    showGallerySlide(currentGallerySlide);
}

// Video Slider Functions
let currentVideoSlide = 0;
const videoSlides = document.querySelectorAll('.video-slide');
const totalVideoSlides = videoSlides.length;

// Modul Ajar Slider Functions
let currentModulAjarSlide = 0;
const modulAjarSlides = document.querySelectorAll('.modul-ajar-slide');
const totalModulAjarSlides = modulAjarSlides.length;

function showModulAjarSlide(index) {
    // Hide all slides
    modulAjarSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    modulAjarSlides[index].classList.add('active');
    
    // Update indicators
    const indicators = document.querySelectorAll('.modul-ajar-indicator');
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    indicators[index].classList.add('active');
    
    currentModulAjarSlide = index;
}

function changeModulAjarSlide(direction) {
    currentModulAjarSlide += direction;
    
    // Wrap around
    if (currentModulAjarSlide >= totalModulAjarSlides) {
        currentModulAjarSlide = 0;
    } else if (currentModulAjarSlide < 0) {
        currentModulAjarSlide = totalModulAjarSlides - 1;
    }
    
    showModulAjarSlide(currentModulAjarSlide);
}

function goToModulAjarSlide(index) {
    currentModulAjarSlide = index;
    showModulAjarSlide(currentModulAjarSlide);
}

// Modul Ajar Preview Functions
function openModulAjarPreview(pdfPath, title) {
    const modal = document.createElement('div');
    modal.className = 'modul-ajar-preview-modal';
    modal.innerHTML = `
        <div class="modul-ajar-preview-content">
            <div class="modul-ajar-preview-header">
                <h3>${title}</h3>
                <button class="close-modul-ajar-preview" onclick="closeModulAjarPreview()">&times;</button>
            </div>
            <div class="modul-ajar-preview-body">
                <iframe src="${pdfPath}" type="application/pdf"></iframe>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModulAjarPreview();
        }
    });
}

function closeModulAjarPreview() {
    const modal = document.querySelector('.modul-ajar-preview-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Contact Form Function
function sendMessage(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    const whatsappMessage = `Halo, saya ${fullName} (${email})\n\nSubjek: ${subject}\n\nPesan:\n${message}`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/6285800692984?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    document.getElementById('messageForm').reset();
    
    // Show success message
    showNotification('Pesan berhasil dikirim via WhatsApp!');
}

// Notification Function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function showVideoSlide(index) {
    // Hide all slides
    videoSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    videoSlides[index].classList.add('active');
    
    // Update indicators
    const indicators = document.querySelectorAll('.video-indicator');
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    indicators[index].classList.add('active');
    
    currentVideoSlide = index;
}

function changeVideoSlide(direction) {
    currentVideoSlide += direction;
    
    // Wrap around
    if (currentVideoSlide >= totalVideoSlides) {
        currentVideoSlide = 0;
    } else if (currentVideoSlide < 0) {
        currentVideoSlide = totalVideoSlides - 1;
    }
    
    showVideoSlide(currentVideoSlide);
}

function goToVideoSlide(index) {
    currentVideoSlide = index;
    showVideoSlide(currentVideoSlide);
}

// Video Fullscreen Functions
function openVideoFullscreen(videoSrc, videoTitle) {
    const modal = document.createElement('div');
    modal.className = 'video-fullscreen-modal';
    modal.innerHTML = `
        <div class="video-fullscreen-content">
            <span class="close-video-fullscreen" onclick="closeVideoFullscreen()">&times;</span>
            <video controls autoplay>
                <source src="${videoSrc}" type="video/mp4">
                Browser Anda tidak mendukung video tag.
            </video>
            <div class="video-fullscreen-info">
                <h3>${videoTitle}</h3>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVideoFullscreen();
        }
    });
}

function closeVideoFullscreen() {
    const modal = document.querySelector('.video-fullscreen-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Fullscreen Functions
let currentFullscreenIndex = 0;
const fullscreenImages = [
    { src: 'WhatsApp Image 2026-05-04 at 07.50.36.jpeg', alt: 'Foto Pembelajaran 1' },
    { src: 'WhatsApp Image 2026-05-04 at 07.50.51.jpeg', alt: 'Foto Pembelajaran 2' },
    { src: 'WhatsApp Image 2026-05-11 at 17.25.55.jpeg', alt: 'Demonstrasi Teknik Olahraga' }
];

function openFullscreen(imageSrc, imageAlt) {
    const modal = document.getElementById('fullscreenModal');
    const modalImg = document.getElementById('fullscreenImg');
    const captionText = document.getElementById('fullscreenCaption');
    
    // Find current image index
    currentFullscreenIndex = fullscreenImages.findIndex(img => img.src === imageSrc);
    if (currentFullscreenIndex === -1) currentFullscreenIndex = 0;
    
    modal.style.display = 'block';
    updateFullscreenImage();
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function updateFullscreenImage() {
    const modalImg = document.getElementById('fullscreenImg');
    const captionText = document.getElementById('fullscreenCaption');
    const currentImage = fullscreenImages[currentFullscreenIndex];
    
    modalImg.src = currentImage.src;
    captionText.innerHTML = currentImage.alt;
    
    // Update navigation buttons visibility
    updateFullscreenNavButtons();
}

function updateFullscreenNavButtons() {
    const prevBtn = document.querySelector('.prev-fullscreen');
    const nextBtn = document.querySelector('.next-fullscreen');
    
    // Hide prev button if at first image
    if (currentFullscreenIndex === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    // Hide next button if at last image
    if (currentFullscreenIndex === fullscreenImages.length - 1) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

function navigateFullscreen(direction) {
    currentFullscreenIndex += direction;
    
    // Wrap around
    if (currentFullscreenIndex >= fullscreenImages.length) {
        currentFullscreenIndex = 0;
    } else if (currentFullscreenIndex < 0) {
        currentFullscreenIndex = fullscreenImages.length - 1;
    }
    
    updateFullscreenImage();
}

function closeFullscreen() {
    const modal = document.getElementById('fullscreenModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('fullscreenModal');
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeFullscreen();
        }
    });
    
    // Keyboard navigation for fullscreen
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === 'block') {
            switch(event.key) {
                case 'Escape':
                    closeFullscreen();
                    break;
                case 'ArrowLeft':
                    navigateFullscreen(-1);
                    break;
                case 'ArrowRight':
                    navigateFullscreen(1);
                    break;
            }
        }
    });
});

// Profile Popup Functions
function openProfilePopup() {
    const popup = document.getElementById('profilePopup');
    popup.style.display = 'block';
    
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
}

function closeProfilePopup() {
    const popup = document.getElementById('profilePopup');
    popup.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close profile popup when clicking outside the content
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('profilePopup');
    
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closeProfilePopup();
        }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && popup.style.display === 'block') {
            closeProfilePopup();
        }
    });
});

// Main Portfolio Slider Functions removed (now using Grid layout)


// File Slider Functions
let currentFileSlide = {
    cycle: 0,
    lk: 0,
    lk123: 0,
    rpp: 0
};

const fileSlideCounts = {
    cycle: 3,
    lk: 2,
    lk123: 3,
    rpp: 3
};

function showFileSlide(type, index) {
    const sectionIds = {
        'cycle': 'assessment-cycle',
        'lk': 'assessment-lk78',
        'lk123': 'assessment-lk123',
        'rpp': 'assessment-rpp'
    };
    const sectionId = sectionIds[type];
    const section = document.getElementById(sectionId);
    if (!section) return;
    const slider = section.querySelector('.file-slider');
    const slides = slider.querySelectorAll('.file-slide');
    const indicators = section.querySelectorAll('.file-indicator');
    
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (indicators[i]) indicators[i].classList.remove('active');
    });
    
    // Show current slide
    slides[index].classList.add('active');
    if (indicators[index]) indicators[index].classList.add('active');
}

function changeFileSlide(type, direction) {
    currentFileSlide[type] += direction;
    
    // Wrap around
    if (currentFileSlide[type] >= fileSlideCounts[type]) {
        currentFileSlide[type] = 0;
    } else if (currentFileSlide[type] < 0) {
        currentFileSlide[type] = fileSlideCounts[type] - 1;
    }
    
    showFileSlide(type, currentFileSlide[type]);
}

function goToFileSlide(type, index) {
    currentFileSlide[type] = index;
    showFileSlide(type, currentFileSlide[type]);
}

// Initialize file sliders
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    showGallerySlide(0);
    startAutoPlay();
    
    // Main portfolio slider removed

    // Initialize file sliders
    showFileSlide('cycle', 0);
    showFileSlide('lk', 0);
    showFileSlide('lk123', 0);
    showFileSlide('rpp', 0);
    
    // Pause auto-play on hover
    const slider = document.querySelector('.reflection-slider');
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
});

// Throttle scroll events
const throttleScroll = debounce(function() {
    // Scroll-related functions here
}, 100);

window.addEventListener('scroll', throttleScroll);
