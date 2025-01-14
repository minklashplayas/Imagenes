document.addEventListener("DOMContentLoaded", function() {
    const tooltip = document.querySelector('.tooltip');

    // Mostrar el tooltip después de 10 segundos
    setTimeout(function() {
        tooltip.classList.add('active');
    }, 5000); // 5 segundos

    // Ocultar el tooltip después de 40 segundos
    setTimeout(function() {
        tooltip.classList.remove('active');
    }, 15000); // 15 segundos (10s + 40s)
});
      
const notification = document.getElementById('notification');
   document.querySelectorAll('img').forEach(img => {
            img.addEventListener('contextmenu', e => {
                e.preventDefault();
                showNotification();
            });
        });

        function showNotification() {
            notification.classList.add('show');
            setTimeout(() => notification.classList.remove('show'), 3000);
        }

        function hideNotification() {
            notification.classList.remove('show');
        }

        const blocks = document.querySelectorAll('.block');
        function checkVisibility() {
            blocks.forEach(block => {
                const rect = block.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    block.classList.add('visible');
                } else {
                    block.classList.remove('visible');
                }
            });
        }
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('load', checkVisibility);
  
