document.getElementById('rpsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const player1 = parseInt(document.getElementById('player1').value);
    const player2 = parseInt(document.getElementById('player2').value);
    let result;

    if (player1 === player2) {
        result = 'A játék döntetlen.';
    } else if ((player1 === 0 && player2 === 2) || (player1 === 1 && player2 === 0) || (player1 === 2 && player2 === 1)) {
        result = 'Az első játékos nyert.';
    } else {
        result = 'A második játékos nyert.';
    }

    document.getElementById('result').textContent = result;
});
