document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const screenHeight = window.innerHeight;
            const targetPosition = topOffset - (screenHeight / 2);

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});