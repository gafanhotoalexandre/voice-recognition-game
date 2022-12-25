function checkIfGuessHasValidValue(guess) {
	const number = +guess;

	if (invalidGuess(number)) {
		guessElement.innerHTML += `<div>Valor Inválido!</div>`;
	}

	if (numberGreaterOrLessThanAllowedValue(number)) {
		guessElement.innerHTML += `<div>Valor inválido:
			Fale um número entre <strong>${minValue}</strong> e <strong>${maxValue}</strong></div>`;
	}

	if (number === secretNumber) {
		document.body.innerHTML = `
			<h2>Você acertou!</h2>
			<h3>O número secreto era ${secretNumber}.</h3>
		`
	}
}

function invalidGuess(number) {
	return Number.isNaN(number);
}

function numberGreaterOrLessThanAllowedValue(number) {
	return number > maxValue || number < minValue;
}
