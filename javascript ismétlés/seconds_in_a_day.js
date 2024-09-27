document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ora = parseInt(document.getElementById('ora').value);
    const perc = parseInt(document.getElementById('perc').value);
    const masodperc = parseInt(document.getElementById('masodperc').value);

    console.log(`Óra: ${ora}, Perc: ${perc}, Másodperc: ${masodperc}`);

    const totalSecondsInADay = 24 * 60 * 60;
    const elapsedSeconds = ora * 60 * 60 + perc * 60 + masodperc;

    console.log(`Eltelt másodpercek: ${elapsedSeconds}`);

    const remainingSeconds = totalSecondsInADay - elapsedSeconds;

    console.log(`Hátralévő másodpercek: ${remainingSeconds}`);

    document.getElementById('hatralevoMasodpercek').textContent = remainingSeconds;
});
