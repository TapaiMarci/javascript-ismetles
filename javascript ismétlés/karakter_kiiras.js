function kiir() {
    const szoveg = document.getElementById('szoveg').value;
    let eredmeny = '';

    for (let i = 0; i < szoveg.length; i++) {
        const karakter = szoveg[i];
        if (!karakter.match(/[a-zA-Z]/)) {
            break;
        }
        eredmeny += karakter;
    }

    document.getElementById('eredmeny').textContent = eredmeny;
}
