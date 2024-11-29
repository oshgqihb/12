// script.js

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Merci ${name}, votre message a bien été envoyé !`);
        // Réinitialise le formulaire
        this.reset();
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
