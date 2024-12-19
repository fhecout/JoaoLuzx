// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação do header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = '#ffffff';
    }
});

// Formulário de contato
document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    this.reset();
});
