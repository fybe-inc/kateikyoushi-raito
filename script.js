document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other FAQs
            faqQuestions.forEach(item => {
                if (item !== question) {
                    item.classList.remove('active');
                    item.nextElementSibling.style.maxHeight = null;
                }
            });
            
            // Toggle current FAQ
            if (!isActive) {
                this.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                this.classList.remove('active');
                answer.style.maxHeight = null;
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send this data to a server
            console.log('Form submitted with:', { name, email, phone, message });
            
            // Show success message
            alert('お問い合わせありがとうございます。担当者よりご連絡いたします。');
            
            // Reset form
            this.reset();
        });
    }

    // Create images directory if needed
    console.log('Website loaded successfully!');
});

// Animation for strength items on scroll
window.addEventListener('scroll', function() {
    const strengthItems = document.querySelectorAll('.strength-item');
    
    strengthItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect();
        
        // Check if item is in viewport
        if (itemPosition.top < window.innerHeight && itemPosition.bottom >= 0) {
            item.classList.add('animated');
        }
    });
});
