function checkIfGuessHasValidValue(guess) {
    const number = +guess;

    if (Number.isNaN(number)) {
        console.log('O valor inserido é inválido');
    }
}