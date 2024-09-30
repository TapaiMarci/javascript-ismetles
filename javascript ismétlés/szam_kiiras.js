function kiir() {
    let eredmeny = '';
    let skipCount = 1;
    let skipIndex = 1;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (skipCount === skipIndex) {
                skipIndex++;
                skipCount = 1;
                continue;
            }
            skipCount++;
        }
        eredmeny += i + ', ';
    }

    document.getElementById('eredmeny').textContent = eredmeny.slice(0, -2);
}
