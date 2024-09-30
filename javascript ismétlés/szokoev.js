document.getElementById('leapYearForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const year = parseInt(document.getElementById('year').value);
    let isLeapYear;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }

    const resultText = isLeapYear ? `${year} szökőév.` : `${year} nem szökőév.`;
    document.getElementById('result').textContent = resultText;
});
