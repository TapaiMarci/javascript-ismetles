function faktorialisSzamitas() {
    const bemenetiSzam = parseInt(document.getElementById('bemenetiSzam').value);
    let faktorialis = 1;
    const kimenetDiv = document.getElementById('kimenet');
    kimenetDiv.innerHTML = ''; // Előző kimenet törlése

    for (let i = 1; i <= bemenetiSzam; i++) {
        faktorialis *= i;
    }

    kimenetDiv.textContent = `${bemenetiSzam} faktoriálisa ${faktorialis}.`;
}
