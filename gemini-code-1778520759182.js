document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Effetto caricamento sul bottone
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Invio in corso...';
            submitBtn.disabled = true;

            // Simulazione invio dati (essendo una pagina statica)
            setTimeout(() => {
                // Nascondi il form e mostra successo
                contactForm.style.display = 'none';
                
                feedback.classList.remove('hidden');
                feedback.innerHTML = `
                    <div style="text-align:center; padding: 40px 0;">
                        <div style="font-size: 3rem; margin-bottom: 20px;">✓</div>
                        <h3 style="margin-bottom: 10px;">Richiesta inviata con successo!</h3>
                        <p>Grazie per averci contattato. Riceverai una chiamata per la tua valutazione gratuita entro le prossime 48 ore lavorative.</p>
                    </div>
                `;
                
                // Scroll al messaggio di feedback
                feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1500);
        });
    }

    // Smooth scroll per i link interni
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});