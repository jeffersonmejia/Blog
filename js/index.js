import { appendBurgerModal, toggleModal } from './modules/burger.js'

const d = document
const $services = d.querySelector('.navbar-services'),
	$header = d.querySelector('header'),
	$servicesCloned = $services.cloneNode(true),
	$burgerMenu = d.querySelector('.burger-menu i')

d.addEventListener('DOMContentLoaded', (e) => {
	appendBurgerModal($header, $servicesCloned)
})

d.addEventListener('click', ({ target }) => {
	const $burgerModal = $header.querySelector('.burger-modal')
	toggleModal(target, $burgerModal, $burgerMenu)
})
