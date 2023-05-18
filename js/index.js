const d = document
const $services = d.querySelector('.navbar-services'),
	$linkServices = d.querySelectorAll('.navbar-services a'),
	$header = d.querySelector('header'),
	$servicesCloned = $services.cloneNode(true)

function appendBurgerModal() {
	const $close = d.createElement('li')
	$close.textContent = 'Cerrar'
	$close.classList.add('close-burger-modal')

	$servicesCloned.classList.add('hidden')
	$servicesCloned.appendChild($close)
	$servicesCloned.classList.add('modal', 'burger-modal')
	$header.appendChild($servicesCloned)
}

function toggleModal(clicked) {
	const $burgerModal = $header.querySelector('.burger-modal')
	if (clicked.matches('.burger-menu') || clicked.matches('.burger-menu *')) {
		$burgerModal.classList.remove('hidden')
	} else if (clicked.matches('.close-burger-modal')) {
		$burgerModal.classList.add('hidden')
	}
}

d.addEventListener('DOMContentLoaded', (e) => {
	appendBurgerModal()
})

d.addEventListener('click', ({ target }) => {
	toggleModal(target)
})
