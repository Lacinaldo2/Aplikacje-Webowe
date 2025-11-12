function pokazCzas() {
    const teraz = new Date(); // aktualna data i czas
    const godzina = teraz.getHours().toString().padStart(2, '0');
    const minuta = teraz.getMinutes().toString().padStart(2, '0');
    const sekunda = teraz.getSeconds().toString().padStart(2, '0');

    const czas = `${godzina}:${minuta}:${sekunda}`;
    
    document.getElementById('zegarek').textContent = czas;
}

// od razu pokaz pierwszy czas
pokazCzas();

// aktualizuj co sekundę
setInterval(pokazCzas, 1000);
