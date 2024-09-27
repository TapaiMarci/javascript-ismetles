document.getElementById('cuboidForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const hossza = parseFloat(document.getElementById('hossza').value);
    const szelesseg = parseFloat(document.getElementById('szelesseg').value);
    const magassag = parseFloat(document.getElementById('magassag').value);

    const kerulet = 2 * (hossza * szelesseg + szelesseg * magassag + magassag * hossza);
    const terulet = hossza * szelesseg * magassag;

    document.getElementById('kerulet').textContent = kerulet.toFixed(2);
    document.getElementById('terulet').textContent = terulet.toFixed(2);
});