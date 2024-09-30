function fizzBuzz() {
    const szam = document.getElementById('szam').value;
    let eredmeny = '';

    for (let i = 1; i <= szam; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            eredmeny += 'fizzbuzz, ';
        } else if (i % 3 === 0) {
            eredmeny += 'fizz, ';
        } else if (i % 5 === 0) {
            eredmeny += 'buzz, ';
        } else {
            eredmeny += i + ', ';
        }
    }

    document.getElementById('eredmeny').innerText = eredmeny.slice(0, -2);
}
