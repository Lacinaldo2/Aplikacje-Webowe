// pobieramy formularz po ID
const form = document.getElementById('formularz');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nick = document.getElementById('nick').value;
    const email = document.getElementById('email').value;
    const temat = document.querySelector('input[name="temat"]:checked')?.value;
    const wiadomosc = document.getElementById('wiadomosc').value;

    alert("Wiadomość wysłano");
    console.log({ nick, email, temat, wiadomosc });
    form.reset();

});
