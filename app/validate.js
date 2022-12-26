function checkIfGuessHasValidValue(guess) {
	const number = +guess;

	if (invalidGuess(number)) {
		if (guess.toUpperCase() === 'GAME OVER') {
			document.body.innerHTML = `
				<h2>Game Over!!!</h2>
				<h3>Pressione o botão para jogar novamente.</h3>
				<button id="play-again" class="btn-play outline-style">Jogar novamente</button>
			`;
			document.body.classList.add('bg-dark');
		} else {
			guessElement.innerHTML += `<div>Valor Inválido!</div>`;
			return;
		}
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

			<button id="play-again" class="btn-play outline-style">Jogar novamente</button>
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
