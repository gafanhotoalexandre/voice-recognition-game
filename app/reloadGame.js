document.body.addEventListener('click', event => {
	if (event.target.id === 'play-again') {
		document.body.classList.remove('bg-dark');
		window.location.reload();
	}
})
