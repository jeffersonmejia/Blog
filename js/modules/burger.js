const d = document

export function appendBurgerModal($header, $clone) {
	const $close = d.createElement('li')
	$close.textContent = 'Cerrar'
	$close.classList.add('close-burger-modal')

	$clone.classList.add('hidden')
	$clone.appendChild($close)
	$clone.classList.add('modal', 'burger-modal')
	$header.appendChild($clone)
}

export function toggleModal(clicked, $modal) {
	if (clicked.matches('.burger-menu') || clicked.matches('.burger-menu *')) {
		$modal.classList.remove('hidden')
	} else if (clicked.matches('.close-burger-modal')) {
		$modal.classList.add('hidden')
	}
}
