function getRandomNumber() {
	return parseInt(Math.random() * (maxValue - minValue + 1) + minValue);
}


const minValue = 200;
const maxValue = 250;
const secretNumber = getRandomNumber()

const elementMinValue = document.querySelector('#min-value'),
			elementMaxValue = document.querySelector('#max-value');

elementMinValue.innerHTML = minValue;
elementMaxValue.innerHTML = maxValue;

console.log('Número Secreto:', secretNumber);
