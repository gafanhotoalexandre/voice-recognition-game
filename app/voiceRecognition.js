const guessElement = document.querySelector('#guess')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(event) {
	const guess = event.results[0][0].transcript;
	const filteredGuess = guess.replace(/[!?\.]/g, '')

	showGuessInScreen(filteredGuess);
	checkIfGuessHasValidValue(filteredGuess);
}

function showGuessInScreen(guess) {
	guessElement.innerHTML = `
		<div>Você disse:</div>

		<span class="guess-box">${guess}</span>
	`
}
