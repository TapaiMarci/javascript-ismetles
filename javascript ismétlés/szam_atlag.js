function atlagSzamitas() {
    const bemenetiSzam = document.getElementById('bemenetiSzam').value;
    let osszeg = 0;
    let szamjegyekSzama = bemenetiSzam.length;
    const kimenetDiv = document.getElementById('kimenet');
    kimenetDiv.innerHTML = ''; // Előző kimenet törlése

    for (let i = 0; i < szamjegyekSzama; i++) {
        osszeg += parseInt(bemenetiSzam[i]);
    }

    let atlag = osszeg / szamjegyekSzama;
    kimenetDiv.textContent = `A számjegyek átlaga ${atlag}.`;
}
