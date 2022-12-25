function checkIfGuessHasValidValue(guess) {
	const number = +guess;

	if (invalidGuess(number)) {
		guessElement.innerHTML += `<div>Valor Inválido!</div>`;
		return;
	}

	if (numberGreaterOrLessThanAllowedValue(number)) {
		guessElement.innerHTML += `<div>Valor inválido:
			Fale um número entre <strong>${minValue}</strong> e <strong>${maxValue}</strong></div>`;
		return;
	}

	// sucesso na advinhação
	if (number === secretNumber) {
		document.body.innerHTML = `
			<h2>Você acertou!</h2>
			<h3>O número secreto era ${secretNumber}.</h3>

			<button id="play-again" class="btn-play">Jogar novamente</button>
		`
	} else if (number > secretNumber) {
		guessElement.innerHTML += `
			<div>
				O número secreto é menor
				<i class="ph-arrow-down"></i>
			</div>
		`
	} else {
		guessElement.innerHTML += `
			<div>
				O número secreto é maior
				<i class="ph-arrow-up"></i>
			</div>
		`
	}
}

function invalidGuess(number) {
	return Number.isNaN(number);
}

function numberGreaterOrLessThanAllowedValue(number) {
	return number > maxValue || number < minValue;
}
