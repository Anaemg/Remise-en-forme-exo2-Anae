document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Veuillez remplir tous les champs.');
        } else {
            // Ici, vous pouvez ajouter du code pour soumettre le formulaire, par exemple, en l'envoyant à un serveur.
            alert('Formulaire soumis avec succès !');
            form.reset();
        }
    });
});
