document.querySelector('#hamburger')?.addEventListener('click', () => {
	console.log("click")
	document.querySelector('#nav-links')?.classList.toggle('max-sm:hidden');
});