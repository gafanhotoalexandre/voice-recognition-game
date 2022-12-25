document.body.addEventListener('click', event => {
	if (event.target.id === 'play-again') {
		window.location.reload();
	}
})
