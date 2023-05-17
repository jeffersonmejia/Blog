const d = document
const $services = d.querySelector('.navbar-services'),
	$linkServices = d.querySelectorAll('.navbar-services a'),
	$header = d.querySelector('header')

function appendBurgerMenu() {
	let $clone = $services.cloneNode(true)
	const $close = d.createElement('li')
	$close.textContent = 'Cerrar'
	$close.classList.add('close-burger-modal')

	$clone.appendChild($close)
	$clone.classList.add('modal', 'burger-modal')
	$header.appendChild($clone)
}

d.addEventListener('DOMContentLoaded', (e) => {
	appendBurgerMenu()
})

d.addEventListener('click', (e) => {
	if (e.target.matches('.close-burger-modal')) {
		const $burgerModal = $header.querySelector('.burger-modal')
		$burgerModal.classList.toggle('hidden')
	}
})
