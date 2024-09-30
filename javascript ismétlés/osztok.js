function kiir() {
    let eredmeny = '';

    for (let szam = 10; szam <= 30; szam++) {
        eredmeny += szam + ': ';
        let oszto = 1;
        while (oszto <= szam) {
            if (szam % oszto === 0) {
                eredmeny += oszto + ', ';
            }
            oszto++;
        }
        eredmeny += '\n';
    }

    document.getElementById('eredmeny').textContent = eredmeny;
}
