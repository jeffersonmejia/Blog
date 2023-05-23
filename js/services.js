import { appendBurgerModal, toggleModal } from './modules/burger.js'

const d = document
const $services = d.querySelector('.navbar-services'),
	$header = d.querySelector('header'),
	$servicesCloned = $services.cloneNode(true),
	$burgerMenu = d.querySelector('.burger-menu i'),
	$headerButton = d.getElementById('header-button')

function isMobileDevice() {
	const mobileRegex = [
		{ name: 'android', regex: /Android/i },
		{ name: 'ios', regex: /iPhone|iPad|iPod/i },
		{ name: 'blackberry', regex: /BlackBerry/i },
		{ name: 'windows', regex: /IEMobile/i },
		{ name: 'opera', regex: /Opera Mini/i },
	]

	const userAgent = navigator.userAgent

	const filtered = mobileRegex.filter((device) => {
		return device.regex.test(userAgent)
	})

	return filtered.length > 0
}

function sendClientMessage(message) {
	const prex = '593'
	const tel = `${prex}987091528`
	let encoded = encodeURIComponent(message)
	const desktop = `https://web.whatsapp.com/send?phone=${tel}&text=${encoded}`

	const mobile = `https://api.whatsapp.com/send/?phone=%2B${tel}&text=${encoded}&type=phone_number&app_absent=0`
	const url = isMobileDevice() ? mobile : desktop
	window.open(url, '_blank')
}

d.addEventListener('DOMContentLoaded', (e) => {
	appendBurgerModal($header, $servicesCloned)
})

d.addEventListener('click', ({ target }) => {
	const $burgerModal = $header.querySelector('.burger-modal')
	toggleModal(target, $burgerModal, $burgerMenu)
	if (target.matches('#header-button')) {
		window.scrollTo({
			top: 612,
			behavior: 'smooth', // Opcional: hace que el desplazamiento sea suave
		})
	}

	if (target.matches('.product img') || target.matches('.hidden-container')) {
		const $product = target.parentElement.querySelector('figcaption')
		const product = $product.querySelector('small').textContent
		const message = `Hola, necesito información sobre el producto: ${product}`
		sendClientMessage(message)
	}
})
