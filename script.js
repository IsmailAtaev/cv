document.addEventListener('DOMContentLoaded', () => {
    // Print functionality
    const printBtn = document.getElementById('print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Intersection Observer for scroll reveal
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });

    // Hover effect on skill tags
    const skillTags = document.querySelectorAll('.skill-tags span');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.borderColor = 'var(--accent-color)';
            tag.style.color = 'var(--accent-color)';
        });
        tag.addEventListener('mouseleave', () => {
            tag.style.borderColor = 'var(--glass-border)';
            tag.style.color = 'var(--text-main)';
        });
    });
});
