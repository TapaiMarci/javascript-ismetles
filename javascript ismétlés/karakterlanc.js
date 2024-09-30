function sztringIteralas() {
    const bemenetiSztring = document.getElementById('bemenetiSztring').value;
    const kimenetDiv = document.getElementById('kimenet');
    kimenetDiv.innerHTML = ''; // Előző kimenet törlése

    for (let i = 0; i < bemenetiSztring.length; i++) {
        const betu = document.createElement('div');
        betu.textContent = bemenetiSztring[i];
        kimenetDiv.appendChild(betu);
    }
}
