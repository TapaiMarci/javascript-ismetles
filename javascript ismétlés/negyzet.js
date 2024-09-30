function rajzol() {
    const meret = document.getElementById('meret').value;
    let eredmeny = '';

    for (let i = 0; i < meret; i++) {
        for (let j = 0; j < meret; j++) {
            if (i === j || i + j === parseInt(meret) - 1) {
                eredmeny += '%';
            } else {
                eredmeny += ' ';
            }
        }
        eredmeny += '\n';
    }

    document.getElementById('eredmeny').textContent = eredmeny;
}
