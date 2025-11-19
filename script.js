// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const articles = document.querySelectorAll('.post');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        articles.forEach(article => {
            const title = article.querySelector('.post-title').textContent.toLowerCase();
            const excerpt = article.querySelector('.post-excerpt').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });

    // Add hover effects to articles
    articles.forEach(article => {
        article.addEventListener('mouseenter', () => {
            article.style.transform = 'translateY(-2px)';
            article.style.transition = 'all 0.3s ease';
            article.style.boxShadow = '0 8px 24px rgba(16,24,40,0.1)';
        });

        article.addEventListener('mouseleave', () => {
            article.style.transform = 'translateY(0)';
            article.style.boxShadow = 'var(--shadow)';
        });
    });

    // Add smooth scroll to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href !== '#') {
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add click effect to recent post titles
    const recentPosts = document.querySelectorAll('.recent-post-title');
    recentPosts.forEach(post => {
        post.addEventListener('click', () => {
            post.style.color = 'var(--accent)';
            setTimeout(() => {
                post.style.color = 'var(--text)';
            }, 200);
        });
    });
});