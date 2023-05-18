const d = document

export function appendBurgerModal($header, $clone) {
	$clone.classList.add('hidden')
	$clone.classList.add('modal', 'burger-modal')
	$header.appendChild($clone)
}

export function toggleModal(clicked, $modal, $burgerMenu) {
	if (clicked.matches('.burger-menu') || clicked.matches('.burger-menu *')) {
		if ($burgerMenu.classList.contains('fa-bars')) {
			$burgerMenu.classList.remove('fa-bars')
			$burgerMenu.classList.add('fa-sharp', 'fa-xmark')
		} else {
			$burgerMenu.classList.add('fa-bars')
			$burgerMenu.classList.remove('fa-sharp', 'fa-xmark')
		}
		$modal.classList.toggle('hidden')
	}
}
